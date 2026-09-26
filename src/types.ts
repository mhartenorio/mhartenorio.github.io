export type TabId = 'summary' | 'links' | 'resume';

export interface TabInfo {
  id: TabId;
  filename: string;
  title: string;
  data: unknown;
  rawString: string;
  sizeBytes: number;
}
