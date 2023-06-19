import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './modules/home'
import entireReducer from './modules/entire/index'

// 将reducer合并 
const store = configureStore({
  reducer:{
    // 通过两种方式创建reducer
    home:homeReducer,
    entire: entireReducer
  }
})

export default store