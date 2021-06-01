import { APP_INITIALIZER, NgModule } from '@angular/core';
import { initializer } from './initializer';
import {
  CfAppHeader,
  CfAppHeaderActionMenu,
  CfAppHeaderMenu,
  CfButton,
  CfCard,
  CfCheckbox,
  CfCheckboxList,
  CfChip,
  CfCircularProgress,
  CfDialog,
  CfDialogOverlay,
  CfDivider,
  CfFooter,
  CfIconButton,
  CfInput,
  CfLink,
  CfLoading,
  CfNotification,
  CfNotificationMessage,
  CfSelect,
  CfSelectGroup,
  CfSelectOption,
  CfSideDrawer,
  CfTab,
  CfTable,
  CfTabs,
  CfTypography,
  CfVirtualScroller,
  } from './directives/proxies';

const DECLARATIONS = [
  // proxies
  CfAppHeader,
  CfAppHeaderActionMenu,
  CfAppHeaderMenu,
  CfButton,
  CfCard,
  CfCheckbox,
  CfCheckboxList,
  CfChip,
  CfCircularProgress,
  CfDialog,
  CfDialogOverlay,
  CfDivider,
  CfFooter,
  CfIconButton,
  CfInput,
  CfLink,
  CfLoading,
  CfNotification,
  CfNotificationMessage,
  CfSelect,
  CfSelectGroup,
  CfSelectOption,
  CfSideDrawer,
  CfTab,
  CfTable,
  CfTabs,
  CfTypography,
  CfVirtualScroller
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    multi: true
  }],
})
export class CodefeeComponentModule { }
