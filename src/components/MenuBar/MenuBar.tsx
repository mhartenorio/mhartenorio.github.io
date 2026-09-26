import React, { useState, useEffect } from 'react';
import type { TabId } from '../../types';
import './MenuBar.css';

interface MenuBarProps {
  activeTabId: TabId;
  onSelectTab: (id: TabId) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onOpenAbout: () => void;
  isWindowOpen: boolean;
  onReopenWindow: () => void;
}

export const MenuBar: React.FC<MenuBarProps> = ({
  activeTabId,
  onSelectTab,
  theme,
  onToggleTheme,
  onOpenAbout,
  isWindowOpen,
  onReopenWindow,
}) => {
  const [timeString, setTimeString] = useState('');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      };
      setTimeString(now.toLocaleDateString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Close menu dropdowns when clicking outside
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.menubar-item')) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, []);

  const toggleMenu = (menuName: string) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <header className="macos-menubar" role="banner">
      {/* Left Menu Items */}
      <div className="menubar-left">
        {/* Apple Menu */}
        <div className="menubar-item">
          <button
            type="button"
            className="menubar-btn apple-btn"
            onClick={() => toggleMenu('apple')}
            aria-label="Apple menu"
          >
            
          </button>
          {activeMenu === 'apple' && (
            <div className="menubar-dropdown">
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setActiveMenu(null);
                  onOpenAbout();
                }}
              >
                About Mhar Tenorio...
              </button>
              <div className="dropdown-divider" />
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setActiveMenu(null);
                  onToggleTheme();
                }}
              >
                Theme: {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
              </button>
              <div className="dropdown-divider" />
              {!isWindowOpen && (
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => {
                    setActiveMenu(null);
                    onReopenWindow();
                  }}
                >
                  Reopen JSON Window
                </button>
              )}
            </div>
          )}
        </div>

        {/* App Title */}
        <div className="menubar-item app-title">
          <span className="app-name">JSON Viewer</span>
        </div>

        {/* File Menu */}
        <div className="menubar-item">
          <button
            type="button"
            className="menubar-btn"
            onClick={() => toggleMenu('file')}
          >
            File
          </button>
          {activeMenu === 'file' && (
            <div className="menubar-dropdown">
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setActiveMenu(null);
                  onReopenWindow();
                }}
              >
                Open Window <span className="shortcut">⌘O</span>
              </button>
              <div className="dropdown-divider" />
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setActiveMenu(null);
                  onSelectTab('summary');
                }}
              >
                summary.json <span className="shortcut">⌘1</span>
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setActiveMenu(null);
                  onSelectTab('links');
                }}
              >
                links.json <span className="shortcut">⌘2</span>
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setActiveMenu(null);
                  onSelectTab('resume');
                }}
              >
                resume.json <span className="shortcut">⌘3</span>
              </button>
            </div>
          )}
        </div>

        {/* Tabs Menu */}
        <div className="menubar-item">
          <button
            type="button"
            className="menubar-btn"
            onClick={() => toggleMenu('tabs')}
          >
            Tabs
          </button>
          {activeMenu === 'tabs' && (
            <div className="menubar-dropdown">
              <button
                type="button"
                className={`dropdown-item ${activeTabId === 'summary' ? 'active-item' : ''}`}
                onClick={() => {
                  setActiveMenu(null);
                  onSelectTab('summary');
                }}
              >
                {activeTabId === 'summary' ? '✓ ' : '   '}summary.json
              </button>
              <button
                type="button"
                className={`dropdown-item ${activeTabId === 'links' ? 'active-item' : ''}`}
                onClick={() => {
                  setActiveMenu(null);
                  onSelectTab('links');
                }}
              >
                {activeTabId === 'links' ? '✓ ' : '   '}links.json
              </button>
              <button
                type="button"
                className={`dropdown-item ${activeTabId === 'resume' ? 'active-item' : ''}`}
                onClick={() => {
                  setActiveMenu(null);
                  onSelectTab('resume');
                }}
              >
                {activeTabId === 'resume' ? '✓ ' : '   '}resume.json
              </button>
            </div>
          )}
        </div>

        {/* View Menu */}
        <div className="menubar-item">
          <button
            type="button"
            className="menubar-btn"
            onClick={() => toggleMenu('view')}
          >
            View
          </button>
          {activeMenu === 'view' && (
            <div className="menubar-dropdown">
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setActiveMenu(null);
                  onToggleTheme();
                }}
              >
                Toggle {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
              <div className="dropdown-divider" />
              <button
                type="button"
                className="dropdown-item"
                onClick={() => {
                  setActiveMenu(null);
                  onOpenAbout();
                }}
              >
                About Author
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right Menu Items (Links, Battery, Clock) */}
      <div className="menubar-right">
        {/* External Links */}
        <a
          href="https://github.com/mhartenorio"
          target="_blank"
          rel="noopener noreferrer"
          className="menubar-link"
          title="GitHub Profile"
        >
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/mhartenorio/"
          target="_blank"
          rel="noopener noreferrer"
          className="menubar-link"
          title="LinkedIn Profile"
        >
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>

        {/* WiFi Icon */}
        <span className="menubar-icon" title="Wi-Fi Connected">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor">
            <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z" />
            <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.577 1.336c.205.145.491.112.652-.065zm-2.183 2.183c.226-.145.284-.45.132-.676A6.47 6.47 0 0 0 8 8.5c-1.258 0-2.423.364-3.41 1a.473.473 0 0 0-.132.676.53.53 0 0 0 .693.145A5.474 5.474 0 0 1 8 9.5c1.026 0 1.977.29 2.784.779a.53.53 0 0 0 .693-.145zM9 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </span>

        {/* Battery Icon */}
        <span className="menubar-icon" title="Battery 100%">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M2 6h10v4H2V6z" />
            <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z" />
          </svg>
        </span>

        {/* Live Date / Time */}
        <span className="menubar-time">{timeString || 'Sat Sep 26 10:20 AM'}</span>
      </div>
    </header>
  );
};
