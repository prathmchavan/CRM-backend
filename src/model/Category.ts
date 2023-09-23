// src/models/Category.ts
import { Document, model, Schema } from 'mongoose';

interface Category extends Document {
  name: string;
  description: string;
 
}

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
  description: { type: String },

});

export default model<Category>('Category', categorySchema);
