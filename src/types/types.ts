export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  selected?: boolean;
}

export type ActivityCategory = {
  id: string;
  name: string;
}