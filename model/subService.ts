import mongoose, { Mongoose } from "mongoose";

const SubServiceTranslation = new mongoose.Schema({});
const SubServiceSchema = new mongoose.Schema(
  {
    text: String,
    translation: {
      ar: SubServiceTranslation,
      heb: SubServiceTranslation,
    },
  },
  {
    timestamps: true,
  }
);

/**
 *  {title:{ar:"te","heb":"r",en:"test"}}
 *  new Restuarnt({
 *  title:title.en
 * translations:{
 *
 *  ar:{
 *  title:"عربى"
 *  desc
 *  }
 *
 *  }
 * })
 *
 *
 */

/*

GET /restaurant
Headers local=ar
const restults=resturant.find()
return restults.map((res)=>({
  ...res,
  title:res.translations[local]?.title
  desc:res.translations[local]?.desc
}))


*/
