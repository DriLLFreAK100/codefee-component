import { Component, Host, h, Prop } from '@stencil/core';
import { TypographyType } from '../cf-typography/cf-typography';

@Component({
  tag: 'cf-link',
  styleUrl: 'cf-link.scss',
  shadow: true,
})
export class CfLink {
  @Prop() href: string = '';
  @Prop() newTab: boolean = true;
  @Prop() underline: boolean = true;
  @Prop() styles: { [key: string]: string };
  @Prop() typographyType: TypographyType = 'subtitle1';

  render() {
    return (
      <Host>
        <cf-typography type={this.typographyType}>
          <a
            class={`cfLink ${this.underline ? 'underline' : ''}`}
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
