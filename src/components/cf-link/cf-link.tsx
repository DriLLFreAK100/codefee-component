import { flatten } from '../../utils';
import { TypographyType } from '../cf-typography/cf-typography';
import {
  Component,
  h,
  Host,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'cf-link',
  styleUrl: 'cf-link.scss',
  shadow: true,
})
export class CfLink {
  @Prop() href: string = '';
  @Prop() newTab: boolean = false;
  @Prop() underline: boolean = true;
  @Prop() styles: { [key: string]: string };
  @Prop() typographyType: TypographyType = 'subtitle1';

  render() {
    const className = flatten(`
      cfLink 
      ${this.underline ? 'underline' : ''}
    `);

    return (
      <Host>
        <cf-typography type={this.typographyType}>
          <a
            class={className}
            href={this.href}
            style={this.styles}
            target={this.newTab ? '_blank' : ''}
          >
            <slot />
          </a>
        </cf-typography>
      </Host>
    );
  }

}
