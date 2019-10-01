<!--
 * @Descripttion: 登录页面-账号密码登录
 * @Author: meijie
 * @Date: 2019-09-24 17:56:49
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-30 17:50:32
 -->
<template>
  <view class="login-page page">
    <!--标题-->
    <view class="login-title m-row-lg">
      <image class="title-logo va-m" mode="aspectFit" :src="require('@img/logo.png')"></image>
      <text class="m-row-base text-title va-m">账号登录</text>
    </view>
    <!--登录表单-->
    <view class="login-form m-row-lg">
      <form @submit="loginFormSubmit">
        <input class="input" name="phone" placeholder="手机号" />
        <input class="input" name="password" password placeholder="密码" />
        <view class="m-col-lg">
          <button type="primary" form-type="submit">登录</button>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    loginFormSubmit(e) {
      console.log(e);
    }
  }
}
</script>

<style lang="scss">
.login-page{
  .login-title{
    .title-logo{
      width: 60rpx;
      height: 60rpx;
    }
  }
  .login-form{
    margin-top: 100rpx;
    .input{
      margin-bottom: 100rpx;
      @include border(bottom);
      font-size: $uni-font-size-lg;
      padding: $uni-spacing-col-base 0;
    }
  }
}
</style>