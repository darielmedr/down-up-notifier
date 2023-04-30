import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { AppointmentInfo } from 'src/app/features/appointment/models/appointment-info.model';
import { GENDER_LIST } from 'src/app/features/appointment/models/gender.model';
import { REASON_LIST } from 'src/app/features/appointment/models/reason.model';
import { RELIGION_LIST } from 'src/app/features/appointment/models/religion.model';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentFormComponent implements OnInit {
  public appointmentForm: UntypedFormGroup = new UntypedFormGroup({});

  public maxDate: Date = new Date();
  public minDate: Date = new Date(this.maxDate.getFullYear() - 120, 1, 1);
  public startDate: Date = new Date(this.maxDate.getFullYear() - 40, 1, 1);

  public genderOptions: string[] = GENDER_LIST;
  public religionOptions: string[] = RELIGION_LIST;
  public reasonOptions: string[] = REASON_LIST;

  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.appointmentForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        dni: ['', [Validators.required, Validators.minLength(6)]],
        passportNumber: ['', Validators.required],
        birthDate: ['', Validators.required],
        gender: ['', Validators.required],
        religion: ['', Validators.required],
        reason: ['', Validators.required],
      },
      {
        updateOn: 'blur',
      },
    );
  }

  public sendAppointmentInfo(): void {
    if (this.appointmentForm.valid) {
      console.log('Invalid form');
      console.log(this.appointmentForm.errors);
      return;
    }

    const info: AppointmentInfo = this.appointmentForm.value as AppointmentInfo;
    console.log(info);
  }

  public trackByIndexFn(index: number, _: unknown): number {
    return index;
  }
}
