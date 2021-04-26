<template>
  <div class="y-m-zhishi">
    <div class="zs-nei">
      <p>接种知识</p>
    </div>
    <div class="item" v-for="i of 8" :key="i">
      <div class="title">
        <div class="title-xq">
          <span id="z-j">专家审核</span>
          <span class="xq"> 这个死亡率100%的传染病，夏天有开始活跃了</span>
        </div>
        <span class="f-w">17.4万家长读过</span>
      </div>
      <div class="img">
        <img
          src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.y-m-zhishi {
  width: 100%;
  margin-top: 0.54rem;
}
.zs-nei {
  display: flex;
  font-size: 0.54rem;
  font-weight: bold;
  margin-left: 0.2rem;
}
.item {
  margin-left: 0.2rem;
  height: 4.05rem;
  margin-top: 0.54rem;
  display: flex;
  justify-content: space-between;
}
.title {
  font-size: 0.32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.7rem;
  margin-top: 0.54rem;
  width: 5.4rem;
}
.title-xq {
  display: flex;
  flex-wrap: wrap;
}
.title-xq #z-j {
  margin-top: 0.54rem;
  background-color: #f1f1fd;
  width: 1.4rem;
  height: 0.54rem;
  color: #a2b6d7;
  display: flex;
  justify-content: center;
  align-items: center;
}
.xq {
  font-weight: bold;
}
.img img {
  width: 100%;
  height: 4.05rem;
}
.f-w {
  color: #9f9f9f;
}
</style>
    