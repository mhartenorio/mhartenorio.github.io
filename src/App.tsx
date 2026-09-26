import { useState, useMemo } from 'react';
import summaryData from './json/summary.json';
import linksData from './json/links.json';
import resumeData from './json/resume.json';
import type { TabId, TabInfo } from './types';
import { MacWindow } from './components/MacWindow/MacWindow';
import { MenuBar } from './components/MenuBar/MenuBar';
import { Dock } from './components/Dock/Dock';
import { AboutModal } from './components/AboutModal/AboutModal';
import './App.css';

function App() {
  const [activeTabId, setActiveTabId] = useState<TabId>('summary');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Prepare tabs with formatted string and accurate byte sizes
  const tabs: TabInfo[] = useMemo(() => {
    const sRaw = JSON.stringify(summaryData, null, 2);
    const lRaw = JSON.stringify(linksData, null, 2);
    const rRaw = JSON.stringify(resumeData, null, 2);

    return [
      {
        id: 'summary',
        filename: 'summary.json',
        title: 'Summary',
        data: summaryData,
        rawString: sRaw,
        sizeBytes: new Blob([sRaw]).size,
      },
      {
        id: 'links',
        filename: 'links.json',
        title: 'Links',
        data: linksData,
        rawString: lRaw,
        sizeBytes: new Blob([lRaw]).size,
      },
      {
        id: 'resume',
        filename: 'resume.json',
        title: 'Resume',
        data: resumeData,
        rawString: rRaw,
        sizeBytes: new Blob([rRaw]).size,
      },
    ];
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleToggleWindow = () => {
    setIsWindowOpen((prev) => !prev);
  };

  return (
    <div className="macos-desktop" data-system-theme={theme}>
      {/* Top Menu Bar */}
      <MenuBar
        activeTabId={activeTabId}
        onSelectTab={(id) => {
          setActiveTabId(id);
          setIsWindowOpen(true);
        }}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenAbout={() => setIsAboutOpen(true)}
        isWindowOpen={isWindowOpen}
        onReopenWindow={() => setIsWindowOpen(true)}
      />

      {/* Main Desktop Area */}
      <main className="desktop-workspace">
        {isWindowOpen ? (
          <MacWindow
            tabs={tabs}
            activeTabId={activeTabId}
            onSelectTab={setActiveTabId}
            theme={theme}
            onToggleTheme={handleToggleTheme}
            isMinimized={!isWindowOpen}
            onMinimize={() => setIsWindowOpen(false)}
            onClose={() => setIsWindowOpen(false)}
          />
        ) : (
          <div className="window-placeholder">
            <button
              type="button"
              className="reopen-window-btn"
              onClick={() => setIsWindowOpen(true)}
            >
              <span className="reopen-icon">{'{ }'}</span>
              <span>Click to open JSON Viewer</span>
            </button>
          </div>
        )}
      </main>

      {/* macOS Dock */}
      <Dock
        isWindowOpen={isWindowOpen}
        onToggleWindow={handleToggleWindow}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* About Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        theme={theme}
      />
    </div>
  );
}

export default App;
