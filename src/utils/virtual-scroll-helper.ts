export interface IVirtualItem {
  style: { [key: string]: string };
}

export interface IVirtualScrollSettings {
  containerHeight?: number;
  rowHeight?: number;
  tolerance?: number;
}

export class VirtualScroll<T extends IVirtualItem> {
  public data: T[] = [];
  public containerHeight: number;
  public rowHeight: number;
  public tolerance: number;
  public endIndex: number = 0;
  public scrollPosition: number = 0;
  public virtualizedData: T[] = [];

  constructor(options: T[], settings: IVirtualScrollSettings = {}) {
    this.data = options;
    this.assignSettings(settings);
    this.onLoad();

    this.onVirtualScroll = this.onVirtualScroll.bind(this);
  }

  /**
   * Handle OnScroll targeted virtualized container
   * @param scrollPosition Latest scroll position from the container
   */
  public onVirtualScroll(scrollPosition: number) {
    const upperToleranceHeight = this.tolerance * this.rowHeight;
    let startIndex = 0;
    let endIndex = 0;

    // Upper window
    const outOfBound = scrollPosition - upperToleranceHeight;
    if (outOfBound > 0) {
      startIndex = Math.round(outOfBound / this.rowHeight);
    }
    const upperWindowItemCount = outOfBound >= 0 ? startIndex + this.tolerance : startIndex;

    // Lower window
    const inScopeCount = Math.round(this.containerHeight / this.rowHeight);
    const maxEndIndex = upperWindowItemCount + inScopeCount + this.tolerance;
    endIndex = maxEndIndex > this.data.length ? this.data.length - 1 : maxEndIndex - 1;

    // Set States
    this.endIndex = endIndex;
    this.scrollPosition = scrollPosition;
    this.virtualizedData = [...this.data].splice(startIndex, endIndex + 1);
  }

  /**
   * Load settings to instance
   * @param param0 Virtual Scroll Settings
   */
  private assignSettings({ containerHeight = 300, rowHeight = 20, tolerance = 5 }: IVirtualScrollSettings): void {
    this.containerHeight = containerHeight;
    this.rowHeight = rowHeight;
    this.tolerance = tolerance;
  }

  /**
   * Set initial virtualization states
   */
  private onLoad(): void {
    this.data = this.data.map((d, i) => {
      d.style = {
        transform: `translate(0, ${i * this.rowHeight}px)`,
      };
      return d;
    });

    const windowHeight = this.rowHeight * this.tolerance;
    const renderBufferCount = (this.containerHeight + windowHeight * 2) / this.rowHeight;
    const renderCount = renderBufferCount > this.data.length ? this.data.length : renderBufferCount;

    this.endIndex = Math.floor(renderCount - 1) - 1;
    this.virtualizedData = [...this.data].splice(0, this.endIndex + 1);
  }
}
