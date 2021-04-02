import { defineCustomElements } from '@codefee-component/core/loader';
import { NgModule } from '@angular/core';
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
  CfDivider,
  CfFooter,
  CfIconButton,
  CfInput,
  CfLink,
  CfLoading,
  CfNotification,
  CfNotificationMessage,
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
  CfVirtualScroller,
} from './directives/proxies';

defineCustomElements(window);

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
  CfDivider,
  CfFooter,
  CfIconButton,
  CfInput,
  CfLink,
  CfLoading,
  CfNotification,
  CfNotificationMessage,
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
  CfVirtualScroller,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: []
})
export class CodefeeComponentModule { }