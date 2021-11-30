<template>
	<view :class="['lff-content',pageBgClass]" :style="{fontSize: getCurrentFont}">
		<view class="user-content-view">
			<view :class="['user-top', 'lf-column-a-f',themeType + '-theme-bg-color']"
				:style="{opacity: isDark ? 0.75 : 1.0}">
				<image class="user-top-icon" src="/static/images/mine/head_portrait.png"></image>
				<text class="user-top-text">{{name}}</text>
				<image class="dark-image" :src="darkImgUrl" @click="changeDarkWay"></image>
			</view>
			<view :class="['user-row-content',viewBgClass]">
				<icon-row-item ref="rowItemRef" iconType="1" :iconName="item.iconName" v-for="(item,index) in list"
					:key="index" :title="item.title" :desp="item.desp" :lineName="lineClass" @chooseClick="chooseWay"
					:lineShow="item.hideLine ? false : true"></icon-row-item>
			</view>
			<!-- shape="circle" -->
			<sf-custom-button :isDark="isDark" :title="$t('退出登录')" :customStyle="{'margin-top': '60rpx'}" @on-click="onLogOut"></sf-custom-button>
		</view>
	</view>
	</view>
</template>

<script>
	import iconRowItem from '@/components/mine/icon-row-item.vue'
	export default {
		components: {
			iconRowItem
		},
		data() {
			return {
				themeType: '',
				name: '',
				isDark: false,
				list: [{
						iconName: 'clock',
						title: '浏览记录',
						desp: ''
					}, {
						iconName: 'heart',
						title: '我的收藏',
						desp: ''
					}, {
						iconName: 'setting',
						title: '设置',
						desp: ''
					},
					{
						iconName: 'account',
						title: '关于我们',
						desp: '',
						hideLine: true
					}
				]
			};
		},
		computed: {
			darkImgUrl() {
				return this.isDark ? '/static/images/mine/white_evening.png' : '/static/images/mine/white_day.png'
			},
			// 背景页面主题
			pageBgClass() {
				return this.config.getDarkThemePageClass(this.isDark)
			},
			// 视图页面主题色
			viewBgClass() {
				return this.config.getDarkThemeViewClass(this.isDark)
			},
			// 字体大小
			getCurrentFont () {
				return this.$store.getters.getPageFontClass
			},
			// 分割线的类名
			lineClass() {
				return this.isDark ? 'dark-box-line-color' :　'box-line-color'
			}
		},

		methods: {
			// 点击某一列响应方法 title 为列表文字标识
			chooseWay(title) {
				switch (title) {
					case '浏览记录':
						uni.navigateTo({
							url: '../../mine/browsing-history/browsingHistory'
						})
						break;
					case '我的收藏':
						uni.navigateTo({
							url: '../../mine/my-collection/myCollection'
						})
						break;
					case '设置':
						uni.navigateTo({
							url: '../../mine/setting/setting'
						})
						break;
					case '关于我们':
						uni.navigateTo({
							url: '../../mine/about-us/aboutUs'
						})
						break;
					default:

						break;
				}
			},
			changeDarkWay() {
				this.isDark = !this.isDark
				getApp().globalData.configInfo.isDark = this.isDark
				this.setPageStyle()
				this.$refs.rowItemRef.forEach(item => {
					item.setViewStyle()
				})
				this.config.saveConfigData()
			},
			// 设置页面样式
			setPageStyle() {
				this.themeType = this.config.getThemeType()
				this.isDark = getApp().globalData.configInfo.isDark
				this.config.setDarkChangeStyle()
				this.config.setTabIconStyle(this)
				if (this.$refs.rowItemRef) {
					this.$refs.rowItemRef.forEach(item => {
						item.setViewStyle()
					})
				}
			},
			// 退出登录
			onLogOut() {
				console.log(123123123)
				uni.redirectTo({
					url:'../login/login'
				})
			}
		},
		onLoad() {
			this.setPageStyle()
		},
		onShow() {
			this.list[3].desp = this.$t('版本号') + this.$store.state.user.version
			this.common.setNavTextWay(this, '我的')
			this.setPageStyle()
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';

	.user-content-view {
		width: calc(100% - 50rpx);
		margin: 0 25rpx;
		padding: 100rpx 0rpx;
		border-radius: 10rpx;

		.user-top {
			position: relative;
			height: 278rpx;
			border-radius: 10rpx 10rpx 0rpx 0rpx;

			.dark-image {
				position: absolute;
				top: 20rpx;
				right: 20rpx;
				width: 60rpx;
				height: 60rpx;
			}

			&-icon {
				margin-top: -49rpx;
				width: 140rpx;
				height: 140rpx;
				margin-bottom: 20rpx;
			}

			&-text {
				font-weight: 400;
				font-size: 28em;
				color: #FFFFFF;
			}
		}
	}

	.user-row-content {
		padding-bottom: 10rpx;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
	}
</style>
