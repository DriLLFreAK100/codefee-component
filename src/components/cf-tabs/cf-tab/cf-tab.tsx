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
  @Event() clickTab: EventEmitter<any>;
  @Prop() tabId: any;

  handleOnClick() {
    this.clickTab.emit(this.tabId);
  }

  render() {
    return (
      <Host onClick={this.handleOnClick.bind(this)}>
        <cf-typography type="subtitle1">
          <slot />
        </cf-typography>
      </Host>
    );
  }

}
