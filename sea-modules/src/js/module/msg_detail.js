define("src/js/module/msg_detail",["gallery/underscore/1.6.0/underscore.js","../../tpl/tpl_msg_left.tpl"],function(a,b){b.init=function(b){var c=a("gallery/underscore/1.6.0/underscore.js"),d={1:"嗯哼？",2:"然后呢？",3:"是啊！",4:"你说呢？",5:"对，我同意。"},e=$(b),f=e.find(".content"),g=e.find("#j-msg-detail-list"),h=e.find("#tpl_msg_left").html(),i=e.find("#tpl_msg_right").html(),j=function(){f.scrollTop(g.height())},k=a("../../tpl/tpl_msg_left.tpl");console.log(k),e.find("#j-sendMsg").keypress(function(a){var b=window.event?a.keyCode:a.which;if(13==b){var e=$(this).val(),f=c.template(i,{dataset:e}),k=$(f);g.append(k),$(this).val("").focus(),j(k),f=c.template(h,{dataset:d[c.random(1,5)]}),k=$(f),setTimeout(function(){g.append(k),j(k)},c.random(100,1e3))}})}}),define("src/tpl/tpl_msg_left.tpl",[],'<li class="left">\n	<section class="photo">\n		<img src="src/images/msg_p5.jpg" alt="">\n	</section>\n	<section class="msg"><%=dataset%></section>\n</li>');