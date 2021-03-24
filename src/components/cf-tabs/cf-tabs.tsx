import {
  Component,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
} from '@stencil/core';

@Component({
  tag: 'cf-tabs',
  styleUrl: 'cf-tabs.scss',
  shadow: true,
})
export class CfTabs {
  @Event() tabSelect: EventEmitter<any>;

  @Listen('clickTab')
  handleClickTab(event: CustomEvent<any>) {
    event.stopPropagation();
    this.tabSelect.emit(event.detail);
  }

  render() {
    return (
      <Host>
        <div class="tabs__container">
          <slot />
        </div>
        <div class="tabs__content">
          <slot name="content" />
        </div>
      </Host>
    );
  }

}
