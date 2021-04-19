<template>
  <div class="xinwen">
    <search></search>
    <wenben></wenben>
    <nav></nav>
    <neirong></neirong>
  </div>
</template>
<script>
import search from "../xinwen/components/search";
import wenben from "../xinwen/components/wenben";
import nav from "../xinwen/components/nav";
import neirong from "../xinwen/components/neirong ";
export default {
  comments: {
    search,
    wenben,
    nav,
    neirong,
  },
};
</script>
<style scoped>
</style>