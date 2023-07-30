import mongoose from 'mongoose';

const { Schema } = mongoose;

const ThingSchema = new Schema({
  title: { type: String, requided: true },
  description: { type: String, requided: true },
  imageUrl: { type: String, requided: true },
  price: { type: Number, requided: true },
  userId: { type: String, requided: true },
});

const Thing = mongoose.model('Thing', ThingSchema);

export { Thing };
