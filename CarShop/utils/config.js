import {getThemeEnumTypeColor ,getStatusColor,getBackgroundColor} from "@/utils/enums/theme.js"
import themes from "@/utils/enums/theme.js"

// 黑夜模式切换调用方法
const setDarkChangeStyle = () => {
	setDarkTabBarStyle()
	setDarkNavBackground()
}

//  设置tabbar 主题颜色
const setDarkTabBarStyle = () => {
	const isDark = getApp().globalData.configInfo.isDark
	const themeType = getApp().globalData.configInfo.themeType
	const themeColor = getThemeEnumTypeColor(themeType)
	const tabStyle = setDarkToTabStyle(isDark, themeColor)
	uni.setTabBarStyle({
		backgroundColor: tabStyle.bgColor,
		selectedColor: tabStyle.selectedColor,
		borderStyle: tabStyle.borderColor
	})
}

// 设置背景颜色
const setPageBackgroundColor = () => {
	const isDark = getApp().globalData.configInfo.isDark
	const bgColor = getBackgroundColor(isDark)
	uni.setBackgroundColor({
		backgroundColor: bgColor
	})
}

// 设置系统头部背景及前景颜色
const setDarkNavBackground = () => {
	const isDark = getApp().globalData.configInfo.isDark
	const themeType = isDark ? themes.themeEnum.dark  : getApp().globalData.configInfo.themeType
	const tabBgColor =  getThemeEnumTypeColor(themeType)
	const frontColor = getStatusColor(getApp().globalData.configInfo.navTextColor) 
	uni.setNavigationBarColor({
		frontColor: frontColor, //只能小写
		backgroundColor: tabBgColor,
		animation: {
			duration: 0,
			timingFunc: 'easeIn'
		}
	})
}

// 设置tabbar
const setDarkToTabStyle = (isDark, themeColor) => {
	if (isDark) {
		return {
			bgColor: themes.colors.DARK_COLOR,
			color: themes.colors.WHITE_COLOR,
			selectedColor: themeColor,
			borderColor: themes.colors.DARK_COLOR
		}
	} else {
		return {
			bgColor: themes.colors.WHITE_COLOR,
			color: themes.colors.TABBAR_COLOR,
			selectedColor: themeColor,
			borderColor: themes.colors.WHITE_COLOR
		}
	}
}
const setTabIconStyle = (that) => {
	const themeType = getThemeType()
	uni.setTabBarItem({
		index: 0,
		text: that.$t('首页'),
		"iconPath": 'static/images/tabs/home_normal.png',
		"selectedIconPath": 'static/images/tabs/' + themeType + '_home_active.png'
	})
	uni.setTabBarItem({
		index: 1,
		text: that.$t('我的'),
		"iconPath": 'static/images/tabs/mine_normal.png',
		"selectedIconPath": 'static/images/tabs/' + themeType + '_mine_active.png'
	})
}



// 获得主题颜色
const getThemeColor = () => {
	return getThemeEnumTypeColor(getThemeType())
}
// 获得主题背景颜色样式
const getThemeBackgroundColorStyle = () => {
	const isDark = getApp().globalData.configInfo.isDark
	const bgColor = getBackgroundColor(isDark)
	return {'background-color': bgColor}
}
// 获得主题页面背景颜色样式
const getThemePageBgColorStyle = (isDark) => {
	const bgColor = isDark ? themes.colors.DARK_PAGE_BG_COLOR : themes.colors.PAGE_BG_COLOR
	return {'background-color': bgColor}
}
// 获得主题页面样式名（isDark）
const getDarkThemePageClass = (isDark = false) => {
	return isDark ? 'dark-page-bg-color' : 'page-bg-color'
}
// 获得主题页面样式名
const getThemePageClass = () => {
	const isDark = getApp().globalData.configInfo.isDark
	return isDark ? 'dark-page-bg-color' : 'page-bg-color'
}
// 获得视图背景样式(isDark）
const getDarkThemeViewClass = (isDark = false) => {
	return isDark ? 'dark-box-bg-color' : 'box-bg-color'
}
// 获得视图背景样式
const getThemeViewClass = () => {
	const isDark = getApp().globalData.configInfo.isDark
	return isDark ? 'dark-box-bg-color' : 'box-bg-color'
}

// 获得主题类型 
const getThemeType = () => {
	return getApp().globalData.configInfo.themeType
}
// 获得(存在黑暗模式)主题类型 
const getDarkThemeType = () => {
	const isDark = getApp().globalData.configInfo.isDark
	return  isDark ? themes.themeEnum.dark  : getApp().globalData.configInfo.themeType
}

// 获得透明度样式（是否黑暗模式）
const getOpacityStyle = () => {
	const isDark = getApp().globalData.configInfo.isDark
	return  {opacity: isDark ? 0.7 : 1.0}
}

// 保存配置信息
const saveConfigData = () => {
	uni.setStorageSync('configInfo',getApp().globalData.configInfo)
}

export default {
	setDarkChangeStyle,
	setDarkTabBarStyle,
	setDarkNavBackground,
	setPageBackgroundColor,
	setDarkToTabStyle,
	setTabIconStyle,
	getThemeType,
	getDarkThemeType,
	getThemeColor,
	getThemeBackgroundColorStyle,
	getThemePageBgColorStyle,
	getDarkThemePageClass,
	getThemePageClass,
	getDarkThemeViewClass,
	getThemeViewClass,
	getOpacityStyle,
	saveConfigData

}
