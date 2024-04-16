import { IFriend } from "./IFriend";

export interface IChatMessage {
  id: number,
  text: string,
  sender: IFriend,
  isGroup: boolean,
  time: string
}
