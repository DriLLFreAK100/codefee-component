import {
  Component,
  Element,
  h,
  Host,
  State,
} from '@stencil/core';

@Component({
  tag: 'cf-footer',
  styleUrl: 'cf-footer.scss',
  shadow: true,
})
export class CfFooter {
  @Element() el: HTMLElement;
  @State() hasStartSlot: boolean = false;
  @State() hasCenterSlot: boolean = false;
  @State() hasEndSlot: boolean = false;

  componentWillLoad() {
    this.hasStartSlot = !!this.el.querySelector('[slot=start]');
    this.hasCenterSlot = !!this.el.querySelector('[slot=center]');
    this.hasEndSlot = !!this.el.querySelector('[slot=end]');
  }

  render() {
    return (
      <Host>
        {
          this.hasStartSlot && (
            <div class="cfFooter__start">
              <slot name="start"></slot>
            </div>
          )
        }
        {
          this.hasCenterSlot && (
            <div class="cfFooter__center">
              <slot name="center"></slot>
            </div>
          )
        }
        {
          this.hasEndSlot && (
            <div class="cfFooter__end">
              <slot name="end"></slot>
            </div>
          )
        }

      </Host>
    );
  }

}
