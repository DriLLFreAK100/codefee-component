import { APP_INITIALIZER, NgModule } from '@angular/core';
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
  CfTableBody,
  CfTableCell,
  CfTableFoot,
  CfTableHead,
  CfTableRow,
  CfTabs,
  CfTypography,
  CfVirtualScroller
  } from './directives/proxies';
import { initializer } from './initializer';

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
  CfTableBody,
  CfTableCell,
  CfTableFoot,
  CfTableHead,
  CfTableRow,
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
