<!--
 * @Descripttion: 首页
 * @Author: meijie
 * @Date: 2019-09-19 22:10:32
 * @LastEditors: meijie
 * @LastEditTime: 2019-09-25 11:14:18
 -->
<template>
	<view class="content">
		<image @click="testClick" class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			uni.navigateTo({
				url: '/pages/login/login'
			})
		},
		methods: {
			testClick () {
				uni.request({
					method: 'POST',
					url: '/resume/api/v1/login',
					data: {
						name: 'meijie',
						password: '1234567',
					}
				}).then((res) => {
					console.log(res)
				}).catch((err) => {
					console.log(err)
				})
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
