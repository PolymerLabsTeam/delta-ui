import { Component, Element, h, Prop } from "@stencil/core";
import { HTMLStencilElement } from "@stencil/core/internal";

@Component({
  tag: 'd-button',
  scoped: true,
  styleUrl: 'd-button.css'
})
export class DButton {
  @Element()
  hostElement!: HTMLStencilElement;

  @Prop()
  public disabled: boolean = false;

  @Prop()
  public icon?: HTMLElement;

  @Prop()
  public iconPosition?: 'before' | 'after' | 'primary' = 'before';

  render() {
    let iconElement: HTMLElement | null = null;

    if (this.icon != null) {
      iconElement = <span class="button-item">{ this.icon }</span>;
    }

    const hasContent = this.hostElement.querySelector('[slot="content"]') != null;

    return (
      <button>
        { this.iconPosition == 'before' && iconElement }
        { hasContent && (
          <span class="button-item">
            <slot name="content" />
          </span>
        ) }
        { this.iconPosition == 'after' && iconElement }
      </button>
    );
  }
}
