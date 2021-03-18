/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonType } from "./components/cf-button/cf-button";
import { CircularProgressColor, CircularProgressType } from "./components/cf-circular-progress/cf-circular-progress";
import { TypographyType } from "./components/cf-typography/cf-typography";
export namespace Components {
    interface CfAppHeader {
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
    interface CfLink {
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
    interface HTMLCfLinkElement extends Components.CfLink, HTMLStencilElement {
    }
    var HTMLCfLinkElement: {
        prototype: HTMLCfLinkElement;
        new (): HTMLCfLinkElement;
    };
    interface HTMLCfTypographyElement extends Components.CfTypography, HTMLStencilElement {
    }
    var HTMLCfTypographyElement: {
        prototype: HTMLCfTypographyElement;
        new (): HTMLCfTypographyElement;
    };
    interface HTMLElementTagNameMap {
        "cf-app-header": HTMLCfAppHeaderElement;
        "cf-button": HTMLCfButtonElement;
        "cf-circular-progress": HTMLCfCircularProgressElement;
        "cf-divider": HTMLCfDividerElement;
        "cf-link": HTMLCfLinkElement;
        "cf-typography": HTMLCfTypographyElement;
    }
}
declare namespace LocalJSX {
    interface CfAppHeader {
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
    interface CfLink {
    }
    interface CfTypography {
        "type"?: TypographyType;
    }
    interface IntrinsicElements {
        "cf-app-header": CfAppHeader;
        "cf-button": CfButton;
        "cf-circular-progress": CfCircularProgress;
        "cf-divider": CfDivider;
        "cf-link": CfLink;
        "cf-typography": CfTypography;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cf-app-header": LocalJSX.CfAppHeader & JSXBase.HTMLAttributes<HTMLCfAppHeaderElement>;
            "cf-button": LocalJSX.CfButton & JSXBase.HTMLAttributes<HTMLCfButtonElement>;
            "cf-circular-progress": LocalJSX.CfCircularProgress & JSXBase.HTMLAttributes<HTMLCfCircularProgressElement>;
            "cf-divider": LocalJSX.CfDivider & JSXBase.HTMLAttributes<HTMLCfDividerElement>;
            "cf-link": LocalJSX.CfLink & JSXBase.HTMLAttributes<HTMLCfLinkElement>;
            "cf-typography": LocalJSX.CfTypography & JSXBase.HTMLAttributes<HTMLCfTypographyElement>;
        }
    }
}
