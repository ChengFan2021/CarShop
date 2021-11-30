<template>
	<view :class="['lff-content',pageBgClass]" :style="{fontSize: getCurrentFont}">
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isDark:false,
			};
		},
		computed:{
			// 背景页面主题
			pageBgClass() {
				return this.config.getDarkThemePageClass(this.isDark)
			},
			// 字体大小
			getCurrentFont () {
				return this.$store.getters.getPageFontClass
			}
		},
		methods:{
			setPageStyle(){
				this.isDark = getApp().globalData.configInfo.isDark
				this.config.setDarkChangeStyle()
				this.config.setTabIconStyle(this)
				this.common.setNavTextWay(this,'首页')
			}
		},
		onShow() {
			this.setPageStyle()
		},
		onReady() {
			this.setPageStyle()
		},
		onUnload() {
			uni.$off('changeDark')
		},
	}
</script>

<style lang="scss">

</style>
