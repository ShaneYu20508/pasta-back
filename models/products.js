import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    required: [true, '缺少商品名稱']
  },
  price: {
    type: Number,
    required: [true, '價格不得低於0'],
    min: [0, '價格不得低於0']
  },
  image: {
    type: String,
    required: [true, '缺少商品圖片']
  },
  description: {
    type: String,
    required: [true, '缺少商品說明']
  },
  category: {
    type: String,
    required: [true, '缺少商品分類'],
    enum: {
      values: ['紅醬', '白醬', '青醬'],
      message: '商品分類錯誤'
    }
  },
  sell: {
    type: Boolean,
    required: [true, '缺少商品上架狀態']
  }
}, {
  timestamps: true,
  versionKey: false
})

export default model('products', schema)
