import { Document, model, models, Schema, Types } from "mongoose";

export interface IUser extends Document {
    clerkID: string;
    email: string;
    username: string;
    photo?: string;
    firstName: string;
    lastName: string;
    planID: number;
    creditBalance: number;
}

const UserSchema = new Schema({
    clerkID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String},
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    planID: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },  
})

const User = models?.User || model('User', UserSchema);

export default User;