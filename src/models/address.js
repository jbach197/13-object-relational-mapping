'use strict';

import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
  name: {type:String, required:true},
  address1: {type:String, required:true},
  address2: {type:String},
  city: {type:String},
  state: {type:String},
  zip: {type:Number},
});

addressSchema.pre('save', function(next) {
  next();
});

export default mongoose.model('address', addressSchema);