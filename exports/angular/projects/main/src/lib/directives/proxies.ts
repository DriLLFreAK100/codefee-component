/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./proxies-utils";
import { Components } from "@codefee-component/core";
export declare interface CfAppHeader extends Components.CfAppHeader {
}
@ProxyCmp({ inputs: ["appName", "drawerOpen", "drawerTitle", "navMenus"] })
@Component({ selector: "cf-app-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["appName", "drawerOpen", "drawerTitle", "navMenus"] })
export class CfAppHeader {
  drawerOpenChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["drawerOpenChange"]);
  }
}
export declare interface CfAppHeaderActionMenu extends Components.CfAppHeaderActionMenu {
}
@ProxyCmp({ inputs: ["icon", "menuTitle"] })
@Component({ selector: "cf-app-header-action-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["icon", "menuTitle"] })
export class CfAppHeaderActionMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfAppHeaderMenu extends Components.CfAppHeaderMenu {
}
@ProxyCmp({ inputs: ["active", "link", "menuTitle"] })
@Component({ selector: "cf-app-header-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["active", "link", "menuTitle"] })
export class CfAppHeaderMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfButton extends Components.CfButton {
}
@ProxyCmp({ inputs: ["disabled", "text", "type"] })
@Component({ selector: "cf-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "text", "type"] })
export class CfButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfCard extends Components.CfCard {
}
@ProxyCmp({ inputs: ["height", "padding", "width"] })
@Component({ selector: "cf-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["height", "padding", "width"] })
export class CfCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfCheckbox extends Components.CfCheckbox {
}
@ProxyCmp({ inputs: ["checked"] })
@Component({ selector: "cf-checkbox", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked"] })
export class CfCheckbox {
  checkChange!: EventEmitter<CustomEvent>;
  checkboxInit!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["checkChange", "checkboxInit"]);
  }
}
export declare interface CfCheckboxList extends Components.CfCheckboxList {
}
@ProxyCmp({ inputs: ["direction"] })
@Component({ selector: "cf-checkbox-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["direction"] })
export class CfCheckboxList {
  checkListChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["checkListChange"]);
  }
}
export declare interface CfChip extends Components.CfChip {
}
@ProxyCmp({ inputs: ["addable", "removable", "type"] })
@Component({ selector: "cf-chip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["addable", "removable", "type"] })
export class CfChip {
  clickAdd!: EventEmitter<CustomEvent>;
  clickRemove!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["clickAdd", "clickRemove"]);
  }
}
export declare interface CfCircularProgress extends Components.CfCircularProgress {
}
@ProxyCmp({ inputs: ["color", "progress", "type"] })
@Component({ selector: "cf-circular-progress", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["color", "progress", "type"] })
export class CfCircularProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfDivider extends Components.CfDivider {
}
@ProxyCmp({ inputs: ["gutterBottom"] })
@Component({ selector: "cf-divider", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["gutterBottom"] })
export class CfDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfFooter extends Components.CfFooter {
}
@ProxyCmp({ inputs: ["fixed"] })
@Component({ selector: "cf-footer", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["fixed"] })
export class CfFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfIconButton extends Components.CfIconButton {
}
@ProxyCmp({ inputs: ["icon", "type"] })
@Component({ selector: "cf-icon-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["icon", "type"] })
export class CfIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfInput extends Components.CfInput {
}
@ProxyCmp({ inputs: ["label", "placeholder", "status", "type", "value"] })
@Component({ selector: "cf-input", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["label", "placeholder", "status", "type", "value"] })
export class CfInput {
  valueChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["valueChange"]);
  }
}
export declare interface CfLink extends Components.CfLink {
}
@ProxyCmp({ inputs: ["href", "newTab", "styles", "typographyType", "underline"] })
@Component({ selector: "cf-link", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["href", "newTab", "styles", "typographyType", "underline"] })
export class CfLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfLoading extends Components.CfLoading {
}
@ProxyCmp({ inputs: ["message", "show"] })
@Component({ selector: "cf-loading", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["message", "show"] })
export class CfLoading {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfNotification extends Components.CfNotification {
}
@Component({ selector: "cf-notification", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class CfNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfNotificationMessage extends Components.CfNotificationMessage {
}
@ProxyCmp({ inputs: ["messageTitle", "type"] })
@Component({ selector: "cf-notification-message", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["messageTitle", "type"] })
export class CfNotificationMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfSideDrawer extends Components.CfSideDrawer {
}
@ProxyCmp({ inputs: ["drawerTitle", "position", "visible"] })
@Component({ selector: "cf-side-drawer", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["drawerTitle", "position", "visible"] })
export class CfSideDrawer {
  close!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["close"]);
  }
}
export declare interface CfTab extends Components.CfTab {
}
@ProxyCmp({ inputs: ["active", "tabId"] })
@Component({ selector: "cf-tab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["active", "tabId"] })
export class CfTab {
  clickTab!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["clickTab"]);
  }
}
export declare interface CfTable extends Components.CfTable {
}
@Component({ selector: "cf-table", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class CfTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfTableBody extends Components.CfTableBody {
}
@ProxyCmp({ inputs: ["bodyHeight", "rowHeight", "virtualize"] })
@Component({ selector: "cf-table-body", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["bodyHeight", "rowHeight", "virtualize"] })
export class CfTableBody {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfTableCell extends Components.CfTableCell {
}
@ProxyCmp({ inputs: ["position", "size", "type"] })
@Component({ selector: "cf-table-cell", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["position", "size", "type"] })
export class CfTableCell {
  tblCellInit!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["tblCellInit"]);
  }
}
export declare interface CfTableFoot extends Components.CfTableFoot {
}
@Component({ selector: "cf-table-foot", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class CfTableFoot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfTableHead extends Components.CfTableHead {
}
@Component({ selector: "cf-table-head", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class CfTableHead {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfTableRow extends Components.CfTableRow {
}
@ProxyCmp({ inputs: ["type"] })
@Component({ selector: "cf-table-row", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["type"] })
export class CfTableRow {
  tblRowInit!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["tblRowInit"]);
  }
}
export declare interface CfTabs extends Components.CfTabs {
}
@Component({ selector: "cf-tabs", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class CfTabs {
  tabSelect!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["tabSelect"]);
  }
}
export declare interface CfTypography extends Components.CfTypography {
}
@ProxyCmp({ inputs: ["ellipsis", "gutterBottom", "type"] })
@Component({ selector: "cf-typography", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["ellipsis", "gutterBottom", "type"] })
export class CfTypography {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
export declare interface CfVirtualScroller extends Components.CfVirtualScroller {
}
@ProxyCmp({ inputs: ["childHeight", "containerClassName", "containerHeight", "cssUnit", "innerContainerClassName", "windowLimit"] })
@Component({ selector: "cf-virtual-scroller", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["childHeight", "containerClassName", "containerHeight", "cssUnit", "innerContainerClassName", "windowLimit"] })
export class CfVirtualScroller {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
