import { ReligionType } from 'src/app/features/appointment/models/religion.model';
import { GenderType } from 'src/app/features/appointment/models/gender.model';
import { ReasonType } from 'src/app/features/appointment/models/reason.model';

export interface AppointmentInfo {
  firstName: string;
  lastName: string;
  dni: string;
  passportNumber: string;
  birthDate: Date;
  gender: GenderType;
  religion: ReligionType;
  reason: ReasonType;
}
