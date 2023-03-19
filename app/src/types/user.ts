import type { TUUID } from "./shared";

export type TAuthToken = string;
export interface IUsers {
  [key: TUUID]: IUser;
}
export interface IUser {
  uid: TUUID;
  pk: string;
  username: string;
}
