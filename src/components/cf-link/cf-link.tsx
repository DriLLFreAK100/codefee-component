import { Component, Host, h, Prop } from '@stencil/core';
import { TypographyType } from '../cf-typography/cf-typography';

@Component({
  tag: 'cf-link',
  styleUrl: 'cf-link.scss',
  shadow: true,
})
export class CfLink {
  @Prop() typographyType: TypographyType = 'subtitle1';
  @Prop() href: string = '';
  @Prop() newTab: boolean = true;

  render() {
    return (
      <Host>
        <cf-typography type={this.typographyType}>
          <a class="cfLink" href={this.href} target={this.newTab ? '_blank' : ''}>
            <slot />
          </a>
        </cf-typography>
      </Host>
    );
  }

}
