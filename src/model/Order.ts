import mongoose, { Document, model, Schema } from 'mongoose';

interface Order extends Document {
  user: string| Schema.Types.ObjectId; 
 products: [{ product: string | Schema.Types.ObjectId; quantity: number }];
  totalPrice: number;
  status: string;

}

const orderSchema = new Schema<Order>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true },
});

export default model<Order>('Order', orderSchema);
