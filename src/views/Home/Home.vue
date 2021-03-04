<template>
  <div class="Home">
    <div class="home_logo">
      <img src="~assets/img/indexLogo.jpg" alt="" />
    </div>
    <div class="home-nav">
      <router-link to="/home">
        <el-button type="primary">教务处管理系统</el-button>
      </router-link>
      <router-link to="/login">
        <el-button type="primary">教师绩效签到考核系统</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style scoped>
.Home {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.home_logo {
  margin: 50px 270px;
}
.home-nav {
  padding-left: 28rem;
}
.el-button {
  margin: 20px;
}
</style>
