import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
// import RoomItem from "@/components/room-item";

const Home = memo(() => {
  // 从redux获取数据
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );
  // 发起请求dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWapper>
      <HomeBanner /> 
      <div className="content">
        <div className="good-price">
        <SectionHeader title={goodPriceInfo.title} />
        <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
      </div>
    </HomeWapper>
  );
});

export default Home;
