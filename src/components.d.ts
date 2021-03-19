/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IActionMenu } from "./components/cf-app-header/cf-app-header";
import { INavMenu } from "./components/cf-app-header/cf-app-header-menu/cf-app-header-menu";
import { INavMenu as INavMenu1 } from "./components/cf-app-header/cf-app-header-menu/cf-app-header-menu";
import { ButtonType } from "./components/cf-button/cf-button";
import { CircularProgressColor, CircularProgressType } from "./components/cf-circular-progress/cf-circular-progress";
import { TypographyType } from "./components/cf-typography/cf-typography";
import { SideDrawerPosition } from "./components/cf-side-drawer/cf-side-drawer";
import { TypographyType as TypographyType1 } from "./components/cf-typography/cf-typography";
export namespace Components {
    interface CfAppHeader {
        "actionMenus": IActionMenu[];
        "appName": string;
        "drawerTitle": string;
        "navMenus": INavMenu[];
    }
    interface CfAppHeaderMenu {
        "menus": INavMenu[];
    }
    interface CfButton {
        "disabled": boolean;
        "text": string;
        "type": ButtonType;
    }
    interface CfCircularProgress {
        "color": CircularProgressColor;
        "progress": number;
        "type": CircularProgressType;
    }
    interface CfDivider {
    }
    interface CfIconButton {
        "icon": string;
    }
    interface CfLink {
        "href": string;
        "newTab": boolean;
        "styles": { [key: string]: string };
        "typographyType": TypographyType;
    }
    interface CfSideDrawer {
        "drawerTitle": string;
        "onClose": () => void;
        "position": SideDrawerPosition;
        "visible": boolean;
    }
    interface CfTypography {
        "type": TypographyType;
    }
}
declare global {
    interface HTMLCfAppHeaderElement extends Components.CfAppHeader, HTMLStencilElement {
    }
    var HTMLCfAppHeaderElement: {
        prototype: HTMLCfAppHeaderElement;
        new (): HTMLCfAppHeaderElement;
    };
    interface HTMLCfAppHeaderMenuElement extends Components.CfAppHeaderMenu, HTMLStencilElement {
    }
    var HTMLCfAppHeaderMenuElement: {
        prototype: HTMLCfAppHeaderMenuElement;
        new (): HTMLCfAppHeaderMenuElement;
    };
    interface HTMLCfButtonElement extends Components.CfButton, HTMLStencilElement {
    }
    var HTMLCfButtonElement: {
        prototype: HTMLCfButtonElement;
        new (): HTMLCfButtonElement;
    };
    interface HTMLCfCircularProgressElement extends Components.CfCircularProgress, HTMLStencilElement {
    }
    var HTMLCfCircularProgressElement: {
        prototype: HTMLCfCircularProgressElement;
        new (): HTMLCfCircularProgressElement;
    };
    interface HTMLCfDividerElement extends Components.CfDivider, HTMLStencilElement {
    }
    var HTMLCfDividerElement: {
        prototype: HTMLCfDividerElement;
        new (): HTMLCfDividerElement;
    };
    interface HTMLCfIconButtonElement extends Components.CfIconButton, HTMLStencilElement {
    }
    var HTMLCfIconButtonElement: {
        prototype: HTMLCfIconButtonElement;
        new (): HTMLCfIconButtonElement;
    };
    interface HTMLCfLinkElement extends Components.CfLink, HTMLStencilElement {
    }
    var HTMLCfLinkElement: {
        prototype: HTMLCfLinkElement;
        new (): HTMLCfLinkElement;
    };
    interface HTMLCfSideDrawerElement extends Components.CfSideDrawer, HTMLStencilElement {
    }
    var HTMLCfSideDrawerElement: {
        prototype: HTMLCfSideDrawerElement;
        new (): HTMLCfSideDrawerElement;
    };
    interface HTMLCfTypographyElement extends Components.CfTypography, HTMLStencilElement {
    }
    var HTMLCfTypographyElement: {
        prototype: HTMLCfTypographyElement;
        new (): HTMLCfTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "cf-app-header": HTMLCfAppHeaderElement;
        "cf-app-header-menu": HTMLCfAppHeaderMenuElement;
        "cf-button": HTMLCfButtonElement;
        "cf-circular-progress": HTMLCfCircularProgressElement;
        "cf-divider": HTMLCfDividerElement;
        "cf-icon-button": HTMLCfIconButtonElement;
        "cf-link": HTMLCfLinkElement;
        "cf-side-drawer": HTMLCfSideDrawerElement;
        "cf-typography": HTMLCfTypographyElement;
    }
}
declare namespace LocalJSX {
    interface CfAppHeader {
        "actionMenus"?: IActionMenu[];
        "appName"?: string;
        "drawerTitle"?: string;
        "navMenus"?: INavMenu[];
    }
    interface CfAppHeaderMenu {
        "menus"?: INavMenu[];
    }
    interface CfButton {
        "disabled"?: boolean;
        "text"?: string;
        "type"?: ButtonType;
    }
    interface CfCircularProgress {
        "color"?: CircularProgressColor;
        "progress"?: number;
        "type"?: CircularProgressType;
    }
    interface CfDivider {
    }
    interface CfIconButton {
        "icon"?: string;
    }
    interface CfLink {
        "href"?: string;
        "newTab"?: boolean;
        "styles"?: { [key: string]: string };
        "typographyType"?: TypographyType;
    }
    interface CfSideDrawer {
        "drawerTitle"?: string;
        "onClose"?: () => void;
        "position"?: SideDrawerPosition;
        "visible"?: boolean;
    }
    interface CfTypography {
        "type"?: TypographyType;
    }
    interface IntrinsicElements {
        "cf-app-header": CfAppHeader;
        "cf-app-header-menu": CfAppHeaderMenu;
        "cf-button": CfButton;
        "cf-circular-progress": CfCircularProgress;
        "cf-divider": CfDivider;
        "cf-icon-button": CfIconButton;
        "cf-link": CfLink;
        "cf-side-drawer": CfSideDrawer;
        "cf-typography": CfTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cf-app-header": LocalJSX.CfAppHeader & JSXBase.HTMLAttributes<HTMLCfAppHeaderElement>;
            "cf-app-header-menu": LocalJSX.CfAppHeaderMenu & JSXBase.HTMLAttributes<HTMLCfAppHeaderMenuElement>;
            "cf-button": LocalJSX.CfButton & JSXBase.HTMLAttributes<HTMLCfButtonElement>;
            "cf-circular-progress": LocalJSX.CfCircularProgress & JSXBase.HTMLAttributes<HTMLCfCircularProgressElement>;
            "cf-divider": LocalJSX.CfDivider & JSXBase.HTMLAttributes<HTMLCfDividerElement>;
            "cf-icon-button": LocalJSX.CfIconButton & JSXBase.HTMLAttributes<HTMLCfIconButtonElement>;
            "cf-link": LocalJSX.CfLink & JSXBase.HTMLAttributes<HTMLCfLinkElement>;
            "cf-side-drawer": LocalJSX.CfSideDrawer & JSXBase.HTMLAttributes<HTMLCfSideDrawerElement>;
            "cf-typography": LocalJSX.CfTypography & JSXBase.HTMLAttributes<HTMLCfTypographyElement>;
        }
    }
}
