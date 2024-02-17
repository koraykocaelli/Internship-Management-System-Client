import { Guid } from "guid-typescript";

export class User{

static userRole : string ="";
static userId : Guid = Guid.createEmpty();

get userRole(){
    return User.userRole;}


set userRole(userRole:string){
    User.userRole = userRole;}

get userId(){
    return User.userId;}

set userId(userId:Guid){
    User.userId = userId;}

}






