/* eslint-disable */
import Vue from 'vue'

//时间戳转换为自己想要的格式
// 用法  new Date(dateValue).format('yyyy-MM-dd hh:mm:ss')
Date.prototype.format = function (format) {
	let date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (let k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
				date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
}

//时间戳过滤器
Vue.filter('dateMin', (value) => {
	if (value) {
		// 兼容Safari Safari内核无法识别 -new Date()
		let newVal = '';
		if (typeof value != 'number') {
			newVal = value.replace(/-/g, '/');
		} else {
			newVal = value;
		}
		return new Date(newVal).format('yyyy-MM-dd hh:mm')
	} else {
		return "-"
	}
});

//身份证号*号处理
Vue.filter('valueO', (value) => {
	if (value) {
		let str1 = value.substr(0,4)
		let str2 = value.substr(-4)
		let str3 =''
		for(let i = 0;i<value.length-8;i++){
			str3+='*'
		}
		return str1+str3+str2
	} else {
		return "-"
	}
});
//日期格式
Vue.filter('dateD', (value) => {
	if (value) {
		let newVal = null;
		if (typeof value != 'number') {
			newVal = value.replace(/-/g, '/');
		} else {
			newVal = value;
		}
		return new Date(newVal).format('yyyy-MM-dd')
	} else {
		return "-"
	}
});

Vue.filter('stuLevelFilter', (value) => {
	if (value) {
		if (value == 1) return "优秀";
		else if (value == 2) return "良好";
		else if (value == 3) return "一般";
		else return ""
	} else {
		return ""
	}
});

Vue.filter('timeFormat', (value, type) => {
	if (value) {
		return new Date(value).format(type)
	} else {
		return "-"
	}
});

Vue.filter('timeMin', function (seconds) {
	if (!seconds) {
		return 0;
	}
	let min = Math.floor(seconds / 60),
		second = seconds % 60,
		hour, newMin;

	if (min > 60) {
		hour = Math.floor(min / 60);
		newMin = min % 60;
	}

	if (second < 10) {
		second = '0' + second;
	}
	if (min < 10) {
		min = '0' + min;
	}
	if (newMin < 10) {
		newMin = '0' + newMin;
	}
	return hour ? (hour + ':' + newMin + ':' + second) : (min + ':' + second);
});

Vue.filter('time', function (value) {
	if (!value) {
		return '0小时';
	}
	const pat = /^[0-9]*$/;
	if (!pat.exec(value)) {
		return '0小时';
	}
	const time = parseInt(value);
	if (time < 60) {
		return '不到1分钟';
	} else if (time >= 60 && time < 60 * 60) {
		return Math.round(time / 60) + '分钟';
	} else {
		let Hour = Math.floor(time / 3600);
		let Min = Math.ceil(time % 3600 / 60)
		return Hour + '小时' + Min + '分钟';
	}
});
Vue.filter('sexFit', (value, type) => {
	if (value) {
		return value  == 1 ? '男' : '女';
	} else {
		return ''
	}
}); 
Vue.filter('minute', (value, type) => {
	if (value) {
		return (value / 60).toFixed(2);
	} else {
		return 0
	}
}); 
Vue.filter('bmiCode', (value, type) => {
	if (value) {
		if (value == 'A') return "BMI A级（正常）";
		else if (value == 'B1') return "BMI B1级（低体重）";
		else if (value == 'B2') return "BMI B2级（超重）";
		else return "BMI D级（肥胖）"
	} else {
		return ""
	}
});
// 比率
Vue.filter('ratio', function (divisor, Dividend) {
	if (!divisor || divisor == 0) {
		return '0';
	}
	return (((((divisor) / (Dividend)).toFixed(4)) * 100).toFixed(2))
});
export default Vue.filter