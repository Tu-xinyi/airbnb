import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HomeWapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";

const Home = memo(() => {
  // 从redux获取数据
  const { goodPriceInfo, highScoreInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo:state.home.highScoreInfo
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
        {/* <div className="good-price">
        <SectionHeader title={goodPriceInfo.title} />
        <SectionRooms roomList={goodPriceInfo.list}/>
        </div>
        <div className="high-score">
          <SectionHeader title={highScoreInfo.title} subtitle={highScoreInfo.subtitle}/>
          <SectionRooms roomList={highScoreInfo.list}/>
        </div> */}
        <HomeSectionV1 infoData={goodPriceInfo}/>
        <HomeSectionV1 infoData={highScoreInfo}/>
      </div>
    </HomeWapper>
  );
});

export default Home;
