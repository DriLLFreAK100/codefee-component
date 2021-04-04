import { Component, Host, h, Prop } from '@stencil/core';
import { GutterSize } from '../../common/types';
import { flatten } from '../../utils';

export type TypographyType =
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6' |
  'subtitle1' |
  'subtitle2' |
  'body1' |
  'body2' |
  'p' |
  'caption' |
  'button';

const getElement = (type: TypographyType) => {
  switch (type) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
    case 'subtitle1':
    case 'subtitle2':
      return 'h6';
    case 'body1':
    case 'body2':
    case 'p':
    default:
      return 'p';
    case 'caption':
      return 'figcaption';
    case 'button':
      return 'span';
  }
};

@Component({
  tag: 'cf-typography',
  styleUrl: 'cf-typography.scss',
  shadow: true,
})
export class CfTypography {
  @Prop() ellipsis: boolean = false;
  @Prop() gutterBottom: GutterSize = 'g0';
  @Prop() type: TypographyType = 'p';

  render() {
    const elClassName = flatten(`
      ${this.type} 
      ${this.ellipsis ? 'ellipsis' : ''}
    `);

    const Element = getElement(this.type as TypographyType);

    return (
      <Host class={`${this.gutterBottom}`}>
        <Element class={elClassName}>
          <slot></slot>
        </Element>
      </Host>
    );
  }

}
