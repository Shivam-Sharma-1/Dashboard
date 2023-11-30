import mongoose from "mongoose";

const AffiliateSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateSchema);

export default AffiliateStat;
