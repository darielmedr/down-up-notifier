import { getValuesName } from 'src/app/core/utils/enum-keys.util';

enum Reason {
  'turismo',
  'negocios',
}

export type ReasonType = keyof typeof Reason;
export const REASON_LIST: string[] = getValuesName(Reason);
