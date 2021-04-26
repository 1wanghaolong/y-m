<template>
  <div class="daohang">
    <div class="daohangkuang">
      <div v-for="i of 7" :key="i" id="d-hdiv">
        <router-link tag="img" src="img\x-g-img\x-g.jpg" alt="" to="/xg" />
        <span>疫苗</span>
      </div>
      <div id="d-hdiv">
        <router-link tag="img" src="img\x-g-img\d-a.jpg" alt="" to="/xg" />
        <span>成人档案</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.daohangkuang {
  display: flex;
  flex-wrap: wrap;
}

#d-hdiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.2rem 0.2rem;
}

#d-hdiv img {
  height: 1.25rem;
  width: 1.25rem;
}

#d-hdiv span {
  line-height: 0.75rem;
  color: rgb(102, 102, 102);
  margin-top: 0.02rem;
  font-size: 0.35rem;
  font-family: fangsong;
}
</style>

    