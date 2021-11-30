<template>
	<view class="content">
		<swiper class="guide-swiper" indicator-dots :indicator-color="normalColor"  :indicator-active-color="themeColor">
			<swiper-item class="guide-swiper-item lf-column-a-j-f" v-for="(guide,index) in guideData" :key="index">
				<u-button :custom-style="themeStyle" class="guide-swiper-item-topButton" :ripple="ripple" shape="circle"
					size="mini" @click="launchFlag">{{$t('跳过')}}</u-button>
				<view class="guide-swiper-item-title">{{guide.title}}</view>
				<image class="guide-swiper-item-image" :src="guide.imageUrl"></image>
				<view class="guide-swiper-item-desp">{{guide.desp}}</view>
				<u-button :custom-style="themeStyle" :ripple="ripple" shape="circle" size="medium" v-if="index === guideData.length -1"
					@click="launchFlag">{{$t('立即体验')}}</u-button>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import themes from '@/utils/enums/theme.js'
	export default {
		data() {
			return {
				ripple: false,
				guideData: [{
					imageUrl: '/static/images/guide/guide01.png',
					title: '引导页标题1',
					desp: '引导页内容1'
				}, {
					imageUrl: '/static/images/guide/guide02.png',
					title: '引导页标题2',
					desp: '引导页内容2'
				}, {
					imageUrl: '/static/images/guide/guide03.png',
					title: '引导页标题3',
					desp: '引导页内容3'
				}, {
					imageUrl: '/static/images/guide/guide04.png',
					title: '引导页标题4',
					desp: '引导页内容4'
				}],
			}
		},
		computed: {
			normalColor() {
				return themes.colors.TABBAR_COLOR
			},
			themeColor() {
				return this.config.getThemeColor()
			},
			themeStyle() {
				return {
					borderColor: this.themeColor,
					color: this.themeColor
				}
			}
		},
		methods: {
			launchFlag() {
				uni.switchTab({
					url: '../home/home'
				});
			}
		},
		onUnload() {
			getApp().globalData.configInfo.isFirst = false
			this.config.saveConfigData()
		}
	}
</script>
<style lang="scss">
	.guide-swiper {
		width: 100%;
		height: 90vh;

		// background-color: #FF6EC7;
		.guide-swiper-item {
			&-topButton {
				position: absolute;
				/* #ifndef H5 */
				top: 180rpx;
				/* #endif */
				/* #ifdef H5 */
				top: 50rpx;
				/* #endif */
				right: 40rpx;
			}

			&-title {
				font-size: 48rpx;
				font-weight: bold;
				color: #000000;
			}

			&-image {
				margin: 50rpx 0rpx;
			}

			&-desp {
				font-size: 32rpx;
				color: #454748;
				margin-bottom: 40rpx;
			}
		}
	}
</style>
