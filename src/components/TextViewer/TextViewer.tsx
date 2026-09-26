import React, { useMemo } from 'react';
import './TextViewer.css';

interface TextViewerProps {
  content: string;
  searchQuery?: string;
}

export const TextViewer: React.FC<TextViewerProps> = ({ content, searchQuery = '' }) => {
  const lines = useMemo(() => content.split('\n'), [content]);

  // Helper to highlight matching search query
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

  return (
    <div className="text-viewer-container" role="region" aria-label="Text File Viewer">
      <div className="text-lines-list">
        {lines.map((lineText, idx) => {
          const lineNum = idx + 1;
          const isMatched =
            Boolean(searchQuery.trim()) &&
            lineText.toLowerCase().includes(searchQuery.toLowerCase());

          return (
            <div
              key={lineNum}
              className={`text-line ${isMatched ? 'line-match' : ''}`}
            >
              {/* Left gutter with line number */}
              <div className="text-gutter">
                <span className="text-line-num">{lineNum}</span>
              </div>

              {/* Text line content */}
              <div className="text-code-content">
                {lineText ? renderHighlighted(lineText) : '\u00A0'}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
