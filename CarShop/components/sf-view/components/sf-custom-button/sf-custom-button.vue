/**
 * 自定义按钮点击方法
 */
<template>
	<view :class="['sf-custom-button',shapeClass,boxBgClass]" @click="onClick" :style="[buttonStyle]">{{title}}</view>
</template>

<script>
	import props from './props.js'
	export default {
		'name': 'sf-custom-button',
		mixins:[props],
		computed:{
			// 形状类样式
			shapeClass() {
				switch (this.shape){
					case 'square':
						return 'shape-square'
					case 'circle':
						return 'shape-circle'
					default:
						return ''
				}
			},
			// 视图页面主题色
			viewBgClass() {
				return this.config.getDarkThemeViewClass(this.isDark)
			},
			// 主题背景颜色
			themeBgClass() {
				const themeType = this.config.getThemeType()
				return themeType + '-theme-bg-color'
			},
			// 按钮背景颜色
			boxBgClass() {
				return this.themeBgBool ?  this.themeBgClass : this.viewBgClass
			},
			// 透明度样式
			opacityStyle() {
				return this.themeBgBool ? this.config.getOpacityStyle() : {}
			},
			// 按钮样式
			buttonStyle() {
				let newItem = Object.assign(this.opacityStyle,this.customStyle)
				return {...newItem}
			}
		},
		methods:{
			onClick() {
				this.$emit('on-click')
			}
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';
	.sf-custom-button{
		color: $one-font-color;
		font-size: $lf-font-size-fifteen;
		font-weight: 500;
		width: 100%;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
	}
	.shape-square{
		border-radius: 10rpx;
	}
	.shape-circle {
		border-radius: 40rpx;
	}
</style>
