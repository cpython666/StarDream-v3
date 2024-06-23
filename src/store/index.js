import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      isBgVideo: false,
      bgVideoUrl:['/assets/videos/0.mp4','/assets/videos/1.mp4','/assets/videos/2.mp4',
      '/assets/videos/4.mp4','/assets/videos/5.mp4','/assets/videos/6.mp4',
      '/assets/videos/8.mp4','/assets/videos/9.mp4',],
      isBgImage:true,
      bgImageUrl:['/assets/imgs/bgimage/1.jpg','/assets/imgs/bgimage/1.png','/assets/imgs/bgimage/2.png','/assets/imgs/bgimage/3.png'],
      isJianYue:false,
      appNum:0
    }
  },
  mutations: {
    changeState(state) {
      state.isBgVideo=!state.isBgVideo
      state.isBgImage=!state.isBgImage
    },
    turnWeb(state,url){
      window.open(url)
    },
    changeSider(state){
      state.isJianYue=!state.isJianYue
    },
    computeAppNum(state,num){
      state.appNum=num
    }
  },
  actions:{
  }
})
export default store