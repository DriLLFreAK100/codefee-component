import { flatten } from '../../../utils';
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
  @Prop() active: boolean = false;
  @Prop() tabId: any;

  handleOnClick() {
    this.clickTab.emit(this.tabId);
  }

  render() {
    const className = flatten(`cf-tab ${this.active ? 'active' : ''}`);

    return (
      <Host
        onClick={this.handleOnClick.bind(this)}
      >
        <div class={className}>
          <cf-typography type="subtitle1">
            <slot />
          </cf-typography>
        </div>
      </Host>
    );
  }

}
