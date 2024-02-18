import { Guid } from "guid-typescript";

export class User{

static userRole : string ="";
static userID : string ="";
static userTypName : string ="";

get userRole(){
    return User.userRole;}


set userRole(userRole:string){
    User.userRole = userRole;}

get userID(){
    return User.userID;}

set userID(userID:string){
    User.userID = userID;}

get userTypName(){
    return User.userTypName;}
    
    
set userTypName(userTypName:string){
    User.userTypName = userTypName;}


}


    // userRole: string | undefined;
    // userId: string | undefined;
    // userTypeName: string | undefined;