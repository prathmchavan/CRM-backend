import { Schema, model, Document } from "mongoose"


interface Review extends Document{
    user: string | Schema.Types.ObjectId,
    product : string| Schema.Types.ObjectId,
    rating : number,
    text: string
}


const reviewSchema = new Schema<Review>({

    user: {

        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    product:{

        type : Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    text : {
        type: String,
        required: true
    }

});


export default model<Review>('Review', reviewSchema);