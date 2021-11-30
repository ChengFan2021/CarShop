<template>
	<view :class="['lff-content',pageBgClass]" :style="{fontSize: getCurrentFont}">

	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		computed: {
			themeType() {
				return this.config.getDarkThemeType()
			},
			// 背景页面主题
			pageBgClass() {
				return this.config.getThemePageClass()
			},
			// 字体大小
			getCurrentFont () {
				return this.$store.getters.getPageFontClass
			}
		},
		onLoad() {
			this.config.setDarkNavBackground()
		},
		onReady() {
			this.common.setNavTextWay(this, '浏览记录')
		},
	}
</script>

<style lang="scss">

</style>
