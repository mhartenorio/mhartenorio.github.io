import { useState, useMemo } from 'react';
import summaryData from './json/summary.json';
import linksData from './json/links.json';
import resumeData from './json/resume.json';
import type { TabId, TabInfo } from './types';
import { MacWindow } from './components/MacWindow/MacWindow';
import './App.css';

function App() {
  const [activeTabId, setActiveTabId] = useState<TabId>('summary');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

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

  return (
    <div className="macos-desktop" data-system-theme={theme}>

      {/* Main Desktop Area */}
      <main className="desktop-workspace">
        <MacWindow
          tabs={tabs}
          activeTabId={activeTabId}
          onSelectTab={setActiveTabId}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />
      </main>
    </div>
  );
}

export default App;
