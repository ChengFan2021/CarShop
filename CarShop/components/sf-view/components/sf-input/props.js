export default {
	props: {
		value: {
			type: String,
			default: ''
		},
		keyType: {
			type: String,
			default: 'text'
		}, //键盘弹出类型 
		color: {
			type: String,
			default: '#828282'
		},
		placeholder: {
			type: String,
			default: '请输入'
		}, //提示文字
		placeholderColor: {
			type: String,
			default: ''
		}, //提示颜色
		// 背景颜色类
		boxBgClass: {
			type: String,
			default: ''
		},
		// 按钮形状  square 正方形  circle 圆形
		shape: {
			type: String,
			default: 'square'
		},
		// 前缀Icon
		prefixIcon: {
			type: String,
			default: ''
		},
		// 前缀icon样式
		prefixIconStyle: {
			type: [String, Object],
			default: ''
		},
		// 后缀icon
		suffixIcon: {
			type: String,
			default: ''
		},
		// 后缀icon样式
		suffixIconStyle: {
			type: [String, Object],
			default: ''
		},
	}
}
