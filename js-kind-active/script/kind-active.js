var kindActive=(function(){
	var _bindEvent=function(that) {
		that.list.on("click",function () {
			that.render($(this),that);
		})
	}
	var kindActive=function(config) {
	};
	kindActive.prototype.init = function(config) {
		this.ulLists=$(config.class+" ul");
		this.list=$(config.class+" li");
		this.multiple=config.multiple;
		_bindEvent(this);
		return this;
	};
	kindActive.prototype.render = function(obj,that) {
		if (that.multiple) {
			obj.toggleClass("active");
		}else{
			console.log($(obj[0].parentNode));
			var parentId=$(obj[0].parentNode).attr("id");
			
			for (var i = that.ulLists.length - 1; i >= 0; i--) {
				var ulId=$(that.ulLists[i]).attr("id");
				$("#"+ulId+" .active").toggleClass("active");
				$($("#"+ulId+" li")[0]).addClass("active");
			}
			$("#"+parentId+" .active").toggleClass("active");
			obj.toggleClass("active");
		}
	};
	console.log(kindActive);
	return kindActive;
})();