import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import { flatten } from '../../../utils';

@Component({
  tag: 'cf-table-body',
  styleUrl: 'cf-table-body.scss',
  shadow: true,
})
export class CfTableBody {
  @Element() el: HTMLElement;
  @Prop() bodyHeight: number = 100;
  @Prop() rowHeight: number = 36;
  @Prop() virtualize: boolean = false;

  @Listen('tblRowInit')
  handleRowInit(event: CustomEvent<HTMLCfTableRowElement>) {
    event.stopPropagation();
    event.detail.type = 'body';
  }

  render() {
    const className = flatten(`
      ${this.virtualize ? 'virtualize' : ''}
    `);

    return (
      <Host class={className}>
        {
          this.virtualize ?
            (
              <cf-virtual-scroller
                containerHeight={this.bodyHeight}
                childHeight={this.rowHeight}
              >
                <slot></slot>
              </cf-virtual-scroller>
            )
            : (
              <slot></slot>
            )
        }
      </Host>
    );
  }

}
