<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-04-28 23:03:31
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-05-04 14:10:10
-->
<template>
  <div class="daohang">
    <div class="daohangkuang">
      <div id="icon">
        <router-link
          src="img\x-g-img\1.jpg"
          alt=""
          tag="img"
          to=""
        ></router-link>
        <span style="margin-top: 0.2rem">疫苗库存</span>
      </div>
      <div id="icon">
        <router-link
          src="img\x-g-img\2.jpg"
          alt=""
          tag="img"
          to="/mztongzhi"
        ></router-link>
        <span style="margin-top: 0.2rem">门诊通知</span>
      </div>
      <div id="icon">
        <router-link
          src="img\x-g-img\3.jpg"
          alt=""
          tag="img"
          to="/jiezhongzixun"
        ></router-link>
        <span style="margin-top: 0.2rem">接种咨询</span>
      </div>
      <div id="icon">
        <router-link
          src="img\x-g-img\4.jpg"
          alt=""
          tag="img"
          to=""
        ></router-link>
        <span style="margin-top: 0.2rem">疫苗百科</span>
      </div>
      <div id="d-hdiv">
        <router-link tag="img" src="img\x-g-img\x-g.jpg" alt="" to="/xg" />
        <span>新冠预约</span>
      </div>
      <div id="icon">
        <router-link
          src="img\x-g-img\5.jpg"
          alt=""
          tag="img"
          to="/jiezhongcankao"
        ></router-link>
        <span style="margin-top: 0.2rem">接种参考</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="stylus" scoped>
.daohang {
  width: 100%;
}

.daohangkuang {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  margin: 0 auto;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  border: none;
}

#d-hdiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.3rem;
}

#icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.3rem;
  font-size: 0.35rem;
   color: rgb(102, 102, 102);
}

#icon img {
  height: 1.25rem;
  width: 1.3rem;
  background-color: #87cefa;
  border-radius: 50%;
  color: #fff;
}

#d-hdiv img {
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;
}

#d-hdiv span {
  line-height: 0.75rem;
  color: rgb(102, 102, 102);
  margin-top: 0.02rem;
  font-size: 0.35rem;
}
</style>

    