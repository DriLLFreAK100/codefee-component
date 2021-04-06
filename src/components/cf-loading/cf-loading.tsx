import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { flatten } from '../../utils';

@Component({
  tag: 'cf-loading',
  styleUrl: 'cf-loading.scss',
  shadow: true,
})
export class CfLoading {
  @Prop() message: string;
  @Prop() show: boolean = false;

  render() {
    const className = flatten(`
      cfLoading
      ${this.show ? 'show' : ''}
    `);

    return (
      <Host>
        <div class={className}>
          <slot>
            <div class="cfLoading__defaultContainer">
              <cf-circular-progress></cf-circular-progress>
              <cf-typography type="h5">
                {
                  this.message === undefined
                    ? 'Loading...'
                    : this.message
                }
              </cf-typography>
            </div>
          </slot>
        </div>
      </Host>
    );
  }

}
