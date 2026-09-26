export type TabId = 'summary' | 'about' | 'links' | 'resume' | 'me';

export interface TabInfo {
  id: TabId;
  filename: string;
  title: string;
  type?: 'json' | 'image' | 'text';
  data?: unknown;
  rawString?: string;
  sizeBytes: number;
  imageUrl?: string;
  dimensions?: { width: number; height: number };
  textContent?: string;
}


