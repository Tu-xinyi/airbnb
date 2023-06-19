import { getHomeGoodPriceData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 在RTK中发起异步请求
export const fetchHomeDataAction = createAsyncThunk('fetchdata',async (payload)=>{
  const res = getHomeGoodPriceData()
  return res

  
})

const homeSlice = createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{}
  },
  reducers:{
    // 修改信息
    changeGoodPriceInfoAction(state,{ payload }){
      state.goodPriceInfo = payload
    }
  },
  extraReducers:{
    [fetchHomeDataAction.fulfilled](state,{payload}){
      console.log(payload);
      state.goodPriceInfo = payload
    }
  }
})

// 将action导出
export const {changeGoodPriceInfoAction} = homeSlice.actions

export default homeSlice.reducer

