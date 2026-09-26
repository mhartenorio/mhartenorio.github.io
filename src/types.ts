export type TabId = 'summary' | 'links' | 'resume' | 'me';

export interface TabInfo {
  id: TabId;
  filename: string;
  title: string;
  type?: 'json' | 'image';
  data?: unknown;
  rawString?: string;
  sizeBytes: number;
  imageUrl?: string;
  dimensions?: { width: number; height: number };
}

