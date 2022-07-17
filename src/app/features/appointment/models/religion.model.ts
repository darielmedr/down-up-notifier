import { getValuesName } from 'src/app/core/utils/enum-keys.util';

enum Religion {
  'otro',
  'ninguna',
}

export type ReligionType = keyof typeof Religion;
export const RELIGION_LIST: string[] = getValuesName(Religion);
