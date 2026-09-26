import { useState, useMemo } from 'react';
import summaryData from './json/summary.json';
import linksData from './json/links.json';
import resumeData from './json/resume.json';
import meImage from './assets/me.jpeg';
import aboutMeText from './assets/about_me.txt?raw';
import type { TabId, TabInfo } from './types';
import { MacWindow } from './components/MacWindow/MacWindow';
import { DesktopCanvas, StickyNote } from './components/DesktopCanvas/DesktopCanvas';
import './App.css';

function App() {
  const [activeTabId, setActiveTabId] = useState<TabId>('summary');
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  // Prepare tabs with formatted string and accurate byte sizes
  const tabs: TabInfo[] = useMemo(() => {
    const sRaw = JSON.stringify(summaryData, null, 2);
    const lRaw = JSON.stringify(linksData, null, 2);
    const rRaw = JSON.stringify(resumeData, null, 2);

    return [
      {
        id: 'summary',
        filename: 'mhar_tenorio.json',
        title: 'Summary',
        type: 'json',
        data: summaryData,
        rawString: sRaw,
        sizeBytes: new Blob([sRaw]).size,
      },
      {
        id: 'links',
        filename: 'links.json',
        title: 'Links',
        type: 'json',
        data: linksData,
        rawString: lRaw,
        sizeBytes: new Blob([lRaw]).size,
      },
      {
        id: 'resume',
        filename: 'resume.json',
        title: 'Resume',
        type: 'json',
        data: resumeData,
        rawString: rRaw,
        sizeBytes: new Blob([rRaw]).size,
      },
      {
        id: 'about',
        filename: 'about_me.txt',
        title: 'About Me',
        type: 'text',
        textContent: aboutMeText,
        sizeBytes: new Blob([aboutMeText]).size,
      },
      {
        id: 'me',
        filename: 'me.jpeg',
        title: 'me.jpeg',
        type: 'image',
        imageUrl: meImage,
        sizeBytes: 5815206,
        dimensions: { width: 2000, height: 3000 },
      },
    ];
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="macos-desktop" data-system-theme={theme}>
      {/* Background Canvas: Blueprint Grid */}
      <DesktopCanvas theme={theme} />

      {/* Main Desktop Area */}
      <main className="desktop-workspace">
        <div className="macos-window-wrapper">
          <MacWindow
            tabs={tabs}
            activeTabId={activeTabId}
            onSelectTab={setActiveTabId}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          />
          {/* Post-it Note clipped to the side of the window */}
          <StickyNote />
        </div>
      </main>
    </div>
  );
}

export default App;
