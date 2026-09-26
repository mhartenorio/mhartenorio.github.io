export interface JsonLine {
  id: string; // unique path key
  indent: number;
  key?: string;
  type: 'object-open' | 'object-close' | 'array-open' | 'array-close' | 'primitive' | 'empty-object' | 'empty-array';
  value?: string | number | boolean | null;
  valueType?: 'string' | 'number' | 'boolean' | 'null';
  hasComma: boolean;
  isFoldable: boolean;
  isFolded?: boolean;
  isHighlightItem?: boolean;
  itemCount?: number;
  previewText?: string;
  originalLineNumber: number;
  path: string;
}

export function isUrl(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  return /^(https?:\/\/|mailto:)/i.test(value.trim());
}

export function isEmail(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export interface LinkInfo {
  href: string;
  isEmail: boolean;
}

export function getLinkHref(value: unknown): LinkInfo | null {
  if (typeof value !== 'string') return null;
  const str = value.trim();
  if (isEmail(str)) {
    return {
      href: str.startsWith('mailto:') ? str : `mailto:${str}`,
      isEmail: true,
    };
  }
  if (isUrl(str)) {
    return {
      href: str,
      isEmail: str.startsWith('mailto:'),
    };
  }
  return null;
}

/**
 * Builds the full flat list of lines for a given JSON value.
 */
export function buildJsonLines(data: unknown): { lines: JsonLine[]; allFoldablePaths: Set<string> } {
  const lines: JsonLine[] = [];
  const allFoldablePaths = new Set<string>();
  let currentLine = 1;

  function traverse(
    value: unknown,
    indent: number,
    path: string,
    key?: string,
    hasComma: boolean = false,
    isHighlightItem: boolean = false
  ) {
    if (value === null) {
      lines.push({
        id: path,
        path,
        indent,
        key,
        type: 'primitive',
        value: null,
        valueType: 'null',
        hasComma,
        isFoldable: false,
        isHighlightItem,
        originalLineNumber: currentLine++,
      });
      return;
    }

    if (Array.isArray(value)) {
      if (value.length === 0) {
        lines.push({
          id: path,
          path,
          indent,
          key,
          type: 'empty-array',
          hasComma,
          isFoldable: false,
          isHighlightItem,
          originalLineNumber: currentLine++,
        });
        return;
      }

      const isHighlightsArray = key === 'highlights';

      allFoldablePaths.add(path);
      lines.push({
        id: path,
        path,
        indent,
        key,
        type: 'array-open',
        hasComma,
        isFoldable: true,
        isHighlightItem,
        itemCount: value.length,
        previewText: `[ ${value.length} ${value.length === 1 ? 'item' : 'items'} ]`,
        originalLineNumber: currentLine++,
      });

      value.forEach((item, index) => {
        const itemHasComma = index < value.length - 1;
        traverse(item, indent + 1, `${path}[${index}]`, undefined, itemHasComma, isHighlightsArray);
      });

      lines.push({
        id: `${path}:close`,
        path,
        indent,
        type: 'array-close',
        hasComma,
        isFoldable: false,
        originalLineNumber: currentLine++,
      });
      return;
    }

    if (typeof value === 'object') {
      const keys = Object.keys(value as Record<string, unknown>);
      if (keys.length === 0) {
        lines.push({
          id: path,
          path,
          indent,
          key,
          type: 'empty-object',
          hasComma,
          isFoldable: false,
          isHighlightItem,
          originalLineNumber: currentLine++,
        });
        return;
      }

      allFoldablePaths.add(path);
      lines.push({
        id: path,
        path,
        indent,
        key,
        type: 'object-open',
        hasComma,
        isFoldable: true,
        isHighlightItem,
        itemCount: keys.length,
        previewText: `{ ${keys.length} ${keys.length === 1 ? 'key' : 'keys'} }`,
        originalLineNumber: currentLine++,
      });

      keys.forEach((childKey, index) => {
        const childVal = (value as Record<string, unknown>)[childKey];
        const childHasComma = index < keys.length - 1;
        traverse(childVal, indent + 1, `${path}.${childKey}`, childKey, childHasComma, false);
      });

      lines.push({
        id: `${path}:close`,
        path,
        indent,
        type: 'object-close',
        hasComma,
        isFoldable: false,
        originalLineNumber: currentLine++,
      });
      return;
    }

    // Primitive value (string, number, boolean)
    const valType = typeof value as 'string' | 'number' | 'boolean';
    lines.push({
      id: path,
      path,
      indent,
      key,
      type: 'primitive',
      value: value as string | number | boolean,
      valueType: valType,
      hasComma,
      isFoldable: false,
      isHighlightItem,
      originalLineNumber: currentLine++,
    });
  }

  traverse(data, 0, 'root', undefined, false, false);
  return { lines, allFoldablePaths };
}

export function getAncestorPaths(path: string): string[] {
  const ancestors: string[] = [];
  let current = path;
  while (true) {
    const lastDot = current.lastIndexOf('.');
    const lastBracket = current.lastIndexOf('[');
    const lastCut = Math.max(lastDot, lastBracket);
    if (lastCut <= 0) break;
    current = current.substring(0, lastCut);
    ancestors.push(current);
  }
  return ancestors;
}

/**
 * Filter lines based on which paths are currently folded.
 */
export function getVisibleLines(lines: JsonLine[], foldedPaths: Set<string>): JsonLine[] {
  const visible: JsonLine[] = [];
  let skippingUntilCloseOfPath: string | null = null;

  for (const line of lines) {
    if (skippingUntilCloseOfPath) {
      if (line.path === skippingUntilCloseOfPath && (line.type === 'object-close' || line.type === 'array-close')) {
        // We reached the matching close tag of the folded container
        skippingUntilCloseOfPath = null;
      }
      continue;
    }

    if (line.isFoldable && foldedPaths.has(line.path)) {
      visible.push({
        ...line,
        isFolded: true,
      });
      skippingUntilCloseOfPath = line.path;
      continue;
    }

    visible.push(line);
  }

  return visible;
}

/**
 * Search lines for text match and return paths that need to be expanded.
 */
export function searchJson(lines: JsonLine[], query: string): { matchingLineIds: Set<string>; pathsToUnfold: Set<string> } {
  const matchingLineIds = new Set<string>();
  const pathsToUnfold = new Set<string>();

  if (!query.trim()) {
    return { matchingLineIds, pathsToUnfold };
  }

  const q = query.toLowerCase();

  for (const line of lines) {
    let matched = false;
    if (line.key && line.key.toLowerCase().includes(q)) {
      matched = true;
    }
    if (line.value !== undefined) {
      const valStr = String(line.value).toLowerCase();
      if (valStr.includes(q) || valStr.replace(/\*\*/g, '').includes(q)) {
        matched = true;
      }
    }

    if (matched) {
      matchingLineIds.add(line.id);
      const ancestors = getAncestorPaths(line.path);
      for (const anc of ancestors) {
        pathsToUnfold.add(anc);
      }
    }
  }

  return { matchingLineIds, pathsToUnfold };
}
