var stepon=(function(){
	var stepon=function() {
	};
	stepon.prototype.init = function() {
		this.stepList=$(".js-progress .step");
		this.stepForms=$(".js-progress .step-form");
		this.buttons=$(".js-submitBtn");
		_bindEvent(this);
		return this;
	};
	stepon.prototype.render=function(index){
		var obj=this.stepList[index];
		var activeStepForm=this.stepForms[index-1]
		var toActiveForm=this.stepForms[index];
		$(obj).addClass("active");
		console.log(index);
		console.log($(activeStepForm));
		console.log($(toActiveForm));
		$(activeStepForm).removeClass("active");
		$(toActiveForm).addClass("active");
	}

	var _bindEvent=function(that){
		that.buttons.on("click",function(e){
			that.render($(this)[0].dataset.index);
		});
	}

	return stepon;
})();

$(function(){
	new stepon().init();
});