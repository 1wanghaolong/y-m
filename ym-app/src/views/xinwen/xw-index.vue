<template>
  <div class="xinwen">
    <search></search>
    <wenben></wenben>
    <navs></navs>
    <neirong></neirong>
  </div>
</template>
<script>
import search from "../xinwen/components/search";
import wenben from "../xinwen/components/wenben";
import navs from "../xinwen/components/navs";
import neirong from "../xinwen/components/neirong";
export default {
  components: {
    search,
    wenben,
    navs,
    neirong,
  },
};
</script>
<style scoped>
</style>