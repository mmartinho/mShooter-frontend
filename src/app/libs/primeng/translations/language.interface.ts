import { Aria } from './aria.interface';

export interface Language {
  startsWith: string;
  contains: string;
  notContains: string;
  endsWith: string;
  equals: string;
  notEquals: string;
  noFilter: string;
  filter: string;
  lt: string;
  lte: string;
  gt: string;
  gte: string;
  dateIs: string;
  dateIsNot: string;
  dateBefore: string;
  dateAfter: string;
  custom: string;
  clear: string;
  close: string;
  apply: string;
  matchAll: string;
  matchAny: string;
  addRule: string;
  removeRule: string;
  accept: string;
  reject: string;
  choose: string;
  upload: string;
  cancel: string;
  completed: string;
  pending: string;
  dayNames: string[];
  dayNamesShort: string[];
  dayNamesMin: string[];
  monthNames: string[];
  monthNamesShort: string[];
  chooseYear: string;
  chooseMonth: string;
  chooseDate: string;
  prevDecade: string;
  nextDecade: string;
  prevYear: string;
  nextYear: string;
  prevMonth: string;
  nextMonth: string;
  prevHour: string;
  nextHour: string;
  prevMinute: string;
  nextMinute: string;
  prevSecond: string;
  nextSecond: string;
  am: string;
  pm: string;
  today: string;
  weekHeader: string;
  firstDayOfWeek: number;
  dateFormat: string;
  weak: string;
  medium: string;
  strong: string;
  passwordPrompt: string;
  emptyFilterMessage: string;
  searchMessage: string;
  selectionMessage: string;
  emptySelectionMessage: string;
  emptySearchMessage: string;
  emptyMessage: string;
  aria: Aria;
}
