import React, { useMemo } from 'react';
import {
  type JsonLine,
  buildJsonLines,
  getVisibleLines,
  searchJson,
  isUrl,
} from '../../utils/jsonParser';
import './JsonViewer.css';

interface JsonViewerProps {
  data: unknown;
  foldedPaths: Set<string>;
  onToggleFold: (path: string) => void;
  searchQuery: string;
}

export const JsonViewer: React.FC<JsonViewerProps> = ({
  data,
  foldedPaths,
  onToggleFold,
  searchQuery,
}) => {
  // 1. Build all flat lines
  const { lines } = useMemo(() => buildJsonLines(data), [data]);

  // 2. Perform search if active
  const { matchingLineIds } = useMemo(() => {
    return searchJson(lines, searchQuery);
  }, [lines, searchQuery]);

  // 3. Compute visible lines based on folded state
  const visibleLines = useMemo(() => {
    return getVisibleLines(lines, foldedPaths);
  }, [lines, foldedPaths]);

  // Helper to highlight matching text
  const renderHighlighted = (text: string) => {
    if (!searchQuery.trim()) return text;
    const lowerText = text.toLowerCase();
    const lowerQuery = searchQuery.toLowerCase();
    const idx = lowerText.indexOf(lowerQuery);
    if (idx === -1) return text;

    const parts: React.ReactNode[] = [];
    let start = 0;
    let keyIdx = 0;
    while (start < text.length) {
      const matchIdx = lowerText.indexOf(lowerQuery, start);
      if (matchIdx === -1) {
        parts.push(text.substring(start));
        break;
      }
      if (matchIdx > start) {
        parts.push(text.substring(start, matchIdx));
      }
      parts.push(
        <mark key={keyIdx++} className="search-highlight">
          {text.substring(matchIdx, matchIdx + searchQuery.length)}
        </mark>
      );
      start = matchIdx + searchQuery.length;
    }
    return parts;
  };

  const renderValue = (line: JsonLine) => {
    if (line.isFolded) {
      return (
        <span
          className="json-fold-pill"
          onClick={() => onToggleFold(line.path)}
          title="Click to expand"
        >
          {line.previewText}
          {line.hasComma && <span className="json-punct">,</span>}
        </span>
      );
    }

    if (line.type === 'object-open') {
      return <span className="json-punct">{'{'}</span>;
    }
    if (line.type === 'object-close') {
      return (
        <span className="json-punct">
          {'}'}
          {line.hasComma && ','}
        </span>
      );
    }
    if (line.type === 'array-open') {
      return <span className="json-punct">{'['}</span>;
    }
    if (line.type === 'array-close') {
      return (
        <span className="json-punct">
          {']'}
          {line.hasComma && ','}
        </span>
      );
    }
    if (line.type === 'empty-object') {
      return (
        <span className="json-punct">
          {'{ }'}
          {line.hasComma && ','}
        </span>
      );
    }
    if (line.type === 'empty-array') {
      return (
        <span className="json-punct">
          {'[ ]'}
          {line.hasComma && ','}
        </span>
      );
    }

    // Primitive value
    if (line.valueType === 'string') {
      const strVal = line.value as string;
      const isLink = isUrl(strVal);

      return (
        <span className="json-string">
          <span className="json-quote">"</span>
          {isLink ? (
            <a
              href={strVal}
              target="_blank"
              rel="noopener noreferrer"
              className="json-link"
              title={`Open ${strVal} in new tab`}
            >
              {renderHighlighted(strVal)}
              <svg className="external-icon" viewBox="0 0 12 12" width="10" height="10" fill="currentColor">
                <path d="M3.5 2a.5.5 0 0 0 0 1h4.793L1.146 10.146a.5.5 0 0 0 .708.708L9 3.707V8.5a.5.5 0 0 0 1 0v-6.5a.5.5 0 0 0-.5-.5h-6z" />
              </svg>
            </a>
          ) : (
            renderHighlighted(strVal)
          )}
          <span className="json-quote">"</span>
          {line.hasComma && <span className="json-punct">,</span>}
        </span>
      );
    }

    if (line.valueType === 'number') {
      return (
        <span className="json-number">
          {renderHighlighted(String(line.value))}
          {line.hasComma && <span className="json-punct">,</span>}
        </span>
      );
    }

    if (line.valueType === 'boolean') {
      return (
        <span className="json-boolean">
          {renderHighlighted(String(line.value))}
          {line.hasComma && <span className="json-punct">,</span>}
        </span>
      );
    }

    if (line.valueType === 'null') {
      return (
        <span className="json-null">
          {renderHighlighted('null')}
          {line.hasComma && <span className="json-punct">,</span>}
        </span>
      );
    }

    return null;
  };

  return (
    <div className="json-viewer-container" role="region" aria-label="JSON Viewer">
      <div className="json-lines-list">
        {visibleLines.map((line) => {
          const isMatched = matchingLineIds.has(line.id);

          return (
            <div
              key={line.id}
              className={`json-line ${isMatched ? 'line-match' : ''}`}
            >
              {/* Left Gutter: line number & fold chevron */}
              <div className="json-gutter">
                <span className="json-line-num">{line.originalLineNumber}</span>
                <span className="json-fold-btn-wrapper">
                  {line.isFoldable ? (
                    <button
                      type="button"
                      className={`json-fold-btn ${line.isFolded ? 'folded' : 'expanded'}`}
                      onClick={() => onToggleFold(line.path)}
                      title={line.isFolded ? 'Expand section' : 'Collapse section'}
                      aria-label={line.isFolded ? 'Expand section' : 'Collapse section'}
                    >
                      <svg viewBox="0 0 10 10" width="8" height="8" fill="currentColor">
                        <polygon points="2,1 8,5 2,9" />
                      </svg>
                    </button>
                  ) : (
                    <span className="json-fold-spacer" />
                  )}
                </span>
              </div>

              {/* Code content */}
              <div
                className="json-code-content"
                style={{ paddingLeft: `${line.indent * 18}px` }}
              >
                {line.key !== undefined && (
                  <span className="json-key-wrapper">
                    <span className="json-quote">"</span>
                    <span className="json-key">{renderHighlighted(line.key)}</span>
                    <span className="json-quote">"</span>
                    <span className="json-colon">: </span>
                  </span>
                )}
                {renderValue(line)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
