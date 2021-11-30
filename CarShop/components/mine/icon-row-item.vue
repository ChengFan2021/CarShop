<!-- 带图标的配置项组件 -->
<template>
	<view :class="themeType + '-box-bg-color'" @click="clickWay">
		<view class="user-list-item lf-row-a-f" :style="{'padding-right':arrowShow ? '0rpx' : '44rpx'}">
			<view class="lf-row-a-f">
				<view v-if="iconType" style="margin-right: 20rpx;">
					<u-icon v-if="iconType === '1'" :name="iconName" :color="iconColor"  :size="size"></u-icon>
					<image v-if="iconType === '2'" :style="iconStyle" :src="iconUrl"></image>
				</view>
				<text class="user-list-item-title">{{$t(title)}}</text>
			</view>
			<u-switch style="margin-right: 20rpx;" :active-color="themeColor" v-if="switchShow" v-model="checked" @change="switchWay"></u-switch>
			<view v-if="rightShow" class="user-list-item-right lf-row-a-f">
				<text class="user-list-item-right-desp">{{desp}}</text>
				<u-icon v-if="arrowShow" class="user-list-item-right-arrow" name="arrow-right"></u-icon>
			</view>
		</view>
		<view v-if="lineShow" class="user-list-line" :class="lineName ? lineName : lineClass"></view>
	</view>
</template>

<script>
	export default {
		name:'icon-row-item',
		props:{
			title:{
				type:String,default:''
			},//标题
			size:{
				type:[String,Number],default:'45'
			},//图标大小 单位rpx
			iconType:{
				type:String,default:''
			},//图标的类型 值为空 则不显示图标 1 uicon 2 image
			iconName:{
				type:String,default:''
			},//icon的名
			iconUrl:{
				type:String,default:''
			},//图标的地址
			switchShow:{
				type:Boolean,default:false
			},//是否显示开关
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
			lineName:{
				type:String,default:''
			}//分割线类名
		},
		data(){
			return {
				themeType: '',
				isDark: false,
				themeColor: ''
			}
		},
		computed:{
			// 图片的大小
			imageStyle(){
				return {width: this.size + 'rpx',height:this.size + 'rpx'}
			},
			// 图标的颜色
		    iconColor(){
				// return this.config.getNewThemeColor()
				return '#818181'
			},
			// 分割线的类名
			lineClass() {
				return this.isDark ? 'dark-box-line-color' :　'box-line-color'
			}
		},
		
		methods:{
			clickWay(){
				this.$emit('chooseClick',this.title)
			},
			switchWay(bool){
				this.$emit('switchChange',bool)
			},
			setViewStyle () {
				this.isDark = getApp().globalData.configInfo.isDark
				this.themeType = this.config.getDarkThemeType()
				this.themeColor = this.config.getThemeColor()
			}
		},
		created() {
			this.setViewStyle()
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
			padding-left: 20rpx;
			
			&-title {
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
				font-size: 30em;
				color: $three-line-color;
			}
		}
		&-line{
			margin: 0rpx 20rpx 0rpx 18rpx;
			height: 1rpx;
		}
	}
</style>
