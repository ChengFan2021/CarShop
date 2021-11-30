<template>
	<view :class="['lff-content',pageBgClass]" :style="{fontSize: getCurrentFont}">
			<view :class="['lf-row-a-f','rows',viewBgClass]" v-for="(item,index) in list" :key="index" @click="chooseItem(item)">
				<div class="lf-row-a-f">
					<u-icon name="moments" :color="item.color" size="45"></u-icon>
					<text class="rows-text">{{item.title}}</text>
				</div>
				<u-icon v-if="themeType === item.themeType" name="checkmark" :color="item.color" size="40"></u-icon>
			</view>
		<u-toast ref="uToast" />
	</view>

</template>

<script>
	import themes from '@/utils/enums/theme.js'
	import {getThemeColor} from '@/utils/enums/theme.js'
	export default {
		data() {
			return {
				list: [],
				themeType: '',
			};
		},
		computed: {
			// 背景页面主题
			pageBgClass() {
				return this.config.getThemePageClass()
			},
			// 视图页面主题色
			viewBgClass() {
				return this.config.getThemeViewClass()
			},
			// 字体大小
			getCurrentFont () {
				return this.$store.getters.getPageFontClass
			}
		},
		methods: {
			chooseItem(item) {
				this.themeType = item.themeType
				getApp().globalData.configInfo.themeType = item.themeType
				getApp().globalData.configInfo.themeTitle = item.title
				this.config.saveConfigData()
				this.config.setDarkNavBackground()
			}
		},
		onLoad() {
			this.list = themes.themeData.filter(item => item.themeType != themes.themeEnum.dark)
			this.config.setDarkNavBackground()
			this.themeType = this.config.getThemeType()
		},
		onReady() {
			this.common.setNavTextWay(this, '主题')
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';
	
		.rows {
			padding: 0rpx 20rpx;
			margin-top: 5rpx;
			height: 85rpx;
			justify-content: space-between;

			&:last-child {
				border-bottom-width: 0;
			}

			&-text {
				margin-left: 20rpx;
				font-size: 28em;
				color: $two-font-color;
			}

			&-icon {
				width: 60rpx;
				height: 60rpx;
				color: $normal-theme-color;
			}
		}
	// }
</style>
