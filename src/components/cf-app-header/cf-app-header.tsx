import { Component, Host, h, Prop } from '@stencil/core';
import { INavMenu } from '../cf-side-drawer/cf-side-drawer';

@Component({
  tag: 'cf-app-header',
  styleUrl: 'cf-app-header.scss',
  shadow: true,
})
export class CfAppHeader {
  @Prop() navMenus: INavMenu[];

  render() {
    return (
      <Host>
        <div class="cfAppHeader">
          <div class="cfAppHeader__start">
            {this.navMenus && (
              <div class="cfAppHeader__start__menuIcon">
                <cf-icon-button icon="fas fa-bars"></cf-icon-button>
              </div>
            )}
          </div>
          <div class="cfAppHeader__end">

          </div>
        </div>
      </Host>
    );
  }

}
