import remove from 'lodash-es/remove';
import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  State,
} from '@stencil/core';

@Component({
  tag: 'cf-checkbox-list',
  styleUrl: 'cf-checkbox-list.scss',
  shadow: true,
})
export class CfCheckboxList {
  @Event() checkListChange: EventEmitter<any[]>;
  @State() selections: any[] = [];

  @Listen('checkboxInit')
  handleCheckboxInit(event: CustomEvent<HTMLCfCheckboxElement>) {
    event.stopPropagation();

    if (event.detail.checked) {
      this.selections.push(event.detail.id);
    }
  }

  @Listen('checkChange')
  handleCheckboxesChange(event: CustomEvent<HTMLCfCheckboxElement>) {
    event.stopPropagation();

    if (event.detail.checked) {
      this.selections.push(event.detail.id);
    } else {
      remove(this.selections, s => s === event.detail.id);
    }

    this.checkListChange.emit(this.selections);
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
