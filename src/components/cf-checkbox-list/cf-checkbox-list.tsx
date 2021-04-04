import remove from 'lodash-es/remove';
import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
} from '@stencil/core';
import { flatten } from '../../utils';

export type CheckboxDirection = 'vertical' | 'horizontal';

@Component({
  tag: 'cf-checkbox-list',
  styleUrl: 'cf-checkbox-list.scss',
  shadow: true,
})
export class CfCheckboxList {
  @Event() checkListChange: EventEmitter<any[]>;
  @Prop() direction: CheckboxDirection = 'vertical';
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
    const className = flatten(`
      ${this.direction}
    `);

    return (
      <Host class={`${className}`}>
        <slot></slot>
      </Host>
    );
  }

}
