import { IUserSettings } from "./IUserSettings";

export interface IUser {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  settings: IUserSettings
}
