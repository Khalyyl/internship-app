import { model, Schema } from "mongoose";
export interface User {
    id: string;
    username: string;
    avatar: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: string;
    role: string;
    
}

export const UserSchema = new Schema<User>(
    {
        id:{type:String, required:true, unique:true},
        username:{type:String, required:true},
        avatar:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String, required:true},
        phoneNumber:{type:String, required:true},
        address:{type:String, required:true},
        role:{type:String, required:true},


    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }   
);


/* Create a model */
export const UserModel = model<User>('User', UserSchema)

