// 主题 、状态栏前景色配置
const DARK_COLOR = '#2d2d2d'
const NORMAL_COLOR = '#c0e8b9'
const PINK_COLOR = '#ff6ec7'
const BLUE_COLOR ='#1296db'

const WHITE_COLOR = '#ffffff'
const BLACK_COLOR = '#000000'
const TABBAR_COLOR = '#828282'
const DARK_PAGE_BG_COLOR = '#000000'
const PAGE_BG_COLOR = '#f8f9fb'

const themeData = [
	{
		title: '主题0',
		themeType: 'dark',
		color: DARK_COLOR
	},
	{
		title: '主题1',
		themeType: 'normal',
		color: NORMAL_COLOR
	},
	{
		title: '主题2',
		themeType: 'pink',
		color: PINK_COLOR
	},
	{
		title: '主题3',
		themeType: 'blue',
		color: BLUE_COLOR
	}
]

const themeEnum = {
	dark: 'dark',
	normal: 'normal',
	pink: 'pink',
	blue: 'blue'
}

// 根据主题枚举类型赋值
export const getThemeEnumTypeColor =  (enumType) => {
	switch (enumType){
		case 'dark':
			return DARK_COLOR
		case 'normal':
			return NORMAL_COLOR
		case 'pink':
			return PINK_COLOR
		case 'blue':
			return BLUE_COLOR
		default:
			return WHITE_COLOR
	}
}
// 状态栏字体前景色
export const getStatusColor =  (colorType) => {
	switch (colorType){
		case 'white':
			return WHITE_COLOR
		case 'black':
			return BLACK_COLOR
		default:
			return WHITE_COLOR
	}
}

// 获得页面背景颜色 isDark -> true 黑夜模式 
export const getBackgroundColor =  (isDark) => {
	return isDark ? DARK_COLOR : WHITE_COLOR
}
const colors = {
	DARK_COLOR: DARK_COLOR,
	WHITE_COLOR: WHITE_COLOR,
	BLACK_COLOR: BLACK_COLOR,
	TABBAR_COLOR: TABBAR_COLOR,
	DARK_PAGE_BG_COLOR: DARK_PAGE_BG_COLOR,
	PAGE_BG_COLOR: PAGE_BG_COLOR
	
}
export default {
	themeData,
	themeEnum,
	colors
}