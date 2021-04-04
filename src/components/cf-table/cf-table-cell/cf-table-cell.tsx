import { flatten } from '../../../utils';
import { TableSegment } from '../../../common/types';
import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

export type CellContentPosition = 'left' | 'right' | 'center';

@Component({
  tag: 'cf-table-cell',
  styleUrl: 'cf-table-cell.scss',
  shadow: true,
})
export class CfTableCell {
  @Element() el: HTMLCfTableCellElement;
  @Event() tblCellInit: EventEmitter<HTMLCfTableCellElement>;
  @Prop() size: number = 1;
  @Prop() position: CellContentPosition = 'left';
  @Prop() type: TableSegment = 'body';

  connectedCallback() {
    this.tblCellInit.emit(this.el);
  }

  renderSlot(type: TableSegment) {
    switch (type) {
      case 'head':
      default:
        return <cf-typography type="h6" ellipsis title="test"><slot /></cf-typography>;
      case 'body':
        return <cf-typography type="body1" ellipsis><slot /></cf-typography>;
      case 'foot':
        return <cf-typography type="h6" ellipsis><slot /></cf-typography>;
    }
  }

  render() {
    const className = flatten(`
      ${this.position}
    `);

    return (
      <Host class={className} size={this.size}>
        {this.renderSlot(this.type)}
      </Host>
    );
  }

}
