<!-- 我的页面列表项组件 -->

<template>
	<view :style="{marginBottom: bottomHeight + 'rpx'}" :class="[viewBgClass]" @click="clickWay">
		<view class="user-list-item lf-row-a-f" :style="{'padding-right':arrowShow ? '0rpx' : '44rpx'}">
			<text class="user-list-item-title">{{$t(title)}}</text>
			<u-switch style="margin-right: 20rpx;" :active-color="themeColor" v-if="extendType=== 'switch' " v-model="switchBool" @change="onSwitchChange"></u-switch>
			<u-number-box :disabled-input="true" style="margin-right: 20rpx;" color="#ffffff" :bg-color="themeColor" :min="10" :step="2" :max="40" v-model="sizeNumer" v-if="extendType=== 'numberBox' " @change="onNumberBoxChange"></u-number-box>
			<view v-if="rightShow" class="user-list-item-right lf-row-a-f">
				<text class="user-list-item-right-desp">{{desp}}</text>
				<u-icon v-if="arrowShow" class="user-list-item-right-arrow" name="arrow-right"></u-icon>
			</view>
		</view>
		<view v-if="lineShow" class="user-list-line" :class="lineClass"></view>
	</view>
</template>

<script>
	// import themes from '@/utils/enums/theme.js'
	export default {
		name:'title-row-item',
		props:{
			themeType:{
				type:String,default:''
			},
			title:{
				type:String,default:''
			},//标题
			switchShow:{
				type:Boolean,default:false
			},//是否显示开关
			extendType: {
				type:String,default:''
			},// switch 开关 numberBox 步进器
			rightShow:{
				type:Boolean,default:true
			},//是否显示右侧视图
			desp:{
			  type:String,default:''
			},//描述
			arrowShow:{
				type:Boolean,default:true
			},//箭头是否显示
			lineShow:{
				type:Boolean,default:true
				},//分割线是否显示
			viewBgClass:{
				type:String,default:''
			},//视图背景颜色
			bottomHeight: {
				type:String,default:'0'
			}
		},
		data(){
			return {
				switchBool: false,
				sizeNumer: 10,
				themeColor: '',
				isDark: false
			}
		},
		computed:{
			// 分割线的类名
			lineClass() {
				return this.isDark ? 'dark-box-line-color' :　'box-line-color'
			}
		},
		methods:{
			clickWay(){
				this.$emit('chooseClick',this.title)
			},
			onSwitchChange(bool){
				this.$emit('switchChange',bool)
			},
			onNumberBoxChange(e) {
				getApp().globalData.configInfo.fontSize = e.value
				this.config.saveConfigData()
				this.$store.commit('setGlobalFontSize', e.value)
			},
			setConfigData() {
				this.themeColor = this.config.getThemeColor()
				this.isDark = getApp().globalData.configInfo.isDark
			}
		},
		created() {
			this.setConfigData()
			this.switchBool = getApp().globalData.configInfo.isDark
			this.sizeNumer = getApp().globalData.configInfo.fontSize
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';
	.user-list {
		&-item {
			height: 98rpx;
			justify-content: space-between;
			font-weight: 400;
			
			&-title {
				margin-left: 44rpx;
				font-size: 28em;
				color: $one-font-color;
			}
	
			&-right-desp {
				font-size: 24em;
				color: $three-line-color;
			}
	
			&-right-arrow {
				width: 30rpx;
				height: 30rpx;
				margin: 20rpx;
				color: $three-line-color;
			}
		}
		&-line{
			margin: 0rpx 20rpx 0rpx 18rpx;
			height: 1rpx;
		}
	}
</style>
