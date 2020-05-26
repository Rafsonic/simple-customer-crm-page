import {FormlyFieldConfig} from '@ngx-formly/core';

export class FormlyHelper {

    public static findField(fieldId: string, formFields: FormlyFieldConfig[]): FormlyFieldConfig {
        let field = null;

        for (const item of formFields) {
            let keyParts = [];
            if (item.key) {
                keyParts = item.key.split('.');
            }

            if (!field && (item.key === fieldId || (keyParts.length && keyParts[keyParts.length - 1] === fieldId))) {
                field = item;
            }

            if (!field && item.fieldGroup && item.fieldGroup.length > 0) {
                field = this.findField(fieldId, item.fieldGroup);
            }

            if (field) {
                break;
            }
        }
        return field;
    }

    public static findFieldByLabel(label: string, formFields: FormlyFieldConfig[]): FormlyFieldConfig {
        return formFields.find(item => {
            return item.templateOptions.label === label;
        });
    }

    public static disableField(fieldId: string, formFields: FormlyFieldConfig[], disable: boolean = true) {
        const field = this.findField(fieldId, formFields);

        if (!field) {
            return;
        }

        field.templateOptions.disabled = disable;
    }

    public static disableForm(formFields: FormlyFieldConfig[]) {
        formFields.forEach(item => {
            if (item.templateOptions) {
                item.templateOptions.disabled = true;
            }
        });
    }

    public static getFormKeys(formFields: FormlyFieldConfig[]): string[] {
        const fields = [];

        formFields.forEach(item => {
            if (item.fieldGroup && item.fieldGroup.length > 0) {
                fields.push(...this.getFormKeys(item.fieldGroup));
            } else {
                if (typeof item.key !== 'undefined') {
                    fields.push(item.key);
                }
            }
        });

        return fields;
    }

    public static filterFieldGroup(formFields: FormlyFieldConfig[], filter: (field: FormlyFieldConfig) => boolean): FormlyFieldConfig[] {
        const recursiveFilter = (field: FormlyFieldConfig) => {
            if (field.fieldGroup && field.fieldGroup.length) {
                return (field.fieldGroup = field.fieldGroup.filter(recursiveFilter)).length;
            } else if (filter(field)) {
                return true;
            }
        };
        return formFields.filter(recursiveFilter);
    }

    public static getFormErrorKeys(error: any): string[] {
        const errorKeys = [];
        for (const key in error) {
            if (error.hasOwnProperty(key)) {
                errorKeys.push(key);
            }
        }

        return errorKeys;
    }

}
