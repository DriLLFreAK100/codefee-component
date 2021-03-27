import { cvar } from '../../utils/style-helper';
import { flatten } from '../../utils';
import {
  Component,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';

export type CircularProgressType = 'determinate' | 'indeterminate';
export type CircularProgressColor = 'primary' | 'secondary';

const radius = 20.2;
const circumference = 2 * Math.PI * radius;

const getColor = (color: CircularProgressColor): string => {
  switch (color) {
    case 'primary':
    default:
      return cvar('--color-primary');
    case 'secondary':
      return cvar('--color-secondary');
  }
};

@Component({
  tag: 'cf-circular-progress',
  styleUrl: 'cf-circular-progress.scss',
  shadow: true,
})
export class CfCircularProgress {
  @Prop() color: CircularProgressColor;
  @Prop() progress: number = 0;
  @Prop() type: CircularProgressType = 'indeterminate';
  @State() determinateStyle: { [key: string]: any; };

  updateCircularProgress() {
    this.determinateStyle = {
      strokeDasharray: circumference,
      strokeDashoffset: `${circumference - (((this.progress as number) / 100) * circumference)}`,
    };
  }

  @Watch('progress')
  onProgressChanged() {
    this.updateCircularProgress();
  }

  connectedCallback() {
    this.updateCircularProgress();
  }

  render() {
    const svgClassName = flatten(`
      cfCircularProgress__svg 
      ${this.type}
    `);

    const circleClassName = flatten(`
      cfCircularProgress__svg__circle 
      ${this.type}
    `);

    return (
      <Host>
        <div class="cfCircularProgress">
          <svg
            class={svgClassName}
            type={this.type}
            viewBox="22 22 44 44"
          >
            <circle
              class={circleClassName}
              stroke={getColor(this.color)}
              style={this.determinateStyle}
              cx="44"
              cy="44"
              r={radius}
              fill="none"
              stroke-width="3.6"
            />
          </svg>
        </div>
      </Host>
    );
  }

}
