<template>
	<view  :style="{fontSize: getCurrentFont}">
		<image class="start-content " src="/static/images/guide/transition01.png"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			// 配置信息
			configInfo () {
				return getApp().globalData.configInfo
			},
			// 字体大小
			getCurrentFont () {
				return this.$store.getters.getPageFontClass
			}
		},
		onLoad() {
			let setLang = getApp().globalData.systemInfo.language
			if (getApp().globalData.configInfo.lang !== 'auto') {
				setLang = getApp().globalData.configInfo.lang
				this.$i18n.locale = setLang	
			}　
			// console.log(setLang)
			
		},
		onReady() {
			setTimeout(() => {
				if (this.configInfo.isFirst) {
					uni.navigateTo({
						url:'../guide/guide'
					})
				}else {
					uni.switchTab({
						url:'../home/home'
					})
				}
			},1500)
		},
	};
</script>

<style lang="scss">
	.start-content{
		width: 100%;
		height: 100vh;
	}
</style>
