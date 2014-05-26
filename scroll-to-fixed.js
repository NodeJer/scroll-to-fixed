/**
 * 
 * @authors Your Name (1245089789@qq.com)
 * @date    2014-05-26 11:48:19
 * @version $1.0$
 */

(function(root, $, factory){

  if(typeof define === 'function' && define.cmd){
    define(function(require, exports, module){
      exports.ScrollToFixed = factory($);
    });
  }
  else{
    root.ScrollToFixed = factory($);
  }
})(window, window.Zepto||window.jQuery, function($){

	function ScrollToFixed(container, top){
		this.$container = $(container);

		this.fixedTop = top||0;
		this.offset = this.$container.offset();

		this.isFixed = false;

		this.init();
	}
	ScrollToFixed.prototype = {
		constructor: ScrollToFixed,
		init: function(){
			this.addEvents();
		},
		addEvents: function(){
			var pro = $.proxy;

			$(window).scroll(pro(this.scroll, this));
		},
		scroll: function(){
			if($(document).scrollTop() >= this.offset.top){
				if(this.isFixed)return;
				
				this.isFixed = true;

				this.$container.css({
					position: 'fixed',
					top: this.fixedTop
				});
			}
			else{
				this.isFixed = false;
				this.$container.css('position', '');
			}
		}
	};

	return ScrollToFixed;
});