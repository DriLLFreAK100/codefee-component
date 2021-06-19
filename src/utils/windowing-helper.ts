interface IOnScrollWindow {
  containerHeight: number;
  rowCount: number;
  rowHeight: number;
  scrollTop: number;
  tolerance?: number;
  onScroll: (startIndex: number, endIndex: number) => void;
}

export const onScrollWindow = ({
  containerHeight,
  rowCount,
  rowHeight,
  scrollTop,
  tolerance = 5,
  onScroll,
}: IOnScrollWindow) => {
  const upperToleranceHeight = tolerance * rowHeight;
  let startIndex = 0;
  let endIndex = 0;

  // Upper window
  const outOfBound = scrollTop - upperToleranceHeight;
  if (outOfBound > 0) {
    startIndex = Math.round(outOfBound / rowHeight);
  }
  const upperWindowItemCount = outOfBound >= 0 ? startIndex + tolerance : startIndex;

  // Lower window
  const inScopeCount = Math.round(containerHeight / rowHeight);
  const maxEndIndex = upperWindowItemCount + inScopeCount + tolerance;
  endIndex = maxEndIndex > rowCount ? rowCount - 1 : maxEndIndex - 1;

  onScroll(startIndex, endIndex);
};
