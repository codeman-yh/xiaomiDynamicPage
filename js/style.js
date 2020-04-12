window.onload = function () {

  /* 轮播图 */
  const swiper = document.getElementsByClassName("swiper")[0]

  const swiperImgList = document.getElementsByClassName("swiperImg")

  const prevBtn = document.getElementsByClassName("prev iconfont icon-left")[0]

  const nextBtn = document.getElementsByClassName("next iconfont icon-zuoyoujiantou")[0]

  const paginationBtn = document.getElementsByClassName("paginationBtn")
 

  /*显示一张图片，其他图片的透明度设为0 */
  var index = 0;
  function initImg () {
    for (let i=0; i<5; i++){
      swiperImgList[i].style.opacity = 0
      paginationBtn[i].style.background= "rgba(0,0,0,.4)"
      paginationBtn[i].style.borderColor= "hsla(0,0%,100%,.3)"
    }
    swiperImgList[index].style.opacity = 1
    paginationBtn[index].style.background= "hsla(0,0%,100%,.4)"
    paginationBtn[index].style.borderColor= "rgba(0,0,0,.4)"

  }
  /* 向前跳转 */
  var prevChangeImg = function () {
    index--
    index = (index<0) ? 4 : index
    initImg()
  }
  prevBtn.onclick = prevChangeImg

  /* 向后跳转 */
  var nextChangeImg = function () {
    index++
    index = (index>4) ? 0 : index
    initImg()
  }
  nextBtn.onclick = nextChangeImg
  /* 导航按钮跳转 */
  function paginationBind () {
    for (let i=0; i<5; i++){
      paginationBtn[i].onclick = function paginationTurn () {
      /*   paginationBtn[index].style.background= "rgba(0,0,0,.4)"
        paginationBtn[index].style.borderColor= "hsla(0,0%,100%,.3)" */
        index = i
      /*   paginationBtn[i].style.background= "hsla(0,0%,100%,.4)"
        paginationBtn[i].style.borderColor= "rgba(0,0,0,.4)" */
        initImg()
      }
    }
  } 
  paginationBind ()
  /* 轮播定时器 */
  var swiperInterval = setInterval(() => {
    nextChangeImg()
  }, 3000);

  swiper.onmouseover = function () {
    clearInterval(swiperInterval)
  }
  swiper.onmouseout = function () {
    swiperInterval = setInterval(() => {
      nextChangeImg()
    }, 3000);
  }

  /* 购物车滚动车切换 */
  const buyCar = document.querySelector('.buyCar')
  const loading = document.querySelector('.loading')
  const msg = document.querySelector('.msg')
  buyCar.onmouseenter = function () {
    buyCar.className = 'buyCar active'
    setTimeout(() => {
      loading.className = 'loading hide'
      msg.className = 'msg'
    }, 1500)
  }
  buyCar.onmouseleave = function () {
    buyCar.className = 'buyCar'
    loading.className = 'loading'
    msg.className = 'msg hide'
  }

  /* 导航搜索框点击 */
  const navSearch = document.querySelector('.navSearch')
  const navInput = document.querySelector('.navInput')
  const searchList = document.querySelector('.searchList')
  navInput.onfocus = function () {
    navSearch.className = 'navSearch active'
    searchList.className = 'searchList'
  }
  navInput.onblur = function () {
    navSearch.className = 'navSearch blur'
    searchList.className = 'searchList hide'
  }

  /* 导航条下拉 */
  const navMenu = document.querySelectorAll('.nav-menu')
  const menuItem = document.querySelectorAll('.navList li')
  /* 解决tab之间不会重复下拉 */
  for(var i=0; i<7; i++){
    menuItem[i].index = i
    menuItem[i].onmouseover = function () {
      for(var j=0; j<7; j++){
        navMenu[j].className = 'nav-menu hide'
      }
      navMenu[this.index].className = 'nav-menu active'
    }
    menuItem[i].onmouseout = function () {
      for(var j=0; j<7; j++){
        navMenu[j].className = 'nav-menu'
      }
    }
  }

  /* 导航条商品展开 */
  const listItem = document.querySelectorAll('.list-item')
  const categoryItem = document.querySelectorAll('.category-item')
  for(var i=0; i<10; i++){
    listItem[i].index = i
    listItem[i].onmouseover = function () {
      categoryItem[this.index].className = 'category-item'
    }
    listItem[i].onmouseout = function () {
      categoryItem[this.index].className = 'category-item hide'
    }
  }

  /* 回顶部设置 */
  const backTop = document.querySelector('.backTop')
  window.onscroll = function () {
     if(window.scrollY > 900){
    backTop.style.display = "block"  
    }else{
      backTop.style.display = "none"
    }
  }
  backTop.onclick = function () {
    window.scrollTo(0,0)
  }


   /* 显示二维码 */
   const download = document.querySelector('.download')
   download.onmouseover = function () {
     download.className = 'download active'
   }
   download.onmouseout = function () {
     download.className = 'download'
   }

   /* 工具栏显示二维码 */
   const saoyisao = document.querySelector('.saoyisao')
   const phoneApp = document.querySelector('.phoneApp')
   phoneApp.onmouseover = function () {
     saoyisao.className = "saoyisao active"
   }
   phoneApp.onmouseout = function () {
    saoyisao.className = "saoyisao"
  }

   /* 购物商品轮播手动切换 */
   const bottonPrev = document.querySelector('.xiaomishangou .icon-left')
   const bottonNext = document.querySelector('.xiaomishangou .icon-zuoyoujiantou')
   const categoryShow = document.querySelector('.xiaomishangou .categoryShow')
   var length = 0  
   bottonPrev.className = "iconfont icon-left active"
   bottonNext.onclick = function () {
    clearInterval(categoryShowInterval)
    bottonPrev.className = "iconfont icon-left"
    length -= 992
    if(length < -1984 || length === -1984){
      length = -1984
      categoryShow.style.transform = "translate3d(-1984px,0px,0px)"
      bottonNext.className = "iconfont icon-zuoyoujiantou active"
      return
    }
      categoryShow.style.transform = "translate3d("+ length + "px,0px,0px)"
   }
   bottonPrev.onclick = function () {
     clearInterval(categoryShowInterval)
    bottonNext.className = "iconfont icon-zuoyoujiantou"
    length += 992
    if(length === 0 || length > 0){
      length = 0
      bottonPrev.className = "iconfont icon-left active"
      categoryShow.style.transform = "translate3d(0px,0px,0px)"
      return
    }   
    categoryShow.style.transform = "translate3d("+ length + "px,0px,0px)"  
   } 
   /* 购物商品轮播自动切换 */
    var categoryShowInterval = setInterval(()=>{
      bottonPrev.className = "iconfont icon-left active"
      length -= 992
      bottonNext.className = "iconfont icon-zuoyoujiantou"
      if(length < 0){
        bottonPrev.className = "iconfont icon-left"
      }
      if(length === -1984) {
        length = 992
        categoryShow.style.transform = "translate3d(-1984px,0px,0px)" 
        bottonNext.className = "iconfont icon-zuoyoujiantou active"
        return
      }
      categoryShow.style.transform = "translate3d("+ length + "px,0px,0px)"      
   },1800) 

  /* tab切换 */
  function Tab (tablist, display){
    for(var i=0; i<tablist.length; i++){
      tablist[i].index = i
      tablist[i].onmouseover = function () {
        for(var j=0; j<tablist.length; j++) {
          tablist[j].className = ''
          display[j].className = 'goods-right hide'
        }
        tablist[this.index].className = 'active'
        display[this.index].className = 'goods-right'
      } 
    }
  }

  /* 家电tab */
   const jiadianTab = document.querySelectorAll('.box-tab-list.jiadian a')
   const jiadianDisplay = document.querySelectorAll('.middle.jiadian .goods-right')
   
   Tab(jiadianTab, jiadianDisplay)

   /* 智能tab切换 */
   const zhinengTab = document.querySelectorAll('.box-tab-list.zhineng a')
   const zhinengDisplay = document.querySelectorAll('.middle.zhineng .goods-right')

   Tab(zhinengTab, zhinengDisplay)
  
   /* 搭配tab切换 */
   const dapeiTab = document.querySelectorAll('.box-tab-list.dapei a')
   const dapeiDisplay = document.querySelectorAll('.middle.dapei .goods-right')

   Tab(dapeiTab, dapeiDisplay)

   /* 配件tab切换 */
   const peijianTab = document.querySelectorAll('.box-tab-list.peijian a')
   const peijianDisplay = document.querySelectorAll('.middle.peijian .goods-right')

   Tab(peijianTab, peijianDisplay)

   /* 周边tab切换 */
   const zhoubianTab = document.querySelectorAll('.box-tab-list.zhoubian a')
   const zhoubianDisplay = document.querySelectorAll('.middle.zhoubian .goods-right')

   Tab(zhoubianTab, zhoubianDisplay)

   /* 尾部微信下拉 */
   const weChatImg = document.querySelector('.contact img')
   const weChat =  document.querySelector('.wx')
   weChat.onmouseover = function () {
     weChatImg.style.opacity = "1"
   }
   weChat.onmouseout = function () {
     weChatImg.style.opacity = "0"
   }
} 