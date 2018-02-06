
<template>
<div class="main-menu">
    <div class="bars">
        <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="logo">
        <img src="/public/img/icon.png" alt="">
    </div>
    <div class="user-navig">
        <div class="un-bell">
            <i class="fa fa-bell-o" aria-hidden="true"></i>
        </div>
        <div class="un-avatar">
            <img src="/public/img/avatar.png" alt="">
        </div>
    </div>
</div>
</template>
 
<script>
export default {
  name: "MainMenu",
  data() {
    return {
      message: "I main menu"
    };
  }
};
</script>
 
<style scoped lang="scss">
@import "../../../scss/color.scss";
.main-menu {
  height: 55px;
}
.bars {
  font-size: 23px;
  margin-top: 16px;
  width: 25px;
  margin-right: 50px;
  color: $color-links;
  float: left;
  position: relative;
}
.logo {
  height: 36px;
  padding-top: 8px;
  float: left;
}
.user-navig {
  float: right;
  margin-top: 5px;
  .un-bell {
    float: left;
    height: 45px;
    width: 45px;
    font-size: 23px;
    text-align: center;
    line-height: 42px;
    border-radius: 100%;
    margin-right: 10px;
    color: $color-links;
    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
      transition-duration: 200ms;
      cursor: pointer;
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.05);
      transition-duration: 200ms;
    }
  }
  .un-avatar {
    float: left;
    height: 45px;
    width: 45px;
    img {
      height: 45px;
    }
  }
}
</style>