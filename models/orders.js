import { Schema, model, ObjectId } from 'mongoose'

const cartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: 'products',
    required: [true, '缺少商品欄位']
  },
  quantity: {
    type: Number,
    required: [true, '缺少商品數量']
  },
  noodle:{
    type: String,
    required: [true, '缺少麵條種類'],
    enum:{
      values:['直麵','筆管麵','寬扁麵'],
      message:'麵條種類錯誤'
    }
  },
})

const schema = new Schema({
  user: {
    type: ObjectId,
    ref: 'users',
    required: [true, '缺少使用者']
  },
  cart: {
    type: [cartSchema],
    validate: {
      validator (value) {
        return Array.isArray(value) && value.length > 0
      },
      message: '購物車不能為空'
    }
  },
  name: {
    type: String,
    required: [true, '缺少取件人姓名']
  },
  phone: {
    type: String,
    required: [true, '缺少取件人電話']
  },
  address: {
    type: String,
    required: [true, '缺少取件人地址']
  },
}, { versionKey: false, timestamps: true })

export default model('orders', schema)
