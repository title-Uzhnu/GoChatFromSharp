import { IUserSettings } from "./IUserSettings";

export interface IUser {
  username: string,
  email: string,
  phone: string,
  settings: IUserSettings
}
