// {
//                     "imageUrl": "https://playov2.gumlet.io/home/banner/app_fit_for_fun.jpg",
//                     "link": 'https://playo.co/meet',
//                     "priority": 1,
//                     "countryCode": COUNTRY_CODES.INDIA
//                 },

const { Schema, model } = require("mongoose");

const bannerSchema = new Schema({
  tag: { type: String, trim: true, required: true },
  imageUrl: { type: String, required: true },
  link: { type: String, required: true },
  priority: { type: Number, required: true },
  countryCode: { type: String, required: true },
  startDate: { type: Date, default: new Date().toISOString() },
  endDate: { type: Date },
});

module.exports = Banner = model("banner", bannerSchema);


