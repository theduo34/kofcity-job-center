
export type bookmarkedStateProps = {
    bookmarkedJob: { [key: string]: boolean};
    toggleBookmark: (key: string) => void;
}