export default {
	props: {
		title: {
			type: String,
			default: ''
		},
		// 按钮形状  square 正方形  circle 圆形
		shape: {
			type: String,
			default: 'square'
		},
		// 字体颜色
		color: {
			type: String,
			default: '#454748'
		},
		// 背景颜色
		backgroundColor: {
			type: String,
			default: '#F8F9FB'
		},
		// 是否是暗黑模式
		isDark: {
			type: Boolean,
			default: false
		},
		// 背景颜色是否是主题色
		themeBgBool: {
			type: Boolean,
			default: false
		},
		// 自定义样式
		customStyle: {
			type: [String, Object],
			defalut: () => {
				return {}
			}
		}
	}
}
