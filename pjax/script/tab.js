class tab{
	constructor(id,containerId){
		this.id=id;
		this.containerId=containerId;
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

	doAjax(url){
		var that=this;
		$.get(url,function(data){
			$("#"+that.containerId).text(data);
			console.log($("#"+that.containerId));
		});
	}

	putUrl(url){

	}

	doSomething(e){
		this.doAjax(e.target.href);
		this.putUrl(e.target.href);
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