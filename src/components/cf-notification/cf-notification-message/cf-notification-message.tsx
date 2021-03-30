import { clearNotification, flatten } from '../../../utils';
import { FeedbackType } from '../../../common/types';
import {
  Component,
  Element,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'cf-notification-message',
  styleUrl: 'cf-notification-message.scss',
  shadow: false,
})
export class CfNotificationMessage {
  @Element() el: HTMLElement;
  @Prop() messageTitle: string = 'Notification';
  @Prop() type?: FeedbackType = undefined;

  handleOnClickCloseMessage() {
    clearNotification(this.el.parentElement, this.el);
  }

  render() {
    const className = flatten(`
      cfNotificationMessage
      ${this.type ? this.type : ''}
    `);

    return (
      <Host class={className}>
        <div class="cfNotificationMessage__header">
          <cf-typography type="subtitle1">{this.messageTitle}</cf-typography>
          <i class="fas fa-times" onClick={this.handleOnClickCloseMessage.bind(this)} />
        </div>
        <cf-divider></cf-divider>
        <cf-typography>
          <slot></slot>
        </cf-typography>
      </Host>
    );
  }

}
