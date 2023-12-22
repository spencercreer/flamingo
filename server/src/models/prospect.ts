import mongoose, { Schema, Document } from "mongoose";

interface IProspect extends Document {
  companyName: string;
  contact?: string;
  url?: string;
}

const prospectSchema = new Schema<IProspect>({
  companyName: {
    type: String,
    trim: true,
    required: true,
  },
  contact: {
    type: String,
    lowercase: true,
    trim: true,
  },
  url: {
    type: String,
  },
},
{
    timestamps: true,
});


const Prospect = mongoose.model<IProspect>("Prospect", prospectSchema);

export default Prospect;
