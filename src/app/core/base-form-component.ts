import {BaseComponent} from './base-component';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {FormlyHelper} from './formly-helper.class';


export class BaseFormComponent extends BaseComponent {

  form: FormGroup = new FormGroup({});

  readonly formControl: import('@angular/forms').AbstractControl;

  options: FormlyFormOptions = {};
  formFields: FormlyFieldConfig[] = [];
  findField = FormlyHelper.findField;
  getFormKeys = FormlyHelper.getFormKeys;
  findFieldByLabel = FormlyHelper.findFieldByLabel;
  filterFieldGroup = FormlyHelper.filterFieldGroup;
  disableField = FormlyHelper.disableField;

  saving: boolean = false;

  clearForm() {
    this.options.resetModel();
  }

  submit(): void {
    if (!this.form.valid) {
      return;
    }
    this.save();
  }

  save(): void {

  }


  protected setFieldErrors(field: AbstractControl, errors: [string]) {
    let errorMessage = '';

    for (const error of errors) {
      errorMessage += error + '\n';
    }

    errorMessage = errorMessage.substring(0, errorMessage.length - 1);
    field.setErrors({'server-error': errorMessage});
  }

  public setSaving(saving: boolean, delay: number = 0) {

    const loadingFn = () => {
      this.saving = saving;
    };

    if (delay) {
      setTimeout(loadingFn, delay);
    } else {
      loadingFn();
    }
  }


  protected matchErrorsToForm(errors: any) {

    const errorKeys = FormlyHelper.getFormErrorKeys(errors);

    for (const errorKey of errorKeys) {
      if (errors.hasOwnProperty(errorKey)) {
        if (this.form.controls[errorKey]) {
          this.setFieldErrors(this.form.controls[errorKey], errors[errorKey]);
        }
      }
    }
  }

}
