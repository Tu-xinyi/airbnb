import { getHomeGoodPriceData ,getHomeDiscountData,getHomeHighScoreData} from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 在RTK中发起异步请求
export const fetchHomeDataAction = createAsyncThunk('fetchdata',(payload,{dispatch})=>{
  getHomeGoodPriceData().then(res=>{
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res=>{
    dispatch(changeHighScoreInfoAction(res))
   })
   getHomeDiscountData().then(res=>{
    dispatch(changeDiscountInfoAction(res))
   })
  
})

const homeSlice = createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{},
    highScoreInfo:{},
    discountInfo:{}
  },
  reducers:{
    // 修改信息
    changeGoodPriceInfoAction(state,{ payload }){
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state,{ payload }){
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state,{ payload }){
      state.discountInfo = payload
    },
  },
  extraReducers:{
    // [fetchHomeDataAction.fulfilled](state,{payload}){
    //   console.log(payload);
    //   state.goodPriceInfo = payload
    // }
  }
})

// 将action导出
export const {changeGoodPriceInfoAction,changeHighScoreInfoAction,changeDiscountInfoAction} = homeSlice.actions

export default homeSlice.reducer

