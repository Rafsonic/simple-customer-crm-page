import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatSpinner} from '@angular/material/progress-spinner';

@Directive({
  selector: '[appButtonSpinner]'
})
export class ButtonSpinnerDirective implements OnChanges {

  @Input('appBtnSpinner') loading: boolean = false;

  private element: HTMLButtonElement;
  private spinnerRef: ComponentRef<MatSpinner>;
  private spinnerContainer: ComponentRef<MatIcon>;

  constructor(elRef: ElementRef,
              private resolver: ComponentFactoryResolver,
              public vcRef: ViewContainerRef,
              private renderer: Renderer2) {
    this.element = elRef.nativeElement;
  }

  startSpinner() {
    // Create components
    const spinnerFactory = this.resolver.resolveComponentFactory(MatSpinner);
    this.spinnerRef = this.vcRef.createComponent(spinnerFactory);
    const iconFactory = this.resolver.resolveComponentFactory(MatIcon);
    this.spinnerContainer = this.vcRef.createComponent(iconFactory);


    this.renderer.addClass(this.spinnerContainer.location.nativeElement, 'btn-spinner');

    // Configure spinner
    this.spinnerRef.instance.diameter = 20;
    this.spinnerRef.instance.mode = 'indeterminate';
    this.spinnerRef.instance.color = 'primary';

    this.renderer.appendChild(
      this.spinnerContainer.location.nativeElement,
      this.spinnerRef.location.nativeElement
    );

    this.renderer.appendChild(
      this.element,
      this.spinnerContainer.location.nativeElement
    );

    this.element.disabled = true;
  }

  stopSpinner() {

    if (!this.spinnerContainer) {
      return;
    }

    setTimeout(() => {
      this.renderer.removeChild(
        this.element,
        this.spinnerContainer.location.nativeElement
      );
      this.element.disabled = false;
    }, 600);

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.loading) {
      this.startSpinner();
    } else {
      this.stopSpinner();
    }
  }
}
