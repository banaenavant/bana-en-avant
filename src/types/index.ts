export type Page = 'home' | 'mission' | 'action-detail' | 'news-detail' | 'about' | 'values' | 'vision';

export interface NavState {
  currentPage: Page;
  detailId?: string;
}
