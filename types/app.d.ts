export interface AppsData {
  id: string;
  title: string;
  desktop: boolean;
  img: string;
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  content?: JSX.Element;
  link?: string;
}
