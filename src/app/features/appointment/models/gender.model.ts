import { getValuesName } from 'src/app/core/utils/enum-keys.util';

enum Gender {
  'masculino',
  'femenino',
}

export type GenderType = keyof typeof Gender;
export const GENDER_LIST: string[] = getValuesName(Gender);
