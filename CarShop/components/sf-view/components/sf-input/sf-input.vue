<!--用户或手机号输入组件 -->
<template>
	<view class="sf-box lf-column-a-j-f">
		<view class="u-input__content__prefix-icon" v-if="prefixIcon || $slots.prefix">
			<slot name="prefix">
				<u-icon :name="prefixIcon" size="18" :customStyle="prefixIconStyle"></u-icon>
			</slot>
		</view>
		<view class="sf-input-box lf-row-f" :class="[boxBgClass,shapeClass]">
			<input class="sf-input" :value="value" @input="inputChange" :type="keyType" :placeholder="placeholder"
				:placeholder-style="'color:' + placeholderColor" />
		</view>
		<view></view>
	</view>
</template>

<script>
	import props from './props.js'
	export default {
		name: 'sf-input',
		mixins: [props],
		data() {
			return {}
		},
		computed: {
			// 盒子布局形状
			shapeClass() {
				switch (this.shape) {
					case 'square':
						return 'sf-input-box_shape-square'
					case 'circle':
						return 'sf-input-box_shape-circle'
					default:
						return ''
				}
			}
		},
		methods: {
			inputChange(e) {
				let valueStr = e.detail.value
				this.$emit('input', valueStr);
			}
		}
	}
</script>

<style lang="scss">
	@import '~@/config/style/config.scss';

	.sf-box {
		width: 100%;
		margin: 10rpx 0rpx;

		.sf-input-box {
			width: 100%;
			padding: 0rpx 20rpx;
			.sf-input {
				width: 100%;
				font-size: 24em;
				height: 60rpx;
				line-height: 60rpx;
			}

			&_shape-square {
				border-radius: 10rpx;
			}

			&_shape-circle {
				border-radius: 30rpx;
			}
		}

		.sf-tips {
			margin-top: 10rpx;
			width: 100%;
			color: $tips-color;
		}
	}
</style>
