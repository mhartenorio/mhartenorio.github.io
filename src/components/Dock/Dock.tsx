import React from 'react';
import './Dock.css';

interface DockProps {
  isWindowOpen: boolean;
  onToggleWindow: () => void;
  onOpenAbout: () => void;
}

export const Dock: React.FC<DockProps> = ({
  isWindowOpen,
  onToggleWindow,
  onOpenAbout,
}) => {
  return (
    <nav className="macos-dock" aria-label="macOS Dock">
      <div className="dock-container">
        {/* JSON Viewer App */}
        <button
          type="button"
          className="dock-item"
          onClick={onToggleWindow}
          title={isWindowOpen ? 'JSON Viewer (Active)' : 'Reopen JSON Viewer'}
          aria-label="JSON Viewer"
        >
          <div className="dock-icon json-icon">
            <span className="dock-json-brackets">{'{ }'}</span>
          </div>
          <span className="dock-label">JSON Viewer</span>
          {isWindowOpen && <span className="dock-dot" />}
        </button>

        <div className="dock-divider" />

        {/* GitHub */}
        <a
          href="https://github.com/mhartenorio"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          title="GitHub"
          aria-label="GitHub"
        >
          <div className="dock-icon github-icon">
            <svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </div>
          <span className="dock-label">GitHub</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mhartenorio/"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <div className="dock-icon linkedin-icon">
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </div>
          <span className="dock-label">LinkedIn</span>
        </a>

        {/* Art & Design Portfolio */}
        <a
          href="https://mhar.squarespace.com"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-item"
          title="Art & Design"
          aria-label="Art & Design"
        >
          <div className="dock-icon art-icon">
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.5-1.5 2.1-3 .4-.999 1.1-2.43 2.333-2.93zM3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3-2a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5 3.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
          <span className="dock-label">Art &amp; Design</span>
        </a>

        {/* About App */}
        <button
          type="button"
          className="dock-item"
          onClick={onOpenAbout}
          title="About Mhar"
          aria-label="About Mhar"
        >
          <div className="dock-icon info-icon">
            <span>ℹ︎</span>
          </div>
          <span className="dock-label">About</span>
        </button>
      </div>
    </nav>
  );
};
