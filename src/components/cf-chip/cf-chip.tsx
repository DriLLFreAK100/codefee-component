import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';
import { ButtonType } from '../../common/types';
import { flatten } from '../../utils';

@Component({
  tag: 'cf-chip',
  styleUrl: 'cf-chip.scss',
  shadow: true,
})
export class CfChip {
  @Prop() addable: boolean = false;
  @Prop() removable: boolean = false;
  @Prop() type: ButtonType = 'primary';
  @Event() clickAdd: EventEmitter;
  @Event() clickRemove: EventEmitter;

  handleOnClickAdd() {
    this.clickAdd.emit();
  }

  handleOnClickRemove() {
    this.clickRemove.emit();
  }

  render() {
    const className = flatten(`
      ${this.type}
    `);

    return (
      <Host class={className}>
        <div class="cfChip">
          {this.addable && <i class="addIcon fas fa-plus" onClick={this.handleOnClickAdd.bind(this)} />}
          <cf-typography type="subtitle2">
            <slot></slot>
          </cf-typography>
          {this.removable && <i class="removeIcon fas fa-times" onClick={this.handleOnClickRemove.bind(this)} />}
        </div>
      </Host>
    );
  }

}
