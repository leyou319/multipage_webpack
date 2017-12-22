require('../sass/about.scss');

var util = require('./util/common.js');

var page = {
	init: function(){
		this.bindEvent();
	},
	bindEvent: function(){
		$(document).on('click', 'input', function(){
			util.showTip('点我干嘛');
		});
	}
};

page.init();