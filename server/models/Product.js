import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
