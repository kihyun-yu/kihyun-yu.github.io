export interface DetailItem {
  text: string;
  date?: string;
  link?: {
    label: string;
    url: string;
  };
}

export interface TimelineItem {
  title: string;
  location: string;
  details: DetailItem[];
}

export interface ListItemWithDetails {
  title: string;
  details: string[];
}
