export interface LayoutProps {
  isCollapsed: boolean;
  isFullWidth: boolean;
}

export interface LayoutStore extends LayoutProps {
  setIsCollapsed: (isCollapsed: boolean) => void;
  setIsFullWidth: (isFullWidth: boolean) => void;
}
