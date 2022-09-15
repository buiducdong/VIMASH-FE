import { AbstractControl } from "@angular/forms";

export class Utils{
    public static validateFaxPhonePostCode(control: AbstractControl): null | object {
        let val = control.value ? control.value.toString().replace(/-/g, '') : '';
    
        if (val === null || val === '') return null;
    
        if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidFaxPhonePostCode': true };
    
        return null;
      }
      public static checkNumberic(control: AbstractControl): null | object {
        let val = control.value;
    
        if (val === null || val === '') return null;
    
        if (!val.toString().match(/^[0-9]+(\.?[0-9]+)?$/)) return { 'invalidNumber': true };
    
        return null;
      }
}


