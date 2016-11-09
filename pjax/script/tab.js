class tab{
	constructor(listId,containerId){
		this.listId=listId;
		this.containerId=containerId;
		this.getElem();
	}

	show(dataIndex){
		var oldTabLi=this.ul.getElementsByClassName("active");
		var oldLi=this.contentBox.getElementsByClassName("active");
		var newTabLi=document.getElementById(""+dataIndex);
		var newLi=document.getElementById("page"+dataIndex);
		oldTabLi[0].className=oldTabLi[0].className.slice(0,-6);
		oldLi[0].className=oldLi[0].className.slice(0,-6);
		newTabLi.setAttribute("class",newTabLi.getAttribute("class")+" active")
		newLi.setAttribute("class",newLi.getAttribute("class")+" active")
	}

	getElem(){
		this.tabs=Array();
		var ul=document.getElementById(this.listId).getElementsByTagName('ul')[0];
		this.ul=ul;
		var tabList=ul.childNodes;
		var that=this;
		for (var i = 0; i < tabList.length; i++) {
			if(tabList[i].nodeType=="1"){
				tabList[i].setAttribute("id",that.tabs.length);
				that.tabs.push(tabList[i]);
			}
		}
		this.contentBox=document.getElementById(this.containerId);
		var contentList=this.contentBox.getElementsByClassName('itemPage');
		for(var i=0;i<contentList.length;i++){
			contentList[i].setAttribute("id","page"+i);
		}
		ul.onclick=function(event){
			that.show(event.target.getAttribute("id"));
		}
	}
}