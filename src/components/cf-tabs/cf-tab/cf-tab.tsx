import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'cf-tab',
  styleUrl: 'cf-tab.scss',
  shadow: true,
})
export class CfTab {
  @Event({ composed: true }) clickTab: EventEmitter<any>;
  @Prop() active: boolean = false;
  @Prop() tabId: any;

  handleOnClick() {
    this.clickTab.emit(this.tabId);
  }

  render() {
    return (
      <Host
        class={this.active ? 'active' : ''}
        onClick={this.handleOnClick.bind(this)}
      >
        <cf-typography type="subtitle1">
          <slot />
        </cf-typography>
      </Host>
    );
  }

}
