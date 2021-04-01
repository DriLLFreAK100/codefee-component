import { Component, Host, h, Listen, State, Event, EventEmitter, Element } from '@stencil/core';

export interface ICheckboxListSelection {
  id: any;
  checked: boolean;
}

@Component({
  tag: 'cf-checkbox-list',
  styleUrl: 'cf-checkbox-list.scss',
  shadow: true,
})
export class CfCheckboxList {
  @Element() el: HTMLCfCheckboxListElement;
  @Event() checkListChange: EventEmitter<ICheckboxListSelection[]>;
  @State() selections: ICheckboxListSelection[] = [];

  componentDidRender() {
    let slotted = this.el.shadowRoot.querySelector('slot') as HTMLSlotElement;
    const checkboxes = slotted.assignedNodes().filter((node) => { return node.nodeName !== '#text'; });

    this.selections = checkboxes.map((checkbox: HTMLCfCheckboxElement) => {
      return {
        id: checkbox.id,
        checked: checkbox.checked,
      }
    })
  }

  @Listen('checkChange')
  handleCheckBoxesChange(event: CustomEvent<HTMLCfCheckboxElement>) {
    event.stopPropagation();
    const selection = this.selections.find(s => s.id === event.detail.id);
    selection.checked = event.detail.checked;

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
