import { IUserSettings } from "./IUserSettings";

export interface IUser {
  id: number,
  username: string,
  email: string,
  phone: string,
  settings: IUserSettings
}
