require('../sass/index.scss');
var util = require('./util/common.js');

var page = {
	init: function(){
		this.bindEvent();
		this.getData();
	},
	bindEvent: function(){
		$(document).on('click', 'input', function(){
			util.showTip('点我干嘛');
		});
	},
	getData: function(){
		$.ajax({
			type: 'get',
			url: '/ajaxload/ajax-headData.html',
			success: function(res){
				console.log(res);
			},
			error: function(err){
				console.log(err);
			}
		});
	}
};

page.init();