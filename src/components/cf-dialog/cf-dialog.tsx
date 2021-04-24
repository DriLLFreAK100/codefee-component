import { Component, Element, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'cf-dialog',
  styleUrl: 'cf-dialog.scss',
  shadow: true,
})
export class CfDialog {
  @Element() el: HTMLCfDialogElement;
  @Prop() content: HTMLElement;
  @Prop() dialogTitle: string;
  @Prop() dialogStyle: CSSStyleDeclaration = {
    height: '400px',
    width: '600px',
  } as CSSStyleDeclaration;
  @Prop() footer: HTMLElement;
  @Prop() strictClose: boolean = false;
  @Event() close: EventEmitter<any>;

  public handleOnClickClose(e: MouseEvent): void {
    e.stopPropagation();
    this.close.emit();
  }

  @Listen('click', { target: 'document', capture: true })
  public handleClickOutside(e: any): void {
    if (!this.strictClose) {
      const isClickInside = this.el.contains(e.target);

      if (!isClickInside) {
        this.close.emit();
      }
    }
  }

  public componentDidLoad() {
    this.el.shadowRoot.childNodes[0].childNodes[1].appendChild(this.content);
    this.el.shadowRoot.childNodes[0].childNodes[2].appendChild(this.footer);
  }

  render() {
    const style: CSSStyleDeclaration = {
      ...this.dialogStyle,
      left: `calc(50vw - ${this.dialogStyle.width} / 2)`,
      top: `calc(50vh - ${this.dialogStyle.height} / 2)`,
    };

    return (
      <Host>
        <div class="dialog" style={style as any}>
          <div class="dialog__header">
            <cf-typography type="h5">{this.dialogTitle}</cf-typography>
            <div>
              <i class="fas fa-times" onClick={this.handleOnClickClose.bind(this)} />
            </div>
          </div>
          <div class="dialog__content"></div>
          {this.footer && <div class="dialog__footer"></div>}
        </div>
      </Host>
    );
  }
}
