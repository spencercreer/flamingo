import mongoose, { Schema, Document } from "mongoose";
import bcrypt from 'bcrypt';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;  
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  }
},
{
    timestamps: true,
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  
    next();
  });

userSchema.methods.comparePassword = async function (password: string) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
