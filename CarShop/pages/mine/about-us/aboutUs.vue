<template>
	<view :class="['lff-content','lf-column-a-f',sfPageBgClass]" :style="{fontSize: sfCurrentFont}">
		<image :class="['logo-icon',sfNoDarkThemeType + '-theme-bg-color']" :style="[sfOpacityStyle]"></image>
		<text class="version-num">{{versionText}}</text>
		<view :class="['us-content-view',sfBoxBgClass]">
			<title-row-item v-for="(item,index) in list" :themeType="sfThemeType" :key="index" :title="item.title"
				:desp="item.desp" :arrowShow="item.arrow" :lineShow="item.hideLine ? false : true" @chooseClick="chooseWay"></title-row-item>
		</view>
		<view class="us-desp lf-column-a-f">
			<text>{{sfAppInfos.author}} </text>
			<text>{{sfAppInfos.company}}</text>
		</view>
	</view>
</template>

<script>
	import {getReplaceToString} from '@/utils/tools.js'
	import titleRowItem from '@/components/mine/title-row-item.vue'
	export default {
		components: {
			titleRowItem
		},
		data() {
			return {
				versionText: '',
				list: [{
						title: '联系电话',
						desp: '',
						arrow: false
					},
					{
						title: '作者简介',
						desp: '',
						arrow: true
					},
					{
						title: '意见反馈',
						desp: '',
						arrow: true
					},
					{
						title: '版本号',
						desp: '',
						arrow: true,
						hideLine: true
					}
				]
			};
		},
		methods: {
			// 点击某一列响应方法 title 为列表文字标识
			chooseWay(title) {
				uni.showToast({
					icon: 'none',
					title: '点击了' + title
				})
				switch (title) {
					case '客服电话':
						break;
					case '公司官网':
						break;
					case '版本号':
						break;
					default:
						break;
				}
			}
		},
		onLoad() {
			this.config.setDarkNavBackground()
		},
		onReady() {
			this.common.setNavTextWay(this, '关于我们')
			this.versionText = this.$t('版本号') + this.$store.state.user.version
			this.list[0].desp = getReplaceToString(this.sfAppInfos.phone,3,4) 
			
		},
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';

	.logo-icon {
		margin: 127rpx 0rpx 45rpx 0rpx;
		width: 126rpx;
		height: 126rpx;
		border-radius: 20rpx;
		background-color: $normal-theme-color;
	}

	.version-num {
		font-weight: 400;
		font-size: 28em;
		color: #818181;
	}

	.us-content-view {
		padding-bottom: 10rpx;
		width: calc(100% - 52rpx);
		margin: 70rpx 28rpx 50rpx 24rpx;
		background-color: #FFFFFF;
		border-radius: 10rpx;
	}

	.us-desp {
		position: absolute;
		bottom: 70rpx;
		color: #BBBBBB;
		font-size: 20em;
	}
</style>
