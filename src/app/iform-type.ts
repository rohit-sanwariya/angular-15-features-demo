import { FormControl } from '@angular/forms';

export type OrgFormType<T> = FormControl<null | T>;
/**
 * @type   FormControl < null | T >
 */
export type DemoFormType = {
  firstName: OrgFormType<string>;
  age: OrgFormType<number>;
  remarks: FormControl<string>;
};
