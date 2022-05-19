import {IUser} from "./user.interface";

export interface IUserDetails extends IUser{
  id:number,
  name:string,
  username:string,
  phone:string,
  email:string
}
