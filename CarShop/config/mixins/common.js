// 全局公共样式混入
export default {
	computed: {
		// 背景页面主题
		sfPageBgClass() {
			return this.config.getDarkThemePageClass(this.sfIsDark)
		},
		// 字体大小
		sfCurrentFont() {
			return this.$store.getters.getPageFontClass
		},
		// 是否黑暗模式
		sfIsDark() {
			return getApp().globalData.configInfo.isDark
		},
		// 主题类型
		sfThemeType() {
			return this.sfIsDark ? 'dark' : this.config.getThemeType()
		},
		// 不含黑暗模式的主题样式
		sfNoDarkThemeType() {
			return this.config.getThemeType()
		},
		//主题颜色
		sfThemeColor() {
			return this.config.getThemeColor()
		},
		// 盒子背景颜色
		sfBoxBgClass() {
			return this.config.getThemeViewClass()
		},
		// 透明度样式
		sfOpacityStyle() {
			return this.config.getOpacityStyle()
		},
		// app配置信息
		sfAppInfos() {
			return this.$store.state.app.appInfos
		}
	}
}
