class tab{
	constructor(id){
		this.id=id;
	}

	getData(){
		this.ulBox=document.querySelector("#"+this.id+" .tab-ul");
		this.liList=new Array();
		this.urlArray=new Array();
		var len=this.ulBox.childNodes.length;
		for(var i=0;i<len;i++){
			var element=this.ulBox.childNodes[i];
			this.liList.push(element);
			if(element.nodeType==1){
				this.urlArray.push(element.childNodes[0].href);
			}
		}
	}

	doAjax(){
	}

	putUrl(){

	}

	doSomething(e){
		console.log(e);
		this.doAjax();
		this.putUrl();
	}

	showTab(){
		this.getData();
		var that=this;
		this.ulBox.onclick=function(event){
			event.preventDefault();

			that.doSomething(event);
		};
	}
}