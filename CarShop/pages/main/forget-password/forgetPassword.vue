<template>
	<view :class="['lff-content',sfPageBgClass, sfThemeType + '-theme-gradient-bg-color']"
		:style="{fontSize: sfCurrentFont}">
		<view class="login-register">
			<view class="login-register-box lf-column-a-f" :class="sfBoxBgClass">
				<view class="login-box lf-column-a-j-f" :class="sfPageBgClass">
					<u-icon name="android-fill" :color="sfThemeColor" size="60"></u-icon>
					<view class="login-title" :style="{color: sfThemeColor}">{{sfAppInfos.name}}</view>
				</view>
				<view style="width: 100%;">
					<sf-input :boxBgClass="sfPageBgClass" :placeholder="$t('请输入账户')"></sf-input>
					<sf-input :boxBgClass="sfPageBgClass" :placeholder="$t('请输入密码')"></sf-input>
					<sf-input :boxBgClass="sfPageBgClass" :placeholder="$t('请再次输入密码')"></sf-input>
					<sf-custom-button :title="$t('重置')" themeBgBool
						:customStyle="{color: '#FFFFFF',margin: '25rpx 0rpx'}" @on-click="onReset"></sf-custom-button>
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
				resetParams: {
					account: '',
					password: '',
					againPassword: ''
				}
			};
		},
		methods: {
			// 重置
			onReset() {

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
				margin: 10rpx;
				justify-content: flex-end;
			}

			.login-box-bottom {
				width: 100%;
				font-size: 24rpx;
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
