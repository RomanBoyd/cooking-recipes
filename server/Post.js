import mongoose from 'mongoose';

const Post = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: Array, required: true},
    ingredients: {type: Array, required: true},
    mealImg: {type: String, required: true}
})

export default mongoose.model('Post', Post)