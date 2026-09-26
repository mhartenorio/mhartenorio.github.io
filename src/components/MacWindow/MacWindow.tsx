import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import type { TabId, TabInfo } from '../../types';
import { JsonViewer } from '../JsonViewer/JsonViewer';
import { ImageViewer } from '../ImageViewer/ImageViewer';
import { TextViewer } from '../TextViewer/TextViewer';
import { buildJsonLines, searchJson } from '../../utils/jsonParser';
import './MacWindow.css';

interface MacWindowProps {
  tabs: TabInfo[];
  activeTabId: TabId;
  onSelectTab: (id: TabId) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  isMinimized?: boolean;
  onMinimize?: () => void;
  onClose?: () => void;
}

export const MacWindow: React.FC<MacWindowProps> = ({
  tabs,
  activeTabId,
  onSelectTab,
  theme,
  onToggleTheme,
  isMinimized,
  onMinimize,
  onClose,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [foldedMap, setFoldedMap] = useState<Record<TabId, Set<string>>>({
    summary: new Set<string>(),
    about: new Set<string>(),
    links: new Set<string>(),
    resume: new Set<string>(),
    me: new Set<string>(),
  });


  const tabbarRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState({
    thumbWidth: 35,
    thumbLeft: 0,
    canScroll: false,
  });

  const updateScrollProgress = useCallback(() => {
    const el = tabbarRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    if (scrollWidth <= clientWidth + 2) {
      setScrollProgress({ thumbWidth: 100, thumbLeft: 0, canScroll: false });
      return;
    }
    const ratio = clientWidth / scrollWidth;
    const thumbWidth = Math.max(ratio * 100, 20); // minimum thumb width of 20%
    const maxScroll = scrollWidth - clientWidth;
    const scrollPercent = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    const maxThumbLeft = 100 - thumbWidth;
    const thumbLeft = scrollPercent * maxThumbLeft;

    setScrollProgress({ thumbWidth, thumbLeft, canScroll: true });
  }, []);

  const handleScrollbarTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const track = e.currentTarget;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const el = tabbarRef.current;
    if (el) {
      const maxScroll = el.scrollWidth - el.clientWidth;
      el.scrollTo({ left: ratio * maxScroll, behavior: 'smooth' });
    }
  };


  useEffect(() => {
    const el = tabbarRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      updateScrollProgress();
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, [updateScrollProgress]);

  useEffect(() => {
    const activeEl = tabbarRef.current?.querySelector('.macos-tab.active') as HTMLElement | null;
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }, [activeTabId]);


  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const currentFolded = foldedMap[activeTabId] || new Set<string>();

  // Derived match count via useMemo (no cascading effect setState)
  const matchCount = useMemo(() => {
    if (!searchQuery.trim() || activeTab.type === 'image') return null;
    if (activeTab.type === 'text' && activeTab.textContent) {
      const q = searchQuery.toLowerCase();
      const textLines = activeTab.textContent.split('\n');
      return textLines.filter((l) => l.toLowerCase().includes(q)).length;
    }
    if (activeTab.data) {
      const { lines } = buildJsonLines(activeTab.data);
      return searchJson(lines, searchQuery).matchingLineIds.size;
    }
    return null;
  }, [activeTab, searchQuery]);

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + F for search
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'f' && activeTab.type !== 'image') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      // Esc to close search
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
      // Cmd/Ctrl + 1, 2, 3, 4, 5 for tabs
      if ((e.metaKey || e.ctrlKey) && ['1', '2', '3', '4', '5'].includes(e.key)) {
        e.preventDefault();
        const index = parseInt(e.key, 10) - 1;
        if (tabs[index]) {
          onSelectTab(tabs[index].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, tabs, onSelectTab, activeTab.type]);


  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() && activeTab.type !== 'image' && activeTab.data) {
      const { lines } = buildJsonLines(activeTab.data);
      const { pathsToUnfold } = searchJson(lines, query);
      if (pathsToUnfold.size > 0) {
        setFoldedMap((prev) => {
          const currentSet = new Set(prev[activeTabId] || []);
          let changed = false;
          pathsToUnfold.forEach((p) => {
            if (currentSet.has(p)) {
              currentSet.delete(p);
              changed = true;
            }
          });
          return changed ? { ...prev, [activeTabId]: currentSet } : prev;
        });
      }
    }
  };

  const handleToggleFold = (path: string) => {
    setFoldedMap((prev) => {
      const currentSet = new Set(prev[activeTabId] || []);
      if (currentSet.has(path)) {
        currentSet.delete(path);
      } else {
        currentSet.add(path);
      }
      return { ...prev, [activeTabId]: currentSet };
    });
  };

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  if (isMinimized) {
    return null;
  }

  return (
    <div
      className={`macos-window ${isMaximized ? 'maximized' : ''}`}
      data-theme={theme}
      role="dialog"
      aria-label={`${activeTab.type === 'image' ? 'Image Viewer' : activeTab.type === 'text' ? 'Text Viewer' : 'JSON Viewer'} - ${activeTab.filename}`}
    >
      {/* Title Bar with Traffic Lights & Tabs */}
      <div className="macos-titlebar">
        {/* Traffic lights */}
        <div className="traffic-lights">
          <button
            type="button"
            className="traffic-light close"
            onClick={onClose}
            title="Close window"
            aria-label="Close"
          >
            <span className="traffic-icon">✕</span>
          </button>
          <button
            type="button"
            className="traffic-light minimize"
            onClick={onMinimize}
            title="Minimize window"
            aria-label="Minimize"
          >
            <span className="traffic-icon">−</span>
          </button>
          <button
            type="button"
            className="traffic-light maximize"
            onClick={() => setIsMaximized((prev) => !prev)}
            title={isMaximized ? 'Restore size' : 'Maximize window'}
            aria-label="Maximize"
          >
            <span className="traffic-icon">{isMaximized ? '↘' : '+'}</span>
          </button>
        </div>

        {/* Tab Bar with Mobile Scrollbar Indicator */}
        <div className="macos-tabbar-wrapper">
          <div
            className="macos-tabbar"
            role="tablist"
            ref={tabbarRef}
            onScroll={updateScrollProgress}
          >
            {tabs.map((tab) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`macos-tab ${isActive ? 'active' : ''}`}
                  onClick={() => onSelectTab(tab.id)}
                >
                  <span className={`tab-icon ${tab.type === 'image' ? 'tab-icon-image' : tab.type === 'text' ? 'tab-icon-text' : 'tab-icon-json'}`}>
                    {tab.type === 'image' ? (
                      <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
                        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                      </svg>
                    ) : tab.type === 'text' ? (
                      <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                        <path d="M4.5 6.5h7v1h-7zM4.5 9h7v1h-7zM4.5 11.5h5v1h-5z" opacity="0.85" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                        <text x="4.5" y="11.5" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="currentColor">{'{ }'}</text>
                      </svg>
                    )}
                  </span>
                  <span className="tab-title">{tab.filename}</span>
                </button>
              );
            })}
          </div>
          {scrollProgress.canScroll && (
            <div
              className="mobile-tab-scrollbar"
              aria-hidden="true"
              onClick={handleScrollbarTrackClick}
            >
              <div
                className="mobile-tab-scrollbar-thumb"
                style={{
                  width: `${scrollProgress.thumbWidth}%`,
                  left: `${scrollProgress.thumbLeft}%`,
                }}
              />
            </div>
          )}
        </div>

        {/* Window Actions */}
        <div className="macos-actions">
          {/* Search Toggle / Box (JSON and Text tabs only) */}
          {activeTab.type !== 'image' && (
            isSearchOpen ? (
              <div className="search-input-wrapper">
                <svg className="search-icon" viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="search-input"
                />
                {matchCount !== null && searchQuery.trim() && (
                  <span className="match-badge">
                    {matchCount} {matchCount === 1 ? 'match' : 'matches'}
                  </span>
                )}
                <button
                  type="button"
                  className="search-close-btn"
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                  }}
                  title="Clear search"
                >
                  ✕
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="action-btn"
                onClick={() => setIsSearchOpen(true)}
                title="Search (Cmd+F)"
                aria-label="Search"
              >
                <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            )
          )}

          {/* Theme Switcher */}
          <button
            type="button"
            className="action-btn theme-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light theme' : 'Switch to Dark theme'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Window Body: Image, Text, or JSON Viewer */}
      {activeTab.type === 'image' && activeTab.imageUrl ? (
        <ImageViewer
          src={activeTab.imageUrl}
          alt="Mhar Tenorio"
          filename={activeTab.filename}
          dimensions={activeTab.dimensions}
        />
      ) : activeTab.type === 'text' && activeTab.textContent !== undefined ? (
        <TextViewer
          content={activeTab.textContent}
          searchQuery={searchQuery}
        />
      ) : (
        <JsonViewer
          data={activeTab.data}
          foldedPaths={currentFolded}
          onToggleFold={handleToggleFold}
          searchQuery={searchQuery}
        />
      )}

      {/* macOS Status Bar */}
      <div className="macos-statusbar">
        <div className="status-item status-path">
          <span className="status-badge">
            {activeTab.type === 'json' ? 'src/json/' : 'src/assets/'}
            {activeTab.filename}
          </span>
        </div>
        <div className="status-item status-meta">
          <span>{formatBytes(activeTab.sizeBytes)}</span>
          <span className="status-dot">·</span>
          {activeTab.type === 'image' ? (
            <>
              {activeTab.dimensions && (
                <>
                  <span>{activeTab.dimensions.width} × {activeTab.dimensions.height}</span>
                  <span className="status-dot">·</span>
                </>
              )}
              <span>JPEG</span>
            </>
          ) : activeTab.type === 'text' ? (
            <>
              <span>{activeTab.textContent?.split('\n').length || 1} lines</span>
              <span className="status-dot">·</span>
              <span>UTF-8</span>
              <span className="status-dot">·</span>
              <span>Plain Text</span>
            </>
          ) : (
            <>
              <span>UTF-8</span>
              <span className="status-dot">·</span>
              <span>JSON</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

