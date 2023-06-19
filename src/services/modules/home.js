import TRequest from "../request";

export function getHomeGoodPriceData(){
  return TRequest.get({
    url:'home/goodprice'
  })
}
export function getHomeHighScoreData(){
  return TRequest.get({
    url:'home/highscore'
  })
}