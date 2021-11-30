<template>
	<view :class="['lff-content',pageBgClass]" :style="{fontSize: getCurrentFont}">
			<view :class="['lf-row-a-f','rows',viewBgClass]" v-for="(item,index) in list" :key="index" @click="chooseItem(item)">
				<text class="rows-text">{{item.title}}</text>
				<u-icon v-if="lang === item.lang" class="rows-icon" name="checkmark" size="40"></u-icon>
			</view>
		<u-toast ref="uToast" />
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				list:[{title:'跟随系统',lang:'auto',disabled:false},
				{title:'简体中文',lang:'zh-CN',disabled:false},
				{title:'English',lang:'en-US',disabled:false},
				{title:'繁体中文（台湾）',disabled:true},
				{title:'繁体中文（香港）',disabled:true}],
				lang:''
			};
		},
		onLoad() {
			this.config.setDarkNavBackground()
			this.common.setNavTextWay(this,'多语言')
			this.lang = getApp().globalData.configInfo.lang
		},
		computed:{
			themeType(){
				return this.config.getThemeType()
			},
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
		methods:{
			chooseItem(newItem){
				if(!newItem.disabled){
					this.lang = newItem.lang	
					const setLang = newItem.lang === 'auto' ? getApp().globalData.systemInfo.language : newItem.lang
					this.$i18n.locale = setLang
					getApp().globalData.configInfo.lang = newItem.lang
					getApp().globalData.configInfo.languageTitle = newItem.title
					this.config.saveConfigData()
					this.common.setNavTextWay(this,'多语言');
				}else{
					this.common.toastWarningWay('该语言暂不支持', this);
				}
			}
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';
		.rows{
			padding: 0rpx 20rpx 10rpx 20rpx;
			height: 85rpx;
			margin-bottom: 2rpx;
			justify-content: space-between;
			&:last-child{
				border-bottom-width: 0;
			}
			&-text{
				margin-left: 20rpx;
				font-size: 28em;
				color: $two-font-color;
			}
			&-icon{
				width: 60rpx;
				height: 60rpx;
				color: $normal-theme-color;
			}
		}
</style>
