<template>
  <div class="daohang">
    <div class="daohangkuang">
      <div v-for="i of 8" :key="i" id="d-hdiv">
        <img
          src="https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1"
          alt=""
        />
        <span>天猫</span>
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
}
#d-hdiv img {
  height: 2rem;
  width: 2rem;
}
#d-hdiv span{
  line-height: 0.75rem;
  color: rgb(102, 102, 102);
  margin-top: 0.02rem;
  font-size 0.2rem
}
</style>

    