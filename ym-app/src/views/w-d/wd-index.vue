<template>
  <div class="wode">
    <navw></navw>
    <user></user>
    <wenben></wenben>
    <dibudaohang></dibudaohang>
  </div>
</template>
<script>
import user from "../w-d/components/user";
import navw from "../w-d/components/nav-w";
import wenben from "../w-d/components/wenben";
import dibudaohang from "../../components/dingbudaohang/daohang";
export default {
  components: {
    user,
    navw,
    wenben,
    dibudaohang
  },
};
</script>
<style scoped>
</style>