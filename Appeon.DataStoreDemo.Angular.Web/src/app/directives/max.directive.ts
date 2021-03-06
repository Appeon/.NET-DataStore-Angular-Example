import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
  selector: '[max]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true }]
})
export class MaxDirective {

  constructor() { }

  @Input() max: number;

  validate(control: AbstractControl): { [key: string]: any } {
    return Validators.max(this.max)(control)
  }
}
