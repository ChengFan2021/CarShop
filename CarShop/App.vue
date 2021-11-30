<script>
	export default {
		globalData: {
			configInfo: {
				isFirst: true, //是否第一次打开软件（引导页）
				lang: 'auto', //选择语言
				languageTitle: '跟随系统',
				themeType: 'normal', //主题类型
				themeTitle: '主题1',
				isDark: false, //暗夜模式
				navTextColor: 'white',//状态栏字体颜色 仅支持 white black
				fontSize: 24
			},//个性化配置
			systemInfo: {
				
			}//系统数据
			
		},
		onLaunch: function() {
			this.globalData.systemInfo = uni.getSystemInfoSync()// 获取系统信息
			const configInfo = uni.getStorageSync('configInfo')
			let setLang = this.globalData.systemInfo.language
			if (configInfo) {
				this.globalData.configInfo = configInfo
				this.$store.commit('setGlobalFontSize', this.globalData.configInfo.fontSize)
			}
		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	page {
		width: 100%;
		height: 100%;
		background-color: #f8f9fb;
	}

	@import "uview-ui/index.scss";
	@import "index.scss";
	@import "~@/config/style/theme/theme_skin.scss";

	.lff-content {
		width: 100%;
		padding-top: 5rpx;
		min-height: 100vh;
		background-color: #f8f9fb;
	}
</style>
