<template>
	<view :class="['lff-content',pageBgClass]" :style="{fontSize: getCurrentFont}">
		<title-row-item ref="titleRowItemRef" :themeType="themeType" v-for="(item,index) in list" :key="index"
			:title="item.title" :desp="item.desp" :extendType="item.extendType" 
			:viewBgClass="viewBgClass" :rightShow="item.arrow" @chooseClick="chooseWay" @switchChange="switchChangeWay">
		</title-row-item>
	</view>
</template>

<script>
	import titleRowItem from '@/components/mine/title-row-item.vue'
	export default {
		components: {
			titleRowItem
		},
		data() {
			return {
				isDark: false,
				list: [{
						title: '夜间模式',
						desp: '',
						arrow: false,
						extendType: 'switch'
					},
					{
						title: '多语言',
						desp: '',
						arrow: true
					},
					{
						title: '主题',
						desp: '主题1',
						arrow: true
					},
					{
						title: '字体大小',
						'desp': '',
						'arrow': false,
						extendType: 'numberBox'
					}
				]
			};
		},
		computed: {
			themeType() {
				return this.config.getThemeType(this.isDark)
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
		},
		methods: {
			// 点击某一列响应方法 title 为列表文字标识
			chooseWay(title) {
				switch (title) {
					case '多语言':
						uni.navigateTo({
							url: '../language/language'
						})
						break;
					case '主题':
						uni.navigateTo({
							url: '../theme/theme'
						})
						break;
					default:
						break;
				}
			},
			switchChangeWay(bool) {
				this.isDark = bool
				getApp().globalData.configInfo.isDark = bool
				this.config.setDarkChangeStyle()
				this.config.saveConfigData()
				this.$refs.titleRowItemRef.forEach(item => {
					item.setConfigData()
				})
				uni.$emit('darkChange')
			}
		},
		onLoad() {
			this.isDark = getApp().globalData.configInfo.isDark
			this.config.setDarkNavBackground()
		},
		onShow() {
			this.config.setDarkChangeStyle()
			if (this.$refs.titleRowItemRef) {
				this.$refs.titleRowItemRef.forEach(item => {
					if ( ['夜间模式','字体大小'].includes(item.title)) {
						item.setConfigData()
					}
				})
			}
			this.list[2].desp = getApp().globalData.configInfo.themeTitle
		},
		onReady() {
			this.common.setNavTextWay(this, '设置')
		}
	}
</script>

<style lang="scss">

</style>
