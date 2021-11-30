// 替换字符串指定位置范围字符
export const getReplaceToString = (string,index, len, type = '*') => {
	let newType = ''
	for (let i = 0; i < len; i++) {
		newType += type
	}
	return string.substring(0, index) + newType + string.substring(len + index)
}
