<template>
	<view :class="['lff-content',sfPageBgClass, sfThemeType + '-theme-gradient-bg-color']"
		:style="{fontSize: sfCurrentFont}">
		<view class="login-register">
			<view v-if="isLogin" class="login-register-box lf-column-a-f" :class="sfBoxBgClass">
				<view class="login-box lf-column-a-j-f" :class="sfPageBgClass">
					<u-icon name="android-fill" :color="sfThemeColor" size="60"></u-icon>
					<view class="login-title" :style="{color: sfThemeColor}">{{sfAppInfos.name}}</view>
				</view>
				<view class="lf-row-f login-register-tips" :style="{color: sfThemeColor}">
					<view @click="onLoginRegisterChange(false)">{{$t('无账户，立即注册')}}</view>
				</view>
				<view style="width: 100%;">
					<sf-input :boxBgClass="sfPageBgClass" :placeholder="$t('请输入账户')"></sf-input>
					<sf-input :boxBgClass="sfPageBgClass" :placeholder="$t('请输入密码')"></sf-input>
					<sf-custom-button :title="$t('登录')" themeBgBool
						:customStyle="{color: '#FFFFFF',margin: '20rpx 0rpx'}" @on-click="onLogin"></sf-custom-button>
					<view class="login-box-bottom lf-row-a-f" :style="[bottomStyle]">
							<view class="lf-row-a-f">
								<sf-checkbox v-model="rememberChecked" :activeColor="sfThemeColor" iconSize="24" size="24"
									active-color="red">
								</sf-checkbox>
								<view :style="{color: sfThemeColor,marginLeft: '10rpx'}">{{$t('记住密码')}}？</view>
							</view>
						<view @click="onForgetPassword">{{$t('忘记密码')}}？</view>
					</view>
				</view>
			</view>
			<view v-else class="login-register-box lf-column-a-f" :class="sfBoxBgClass">
				<view class="login-box lf-column-a-j-f" :class="sfPageBgClass">
					<u-icon name="android-fill" :color="sfThemeColor" size="60"></u-icon>
					<view class="login-title" :style="{color: sfThemeColor}">{{sfAppInfos.name}}</view>
				</view>
				<view style="width: 100%;">
					<sf-input :boxBgClass="sfPageBgClass" :placeholder="$t('请输入账户')"></sf-input>
					<sf-input :boxBgClass="sfPageBgClass" :placeholder="$t('请输入密码')"></sf-input>
					<sf-input :boxBgClass="sfPageBgClass" :placeholder="$t('请再次输入密码')"></sf-input>
					<sf-custom-button :title="$t('注册')" themeBgBool :customStyle="{color: '#FFFFFF',margin: '20rpx 0rpx'}"
						@on-click="onRegister"></sf-custom-button>
					<view class="lf-row-f login-register-tips" :style="{color: sfThemeColor}">
						<view @click="onLoginRegisterChange(true)">{{$t('有账户，前往登录')}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="other-box lf-column-a-j-f" :style="{color: sfThemeColor}">
			<sf-divider style="margin: 60rpx 0rpx;" bg-color="" :color="sfThemeColor" :borderColor="sfThemeColor">
				{{$t(otherTips)}}
			</sf-divider>
			<view class="other-login-box lf-row-a-f">
				<view class="login-way-box lf-column-a-j-f" :class="sfBoxBgClass" v-for="item in otherLoginData"
					:key="item.id" @click="onOtherLogin">
					<u-icon :name="item.name" :color="sfThemeColor" size="50"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import {
		getThemeEnumTypeColor
	} from '@/utils/enums/theme.js'
	export default {
		data() {
			return {
				isLogin: true,
				rememberChecked: false,
				loginParams: {
					account: '',
					password: ''
				},
				registerParams: {
					account: '',
					password: '',
					againPassword: ''
				},
				otherLoginData: [{
					id: '1',
					name: 'weixin-fill'
				}, {
					id: '2',
					name: 'qq-fill'
				}, {
					id: '3',
					name: 'weibo'
				}]
			};
		},
		computed: {
			otherTips() {
				return '选择第三方' + (this.isLogin ? '登录' : '注册')
			},
			// 底部样式
			bottomStyle() {
				return Object.assign({
					color: this.sfThemeColor
				}, this.sfOpacityStyle)
			}
		},
		methods: {
			// 登录或者注册切换
			onLoginRegisterChange(bool) {
				this.isLogin = bool
			},
			// 登录
			onLogin() {
				uni.switchTab({
					url: '../mine/mine'
				})
			},
			// 注册
			onRegister() {

			},
			// 第三方登录
			onOtherLogin() {

			},
			// 忘记密码
			onForgetPassword() {
				uni.navigateTo({
					url: '../forget-password/forgetPassword'
				})
			},
			setPageStyle() {
				this.config.setDarkChangeStyle()
			}
		},
		onLoad() {
			this.setPageStyle()
		},
		onReady() {
			this.setPageStyle()
		}
	}
</script>

<style lang="scss">
	.login-register {
		padding-top: 120rpx;
		width: calc(100% - 80rpx);
		margin: 20rpx 40rpx;

		&-box {
			margin-top: 60rpx;
			width: 100%;
			padding: 30rpx 40rpx;
			border-radius: 20rpx;

			.login-box {
				width: 120rpx;
				height: 120rpx;
				border-radius: 10rpx;
				margin-bottom: 50rpx;
				.login-title {
					width: 100%;
					height: 30rpx;
					line-height: 30rpx;
					font-size: 20rpx;
					text-align: center;
				}
			}
			.login-register-tips {
				width: 100%;
				height: 30rpx;
				line-height: 30rpx;
				margin: 10rpx;
				font-size: 24em;
				justify-content: flex-end;
			}
			.login-box-bottom {
				width: 100%;
				font-size: 24em;
				justify-content: space-between;
			}
		}
	}
	.other-box {
		width: 100%;
		.other-login-box {
			width: calc(100% - 200rpx);
			justify-content: space-around;
			.login-way-box {
				width: 90rpx;
				height: 90rpx;
				border-radius: 45rpx;
			}
		}
	}
</style>
