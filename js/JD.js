 function getclass3(parentID,classn){//局部获取类
	var parent=document.getElementById(parentID);
	var tags=parent.all?parent.all:parent.getElementsByTagName('*');
	var arr=[];
	var reg=new RegExp("\\b"+classn+"\\b");
	for (var i = 0; i < tags.length; i++) {
		//可获取有多个类名的元素
		if (reg.test(tags[i].className)) {
			arr.push(tags[i]);
		}
	};
	return arr;
}

// top left部分
var topLeft=document.getElementById('top-left');//left 触发
var topLeftUl=document.getElementById('top-left-lis');
var topLeftSpans=topLeftUl.getElementsByTagName('span');
var topLeftBlank=document.getElementById('top-left-blank');
var topJt=document.getElementById('top-jt');
var topLeftPlace=document.getElementById('top-left-place');
var timer1=null;

topLeft.onmouseout=function (){
		topLeft.style.backgroundColor='#F1F1F1';
		topLeftUl.style.display='none';
		topLeftBlank.style.display='none';
		topJt.style.top=-15+'px';	
}
topLeft.onmouseover=function (bk,kbt,lb,jt){
		topLeft.style.backgroundColor='#fff'; //背景颜色改变，父级
		topLeftUl.style.display='block';  //空白条挡住部分边框，空白条
		topLeftBlank.style.display='block'; //列表出现，列表
		topJt.style.top=-9+'px';	//箭头方向改变 ，箭头
}//送至部分  触发的事件
function clearTopLiColor(selectIndex){
	for(var i=0; i<topLeftSpans.length; i++){
		if(selectIndex != i){
			topLeftSpans[i].style.color='#666';
			topLeftSpans[i].style.backgroundColor='#fff';
		}else{
			topLeftSpans[i].style.backgroundColor = '#C81623';
			topLeftSpans[i].style.color='#fff';
		}
	}
}
function clearTopLiClick(){
	for(var j=0; j<topLeftSpans.length; j++){
		topLeftSpans[j].style.color='#666';
		topLeftSpans[j].style.backgroundColor='#fff';
	}
}

// li部分  触发的事件
for(var i=0; i<topLeftSpans.length; i++){
	var selectIndex;
	topLeftSpans[i].onmouseover=function (){
		for(var j=0; j<topLeftSpans.length; j++){
			if(topLeftSpans[j] == this){
				clearTopLiColor(selectIndex);
				topLeftSpans[j].style.color='#C81623';
				topLeftSpans[j].style.backgroundColor='#FAF9F9';
			}
		}
	}
	topLeftSpans[i].onclick=function (){
		for(var j=0; j<topLeftSpans.length; j++){
			if(topLeftSpans[j] == this){
				 selectIndex=j;  /*记录点击位置*/
				clearTopLiClick();
				topLeftSpans[j].style.backgroundColor = '#C81623';
				topLeftSpans[j].style.color='#fff';
				topLeftPlace.innerHTML = topLeftSpans[j].innerHTML;
				//列表消失
				timer1=setTimeout(function (){
					topLeft.style.backgroundColor='#F1F1F1';
					topLeftUl.style.display='none';
					topLeftBlank.style.display='none';
					topJt.style.top=-15+'px';
				},500)
			}
		}
	}
}

// right部分
//我的京东
// var topRightLi3=document.getElementById('top-right-li3');
var topRightWidth= getclass3('top-right','top-right-width'); //选中所有的可下拉的li
var topRightShow=getclass3('top-right','top-right-show');//选中所有的列表
var topRightBlank=getclass3('top-right','top-right-blank');//选中所有的挡住部分边框的div
var topRightJt=getclass3('top-right','top-right-jt');//选中所有的箭头
for(var i=0; i<topRightWidth.length; i++){
	topRightWidth[i].onmouseover=function (){
		for(var j=0; j<topRightWidth.length; j++){
			if(topRightWidth[j] == this){
				topRightWidth[j].style.backgroundColor='#fff';
				topRightShow[j].style.display='block';
				topRightBlank[j].style.display='block';
				topRightJt[j].style.top=-9+'px';
				if(j == 1){
					topRightWidth[j].style.background='#fff url(img/top-right-phone01.png) 7px -20px no-repeat';
				}
			};
			
		};
	}
	topRightWidth[i].onmouseout=function (){
		for(var j=0; j<topRightWidth.length; j++){
			if(topRightWidth[j] == this){
				topRightWidth[j].style.backgroundColor='#F1F1F1';
				topRightShow[j].style.display='none';
				topRightBlank[j].style.display='none';
				topRightJt[j].style.top=-15+'px';
				if(j == 1){
					topRightWidth[j].style.background='url(img/top-right-phone01.png) 7px 5px no-repeat';
				}
			};
		};
	}
}

//top  广告部分
var ggClose=document.getElementById('topGGClose');
var topGGBack=document.getElementById('top-gg-back');
ggClose.onclick=function (){
	topGGBack.removeChild(ggClose.parentNode);
}

//左边导航，效果
var topNavUl= document.getElementById('top-nav-lis');
var topNavLis=topNavUl.getElementsByTagName('li');
var topNavTitle=getclass3('top-nav-lis','nav-lis-title');
var topNavCon=getclass3('top-nav-lis','top-nva-con');
var topNavShow=getclass3('top-nav-lis','top-nav-show');
for(var i=0; i<topNavLis.length; i++){
	topNavLis[i].onmouseover=function (){
		for(var j=0; j<topNavLis.length; j++){
			var ntop;
			if(topNavLis[j] == this){
				// 获取滚动条的高度
				if(document.body && document.body.scrollTop){
					ntop=document.body.scrollTop;
				}else if(document.documentElement && document.documentElement.scrollTop){
					ntop=document.documentElement.scrollTop;
				}
				if(ntop<256 || ntop>720){
					ntop=0;
				}else{
					ntop-=256;
				}
				 topNavTitle[j].style.color='#C81623';
				 topNavCon[j].style.display='block';
				 topNavShow[j].style.display='block';
				 topNavCon[j].style.top=(-31*j+ntop)+'px';
			}
		}
	}
	topNavLis[i].onmouseout=function (){
		for(var j=0; j<topNavLis.length; j++){
			if(topNavLis[j] == this){
				 topNavTitle[j].style.color='#fff';
				 topNavCon[j].style.display='none';
				 topNavShow[j].style.display='none';
			}
		}
	}
}
// 大图滚动部分
var fx=document.getElementById('fx');
var maxImage=document.getElementById('max-image');
var Imgs=maxImage.getElementsByTagName('img');
var maxLeft=document.getElementById('max-left');
var maxRight=document.getElementById('max-right');
var timer2=null, timer3=null;
var maxUl=document.getElementById('max-ul');
var maxLi=maxUl.getElementsByTagName('li');//图片的下标123456
maxImage.onmouseover=function (){
	fx.style.display='block';
	clearInterval(timer3);
	clearInterval(timer2);
}
maxImage.onmouseout=function (){
	clearInterval(timer3);
	clearInterval(timer2);
	fx.style.display='none';
	auto(); 
}
function clearLiName(){//清除所有li的样式
	for(var i=0; i<maxLi.length; i++){
		maxLi[i].className='';
	}
}
var imgIndex=0; /*当前显示图片的下标*/
function auto(){
	timer2=setInterval(function(){
		// clearInterval(timer2);
		clearInterval(timer3);
		var index=imgIndex;
		imgIndex++;
		if(imgIndex>5){
			index=5;
			imgIndex=0;
		}
		timer3=setTimeout(function (){/*此处可添加图片切换的效果*/
			Imgs[index].style.display='none';
			Imgs[imgIndex].style.display='block';
			clearLiName();
			maxLi[imgIndex].className='max-select';
		},500)
	} ,4000)
}
auto();
maxRight.onclick=function (){
	clearInterval(timer3);
	clearInterval(timer2);
	var index=imgIndex;
	imgIndex++;
	if(imgIndex>5){
		index=5;
		imgIndex=0;
	}
	Imgs[index].style.display='none';
	Imgs[imgIndex].style.display='block';
	clearLiName();
	maxLi[imgIndex].className='max-select';
	auto();
}
maxLeft.onclick=function (){
	clearInterval(timer3);
	clearInterval(timer2);
	var index=imgIndex;
	imgIndex--;
	if(imgIndex<0){
		index=0;
		imgIndex=5;
	}
	Imgs[index].style.display='none';
	Imgs[imgIndex].style.display='block';
	clearLiName();
	maxLi[imgIndex].className='max-select';
	auto();
}
// 小圆点部分的切换效果

for(var i=0; i<maxLi.length; i++){
	maxLi[i].onmouseover=function (){
		for(var j=0; j<maxLi.length; j++){
			if(maxLi[j] == this){
				clearInterval(timer3);
				clearInterval(timer2);
				var index=imgIndex;
				imgIndex=j;
				Imgs[index].style.display='none';
				Imgs[imgIndex].style.display='block';
				clearLiName();
				maxLi[j].className='max-select';
				auto();
			}
		}
	}
}
//生活服务部分
var LifeServer=document.getElementById('lifeserver');
var serverN=document.getElementById('server-n');
var serverNDiv=serverN.getElementsByTagName('div')[0];
var serverLis=serverN.getElementsByTagName('li');
var serverP=serverN.getElementsByTagName('p');
var serverSpan=serverN.getElementsByTagName('span');
var lfServer=document.getElementById('lifeserver-xg');
var lfClose=document.getElementById('lf-close');
var timer4=null,timer5=null,timer6=null;
var cf=0;  //标记是否一斤触发
function lServer(){
	cf=1;
	clearInterval(timer4);
	var step=0;
	var star=lfServer.offsetTop;
	timer4=setInterval(function (){
		star-=8;
		if(star <= 115){
			star=43;
			lfServer.style.top=star+'px';
			serverNDiv.style.top=-70+'px';
			timer5=setTimeout(function (){
				serverNDiv.style.top=0+'px';
				clearInterval(timer4);				
			} ,100) 
		}
		lfServer.style.top=star+'px';
	},1)
	
}

lfClose.onclick=function Lfclose(){
	cf=1;
	var a=lfClose.offsetTop;
	timer6=setInterval(function (){
		a+=10;	
		if(a >= 257){
			lfServer.style.top=257+'px';
			clearInterval(timer6);
		}
		lfServer.style.top=a+'px';
	},1)
}
for(var i=0; i<serverLis.length; i++){
	serverLis[i].onmouseover=function (ev){
		var event=ev||window.event;
		// var from=event.fromElement||event.relatedTarget;
		//在mouseover事件中from，表示鼠标来自哪个元素，也是事件委托类型，和target与srcElement相反
		// alert(from);
		var from=event.fromElement||event.relatedTarget;
		while(from){
			if (this==from) {
				return false;
			};
			from=from.parentNode;
		}

		for(var j=0; j<serverLis.length; j++){
			if(serverLis[j] == this){
				serverP[j].style.color='#C81623';
				serverSpan[j].style.background='url(img/life-image.png) -25px '+(-j*25)+'px no-repeat';
				if(cf == 0){
					if(j == 0){
						lServer();
					}else if(j == 1){
						lServer();
					}else if(j == 2){
						lServer();
					}else if(j == 3){
						lServer();
					}
				}	
			}
		}
	}
	serverLis[i].onmouseout=function (ev){
		var event=ev||window.event;
		var to=event.toElement||event.relatedTarget;
		//在mouseout事件中to，表示鼠标指向那个元素，也是事件委托类型，和target与srcElement相反
		// alert(to)
		while(to){
			if (this==to) {
				return false;
			};
			to=to.parentNode;
		}

		cf=0;
		for(var j=0; j<serverLis.length; j++){
			if(serverLis[j] == this){
				 serverSpan[j].style.background='url(img/life-image.png) 0px '+(-j*25)+'px no-repeat';
				serverP[j].style.color='#666';
			}
		}
	}
}

// 充话费、流量切换
var lfXgTop=document.getElementById('lf-xg-top');
var lfTopli=lfXgTop.getElementsByTagName('li');
var lfTopA=lfXgTop.getElementsByTagName('a');
var lfXg1=getclass3('lf-xg-con1','lf-xg-con');
for(var i=0; i<lfTopli.length; i++){
	lfTopli[i].onmouseover=function (){
		for(var j=0; j<lfTopli.length; j++){
			if(lfTopli[j] == this){
				lfTopA[j].className='lf-xg-a';
				lfXg1[j].style.display='block';
			}else{
				lfTopA[j].className='';
				lfXg1[j].style.display='none';
			}
		}
	}
}
//国内 国际 特惠 切换效果
var lfXg2Top=document.getElementById('lf-xg2-top');
var lfXg2li =lfXg2Top.getElementsByTagName('li');
var lfXg2A =lfXg2Top.getElementsByTagName('a');
var lfXg2=getclass3('lf-xg-con2','lf-xg-con');
for(var i=0; i<lfXg2li.length; i++){
	lfXg2li[i].onmouseover=function (){
		for(var j=0; j<lfXg2li.length; j++){
			if(lfXg2li[j] == this){
				lfXg2A[j].className='xg2-select';
				lfXg2[j].style.display='block';
			}else{
				lfXg2A[j].className='';
				lfXg2[j].style.display='none';
			}
		}
	}
}
//电影 切换
var lfXg3Top=document.getElementById('lf-xg3-top');
var lfXg3li =lfXg3Top.getElementsByTagName('li');
var lfXg3A =lfXg3Top.getElementsByTagName('a');
var lfXg3=getclass3('lf-xg-con3','lf-video');
for(var i=0; i<lfXg3li.length; i++){
	lfXg3li[i].onmouseover=function (){
		for(var j=0; j<lfXg3li.length; j++){
			if(lfXg3li[j] == this){
				lfXg3A[j].className='xg3-select';
				lfXg3[j].style.display='block';
			}else{
				lfXg3A[j].className='';
				lfXg3[j].style.display='none';
			}
		}
	}
}
// 生活服务 标题 切换()

var lfTitle=document.getElementById('lf-xg-title');
var lfTitleLi=lfTitle.getElementsByTagName('li');
var lfTitleCon=getclass3('lf-content','lf-title-con');
var lfServer=document.getElementById('lifeserver-xg');

for(var i=0; i<lfTitleLi.length; i++){
	lfTitleLi[i].onmouseover=function (){
		for(var j=0;j<lfTitleLi.length; j++){
			if(lfTitleLi[j] == this){
				lfTitleCon[j].style.display='block';
				lfTitleLi[j].className='title-select';
			}else{
				lfTitleCon[j].style.display='none';
				lfTitleLi[j].className='';
			}
		}
	}
}
// 今日推荐部分
var todayLeft=document.getElementById('today-left');
var todayRight=document.getElementById('today-right');
var todayOuter=document.getElementById('today-outer');
var imgN=1;
var timer=null;
todayOuter.scrollLeft=1000;
todayLeft.onclick=function (){
	var sl=1000*imgN;
	imgN++;
	clearInterval(timer);
	timer=setInterval(function (){
		sl+=40;
		if(sl >= 1000*imgN){
			todayOuter.scrollLeft=1000*imgN;
			if(imgN >= 5){
				imgN = 1;
				todayOuter.scrollLeft=1000;
			}
			clearInterval(timer);
		}
		todayOuter.scrollLeft=sl;
	},1);
}
todayRight.onclick=function (){
	var sl=1000*imgN;
	imgN--;
	clearInterval(timer);
	timer=setInterval(function (){
		sl-=40;
		if(sl <= 1000*imgN){
			todayOuter.scrollLeft=1000*imgN;
			if(imgN <= 1){
				imgN = 5;
				todayOuter.scrollLeft=5000;
			}
			clearInterval(timer);
		}
		todayOuter.scrollLeft=sl;
	},1);
}
//右边悬浮栏
var rNav=document.getElementById('right-nav');
var rNavLi=rNav.getElementsByTagName('li');
var rNavVar=rNav.getElementsByTagName('var');
var rNavEm=rNav.getElementsByTagName('em');
var timer7=null,timer8=null ,timer9=null, timer71=null,timer81=null, timer72=null,timer82=null, timer73=null,timer83=null;
for(var i=0; i<rNavLi.length; i++){
	rNavLi[i].onmouseover=function (ev){
		var event=ev||window.event;
		var from=event.formElement||event.relatedTarget;
		while(from){
			if(this == from){
				return false;
			}
			from=from.parentNode;
		}
		for(var j=0; j<rNavEm.length; j++){
			if(rNavLi[j] != this){
				
				rNavEm[j].style.backgroundColor='#666';
				rNavVar[j].style.left=0+'px';
			}else{
				var b=j;
				clearTimeout(timer9);
				rNavEm[b].style.backgroundColor='#c81623';
				rNavVar[b].style.backgroundColor='#c81623';
				//加了一个延迟执行
				timer9=setTimeout(function (){
					var a=0;
					// alert(rNavVar[Former].offsetLeft)
					if( b == 0 || b==4){
						clearInterval(timer7);
						timer7=setInterval(function (){
							a-=6;
							if(a<=-58){
								a=-62;
								rNavVar[b].style.left=-62+'px';
								clearInterval(timer7);
							}
							r=a;
							rNavVar[b].style.left=a+'px';
						}, 5)	
						rNavEm[b].style.backgroundColor='#c81623';
						rNavVar[b].style.backgroundColor='#c81623';
					}
					if( b == 1|| b== 5){
						clearInterval(timer71);
						timer71=setInterval(function (){
							a-=6;
							if(a<=-58){
								a=-62;
								rNavVar[b].style.left=-62+'px';
								clearInterval(timer71);
							}
							r=a;
							rNavVar[b].style.left=a+'px';
						}, 5)	
						rNavEm[b].style.backgroundColor='#c81623';
						rNavVar[b].style.backgroundColor='#c81623';
					}
					if( b == 2){
						clearInterval(timer72);
						timer72=setInterval(function (){
							a-=6;
							if(a<=-58){
								a=-62;
								rNavVar[b].style.left=-62+'px';
								clearInterval(timer72);
							}
							r=a;
							rNavVar[b].style.left=a+'px';
						}, 5)
						rNavEm[b].style.backgroundColor='#c81623';
						rNavVar[b].style.backgroundColor='#c81623';	
					}
					if( b == 3){
						clearInterval(timer73);
						timer73=setInterval(function (){
							a-=6;
							if(a<=-58){
								a=-62;
								rNavVar[b].style.left=-62+'px';
								clearInterval(timer73);
							}
							r=a;
							rNavVar[b].style.left=a+'px';
						}, 5)	
						rNavEm[b].style.backgroundColor='#c81623';
						rNavVar[b].style.backgroundColor='#c81623';
					}
					
				},200)
			}
		}
	}
	rNavLi[i].onmouseout=function (ev){
		var event=ev||window.event;
		var to=event.toElement||event.relatedTarget;
		while(to){
			if(to == this){
				return false;
			}
			to=to.parentNode;
		}
		clearTimeout(timer9);//清除延迟
		for(var j=0; j<rNavLi.length; j++){
			if(rNavLi[j] == this){
				var b=j;
				var a=rNavVar[b].offsetLeft;
				// alert(rNavVar[Former].offsetLeft)
				rNavEm[b].style.backgroundColor='#666';
				rNavVar[b].style.backgroundColor='#666';
				if( b == 0 || b==4){
					clearInterval(timer7);
					clearInterval(timer8);
					timer8=setInterval(function (){
						a+=8;
						if(a>=0){
							rNavVar[b].style.left=0+'px';
							clearInterval(timer8);
						}
						rNavVar[b].style.left=a+'px';
					},5)
				}
				if( b == 1 || b==5){
					clearInterval(timer71);
					clearInterval(timer81);
					timer81=setInterval(function (){
						a+=8;
						if(a>=0){
							rNavVar[b].style.left=0+'px';
							clearInterval(timer81);
						}
						rNavVar[b].style.left=a+'px';
					},5)
				}
				if( b == 2){
					clearInterval(timer72);
					clearInterval(timer82);
					timer82=setInterval(function (){
						a+=8;
						if(a>=0){
							rNavVar[b].style.left=0+'px';
							clearInterval(timer82);
						}
						rNavVar[b].style.left=a+'px';
					},5)
				}
				if( b == 3){
					clearInterval(timer73);
					clearInterval(timer83);
					timer83=setInterval(function (){
						a+=8;
						if(a>=0){
							rNavVar[b].style.left=0+'px';
							clearInterval(timer83);
						}
						rNavVar[b].style.left=a+'px';
					},5)
				}	
			}else{
				rNavEm[j].style.backgroundColor='#666';
				rNavVar[j].style.left=0+'px';
			}
		}
	}
}
//========回到顶部
rNavLi[4].onclick=function (){
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}
//=======我的关注

var logname=getclass3('attention','logname')[0];
var namevar=logname.getElementsByTagName('var')[0];
var logmm=getclass3('attention','logmm')[0];
var mmvar=logmm.getElementsByTagName('var')[0];
var attention=document.getElementById('attention');
var logclose=document.getElementById('logclose');
var ipt=attention.getElementsByTagName('input')
rNavLi[1].onclick=function (){
	attention.style.display='block';
}
rNavLi[2].onclick=function (){
	attention.style.display='block';
}
rNavLi[3].onclick=function (){
	attention.style.display='block';
}
logclose.onclick=function (){
	attention.style.display='none';
}
ipt[0].onfocus=function (){
	namevar.style.background="url(img/registerbk.png) 0px -48px no-repeat";
	namevar.style.borderColor="#3aa2e4";
	logname.style.borderColor="#3aa2e4";
}
ipt[0].onblur=function (){
	namevar.style.background="url(img/registerbk.png) 0px 0px no-repeat";
	namevar.style.borderColor="#bdbdbd";
	logname.style.borderColor="#bdbdbd";
}
ipt[1].onfocus=function (){
	mmvar.style.background="url(img/registerbk.png) -48px -48px no-repeat";
	mmvar.style.borderColor="#3aa2e4";
	logmm.style.borderColor="#3aa2e4";
}
ipt[1].onblur=function (){
	mmvar.style.background="url(img/registerbk.png) -48px 0px no-repeat";
	mmvar.style.borderColor="#bdbdbd";
	logmm.style.borderColor="#bdbdbd";
}

// 猜你喜欢部分
var gsCon=document.getElementById('guess-con');
var gLine=document.getElementById('g-line');
var f1Left=document.getElementById('f1-inner-left');
var f1Right=document.getElementById('f1-inner-right');
var timer10=null;
var a=843;
gsCon.onmouseover=function (ev){
	var event=ev||window.event;
	var from=event.formElement||event.relatedTarget;
	while(from){
		if(this == from){
			return false;
		}
		from=from.parentNode;
	}
	clearInterval(timer10);
	timer10=setInterval(function  (){

		gLine.style.right=a+'px';
		a-=3;
		if(a<=-1){
			a=843;
			gLine.style.right=-1+'px';
			clearInterval(timer10);
		}else{
			gLine.style.right=a+'px';
		}
	},0.5)
}
// 1F-11F
// 大图滚动封装好的函数
function picture(ID,class1,class2,class3,pictureTab,liParent,leftID,rightID){
	var f2Con=getclass3(ID,class1)[0];  //获取最外层的类名
	var f2Outer=getclass3(ID,class2)[0];//获取最外层的类名
	var f2Inner=getclass3(ID,class3)[0];//获取里层的的类名（包含了切换的图片）
	var f2Lis=f2Inner.getElementsByTagName(pictureTab);     //获取切换的所有图片的标签
	var f2ClLi=getclass3(ID,liParent)[0];     //获取代表图片的li的父级
	var f2ClLis=f2ClLi.getElementsByTagName('li');    //获取代表图片的li的父级
	var f2Left=document.getElementById(leftID);  //获取向右滚动的id
	var f2Right=document.getElementById(rightID);//获取向左滚动的id
	var timer13=null, timer14=null;                
	var imgi=1, liIndex=0;
	f2Outer.scrollLeft=f2Con.offsetWidth;//起始位置
	function move(){//图片滚动函数
		clearInterval(timer13);
		var start=f2Outer.scrollLeft;//起始位置
		var end=f2Con.offsetWidth*imgi;//结束位置
		var step=0;//起始步数
		var stepmax=20;//最大步数
		var everystep=(end-start)/20;//每步所走的距离
		for (var i = 0; i < f2ClLis.length; i++) {//去掉所有数字的样式
			f2ClLis[i].className='';
		};
		f2ClLis[liIndex].className='li-select';//当前显示数字的样式
		timer13=setInterval(function (){
			step++;
			if (step==stepmax) {
				step=0;
				clearInterval(timer13);
			};
			start+=everystep;
			f2Outer.scrollLeft=start;
		},15)
	}

	// 第一步：自动走
	function automove(){
		clearInterval(timer14);
		timer14=setInterval(function (){//每2秒换一张图片
			liIndex++;
			if (liIndex>=f2ClLis.length) {
				liIndex=0;
			};
			imgi++;
			if (imgi>=f2Lis.length) {
				imgi=2;
				f2Outer.scrollLeft=f2Con.offsetWidth;
			};
			move();
		},4000)
	}
	automove();//进入页面自动执行
	// 第二步：点击左边
	f2Left.onclick=function (){
		clearInterval(timer14);
		liIndex--;
		if (liIndex<0) {
			liIndex=f2ClLis.length-1;
		};
		imgi--;
		if (imgi<0) {
			imgi=f2Lis.length-3;
			f2Outer.scrollLeft=f2Con.offsetWidth*(imgi+1);
		};
		move();
		automove();//控制完两秒又继续走
	}
	// 第三步：点击右边
	f2Right.onclick=function (){
		clearInterval(timer14);
		liIndex++;
		if (liIndex>=f2ClLis.length) {
			liIndex=0;
		};
		imgi++;
		if (imgi>=f2Lis.length) {
			f2Outer.scrollLeft=f2Con.offsetWidth;
			imgi=2;
		};
		move();
		automove();//控制完两秒又继续走
	}
	// 第四步：点击数字
	for (var i = 0; i < f2ClLis.length; i++) {
		f2ClLis[i].onmouseover=function (){
			clearInterval(timer14);
			for (var i = 0; i < f2ClLis.length; i++) {
				if (f2ClLis[i]==this) {
					liIndex=i;
					imgi=i+1;
					move();
					automove();//控制完两秒又继续走
				};
			};
		}
	};
}
// 1F tab切换效果
var f1Tab=document.getElementById('f1-ul-title');
var f1TabLi=f1Tab.getElementsByTagName('li');
var f1TabA=f1Tab.getElementsByTagName('a');
var f1TabCon=getclass3('1f','f-conent');
for(var i=0; i<f1TabLi.length; i++){
	f1TabLi[i].onmouseover=function (){
		for(var j=0; j<f1TabLi.length; j++){
			if(f1TabLi[j] == this){
				var aaa=f1TabLi[j].offsetWidth;
				f1TabA[j].className='f-ul-select';
				f1TabLi[j].style.width=aaa+'px';
				f1TabCon[j].style.display='block';
			}else{
				f1TabA[j].className='';
				f1TabCon[j].style.display='none';
			}
		}
	}
}

//1F 中的大图滚动
picture('1f','f1-cl-li2','f1-outer','f1-inner','a','f1-cl-li','f1-inner-left','f1-inner-right');
// ============ 2F ===================
var f2Title=document.getElementById('f2-ul-title')
var f2TitleLi=f2Title.getElementsByTagName('li');
var f2TitleA=f2Title.getElementsByTagName('a');
var f2Content=getclass3('2f','f2-content');
for(var i=0; i<f2TitleLi.length; i++){
	f2TitleLi[i].onmouseover=function (){
		for(var j=0; j<f2TitleLi.length; j++){
			if(f2TitleLi[j] == this){
				var aaa=f2TitleLi[j].offsetWidth;
				f2TitleA[j].className='f-ul-select';
				f2TitleLi[j].style.width=aaa+'px';
				f2Content[j].style.display="block";
			}else{
				f2TitleA[j].className='';
				f2Content[j].style.display="none";
			}
		}
	}
}
//======================= 2F 大图滚动部分==================

picture('f2-tab','f2-con1-left','f2-con-outer','f2-con-inner','li','f2-cl-li','f2-inner-left','f2-inner-right');
var f2Cont=getclass3('2f','f2-con1-left')[0];
var f2Left=document.getElementById('f2-inner-left');
var f2Right=document.getElementById('f2-inner-right');
f2Cont.onmouseover=function (){
	f2Left.style.display='block';
	f2Right.style.display='block';
}
f2Cont.onmouseout=function (){
	f2Left.style.display='none';
	f2Right.style.display='none';
}
// ====================== 3F ==============================
var f3Title=document.getElementById('f3-ul-title');
var f3TitleLi=f3Title.getElementsByTagName('li');
var f3TitleA=f3Title.getElementsByTagName('a');
var f3Content=getclass3('3f','f3-conent');
for(var i=0; i<f3TitleLi.length; i++){
	f3TitleLi[i].onmouseover=function (){
		for(var j=0; j<f3TitleLi.length; j++){
			if(f3TitleLi[j] == this){
				var aaa=f3TitleLi[j].offsetWidth;
				f3TitleA[j].className='f-ul-select';
				f3TitleLi[j].style.width=aaa+'px';
				f3Content[j].style.display="block";
			}else{
				f3TitleA[j].className='';
				f3Content[j].style.display="none";
			}
		}
	}
}
picture('3f','f3-con-outer','f3-outer','f3-inner','li','f3-cl-li','f3-inner-left','f3-inner-right');
var f3Cont=getclass3('3f','f3-con-outer')[0];
var f3Left=document.getElementById('f3-inner-left');
var f3Right=document.getElementById('f3-inner-right');
f3Cont.onmouseover=function (){
	f3Left.style.display='block';
	f3Right.style.display='block';
}
f3Cont.onmouseout=function (){
	f3Left.style.display='none';
	f3Right.style.display='none';
}
// ====================== 4F ==============================
var f4Title=document.getElementById('f4-ul-title');
var f4TitleLi=f4Title.getElementsByTagName('li');
var f4TitleA=f4Title.getElementsByTagName('a');
var f4Content=getclass3('4f','f4-conent');
for(var i=0; i<f4TitleLi.length; i++){
	f4TitleLi[i].onmouseover=function (){
		for(var j=0; j<f4TitleLi.length; j++){
			if(f4TitleLi[j] == this){
				var aaa=f4TitleLi[j].offsetWidth;
				f4TitleA[j].className='f-ul-select';
				f4TitleLi[j].style.width=aaa+'px';
				f4Content[j].style.display="block";
			}else{
				f4TitleA[j].className='';
				f4Content[j].style.display="none";
			}
		}
	}
}
picture('4f','f4-con-outer','f4-outer','f4-inner','li','f4-cl-li','f4-inner-left','f4-inner-right');
var f4Cont=getclass3('4f','f4-con-outer')[0];
var f4Left=document.getElementById('f4-inner-left');
var f4Right=document.getElementById('f4-inner-right');
f4Cont.onmouseover=function (){
	f4Left.style.display='block';
	f4Right.style.display='block';
}
f4Cont.onmouseout=function (){
	f4Left.style.display='none';
	f4Right.style.display='none';
}
// ====================== 5F ==============================
var f5Title=document.getElementById('f5-ul-title');
var f5TitleLi=f5Title.getElementsByTagName('li');
var f5TitleA=f5Title.getElementsByTagName('a');
var f5Content=getclass3('5f','f5-conent');
for(var i=0; i<f5TitleLi.length; i++){
	f5TitleLi[i].onmouseover=function (){
		for(var j=0; j<f5TitleLi.length; j++){
			if(f5TitleLi[j] == this){
				var aaa=f5TitleLi[j].offsetWidth;
				f5TitleA[j].className='f-ul-select';
				f5TitleLi[j].style.width=aaa+'px';
				f5Content[j].style.display="block";
			}else{
				f5TitleA[j].className='';
				f5Content[j].style.display="none";
			}
		}
	}
}
picture('5f','f5-con-outer','f5-outer','f5-inner','li','f5-cl-li','f5-inner-left','f5-inner-right');
var f5Cont=getclass3('5f','f5-con-outer')[0];
var f5Left=document.getElementById('f5-inner-left');
var f5Right=document.getElementById('f5-inner-right');
f5Cont.onmouseover=function (){
	f5Left.style.display='block';
	f5Right.style.display='block';
}
f5Cont.onmouseout=function (){
	f5Left.style.display='none';
	f5Right.style.display='none';
}
// ====================== 6F ==============================
var f6Title=document.getElementById('f6-ul-title');
var f6TitleLi=f6Title.getElementsByTagName('li');
var f6TitleA=f6Title.getElementsByTagName('a');
var f6Content=getclass3('6f','f6-content');
for(var i=0; i<f6TitleLi.length; i++){
	f6TitleLi[i].onmouseover=function (){
		for(var j=0; j<f6TitleLi.length; j++){
			if(f6TitleLi[j] == this){
				var aaa=f6TitleLi[j].offsetWidth;
				f6TitleA[j].className='f-ul-select';
				f6TitleLi[j].style.width=aaa+'px';
				f6Content[j].style.display="block";
			}else{
				f6TitleA[j].className='';
				f6Content[j].style.display="none";
			}
		}
	}
}
picture('6f','f6-outer','f6-con-outer','f6-con-inner','li','f6-cl-li','f6-inner-left','f6-inner-right');
var f6Cont=getclass3('6f','f6-outer')[0];
var f6Left=document.getElementById('f6-inner-left');
var f6Right=document.getElementById('f6-inner-right');
f6Cont.onmouseover=function (){
	f6Left.style.display='block';
	f6Right.style.display='block';
}
f6Cont.onmouseout=function (){
	f6Left.style.display='none';
	f6Right.style.display='none';
}
// ====================== 7F ==============================
var f7Title=document.getElementById('f7-ul-title');
var f7TitleLi=f7Title.getElementsByTagName('li');
var f7TitleA=f7Title.getElementsByTagName('a');
var f7Content=getclass3('7f','f7-content');
for(var i=0; i<f7TitleLi.length; i++){
	f7TitleLi[i].onmouseover=function (){
		for(var j=0; j<f7TitleLi.length; j++){
			if(f7TitleLi[j] == this){
				var aaa=f7TitleLi[j].offsetWidth;
				f7TitleA[j].className='f-ul-select';
				f7TitleLi[j].style.width=aaa+'px';
				f7Content[j].style.display="block";
			}else{
				f7TitleA[j].className='';
				f7Content[j].style.display="none";
			}
		}
	}
}
picture('7f','f7-outer','f7-con-outer','f7-con-inner','li','f7-cl-li','f7-inner-left','f7-inner-right');
var f7Cont=getclass3('7f','f7-outer')[0];
var f7Left=document.getElementById('f7-inner-left');
var f7Right=document.getElementById('f7-inner-right');
f7Cont.onmouseover=function (){
	f7Left.style.display='block';
	f7Right.style.display='block';
}
f7Cont.onmouseout=function (){
	f7Left.style.display='none';
	f7Right.style.display='none';
}
// ====================== 8F ==============================
var f8Title=document.getElementById('f8-ul-title');
var f8TitleLi=f8Title.getElementsByTagName('li');
var f8TitleA=f8Title.getElementsByTagName('a');
var f8Content=getclass3('8f','f8-content');
for(var i=0; i<f8TitleLi.length; i++){
	f8TitleLi[i].onmouseover=function (){
		for(var j=0; j<f8TitleLi.length; j++){
			if(f8TitleLi[j] == this){
				var aaa=f8TitleLi[j].offsetWidth;
				f8TitleA[j].className='f-ul-select';
				f8TitleLi[j].style.width=aaa+'px';
				f8Content[j].style.display="block";
			}else{
				f8TitleA[j].className='';
				f8Content[j].style.display="none";
			}
		}
	}
}
picture('8f','f8-outer','f8-con-outer','f8-con-inner','li','f8-cl-li','f8-inner-left','f8-inner-right');
var f8Cont=getclass3('8f','f8-outer')[0];
var f8Left=document.getElementById('f8-inner-left');
var f8Right=document.getElementById('f8-inner-right');
f8Cont.onmouseover=function (){
	f8Left.style.display='block';
	f8Right.style.display='block';
}
f8Cont.onmouseout=function (){
	f8Left.style.display='none';
	f8Right.style.display='none';
}
// ====================== 9F ==============================
var f9Title=document.getElementById('f9-ul-title');
var f9TitleLi=f9Title.getElementsByTagName('li');
var f9TitleA=f9Title.getElementsByTagName('a');
var f9Content=getclass3('9f','f9-content');
for(var i=0; i<f9TitleLi.length; i++){
	f9TitleLi[i].onmouseover=function (){
		for(var j=0; j<f9TitleLi.length; j++){
			if(f9TitleLi[j] == this){
				var aaa=f9TitleLi[j].offsetWidth;
				f9TitleA[j].className='f-ul-select';
				f9TitleLi[j].style.width=aaa+'px';
				f9Content[j].style.display="block";
			}else{
				f9TitleA[j].className='';
				f9Content[j].style.display="none";
			}
		}
	}
}
picture('9f','f9-outer','f9-con-outer','f9-con-inner','li','f9-cl-li','f9-inner-left','f9-inner-right');
var f9Cont=getclass3('9f','f9-outer')[0];
var f9Left=document.getElementById('f9-inner-left');
var f9Right=document.getElementById('f9-inner-right');
f9Cont.onmouseover=function (){
	f9Left.style.display='block';
	f9Right.style.display='block';
}
f9Cont.onmouseout=function (){
	f9Left.style.display='none';
	f9Right.style.display='none';
}
// ====================== 10F ==============================
var f10Title=document.getElementById('f10-ul-title');
var f10TitleLi=f10Title.getElementsByTagName('li');
var f10TitleA=f10Title.getElementsByTagName('a');
var f10Content=getclass3('10f','f10-content');
for(var i=0; i<f10TitleLi.length; i++){
	f10TitleLi[i].onmouseover=function (){
		for(var j=0; j<f10TitleLi.length; j++){
			if(f10TitleLi[j] == this){
				var aaa=f10TitleLi[j].offsetWidth;
				f10TitleA[j].className='f-ul-select';
				f10TitleLi[j].style.width=aaa+'px';
				f10Content[j].style.display="block";
			}else{
				f10TitleA[j].className='';
				f10Content[j].style.display="none";
			}
		}
	}
}
picture('10f','f10-outer','f10-con-outer','f10-con-top','li','f10-cl-li','f10-inner-left','f10-inner-right');
var f10Cont=getclass3('10f','f10-outer')[0];
var f10Left=document.getElementById('f10-inner-left');
var f10Right=document.getElementById('f10-inner-right');
f10Cont.onmouseover=function (){
	f10Left.style.display='block';
	f10Right.style.display='block';
}
f10Cont.onmouseout=function (){
	f10Left.style.display='none';
	f10Right.style.display='none';
}
//==================11F ==================
picture('11f','f11-outer','f11-con-outer','f11-con-top','li','f11-cl-li','f11-inner-left','f11-inner-right');
picture('11f','f12-outer','f12-con-outer','f12-con-top','li','f12-cl-li','f12-inner-left','f12-inner-right');
var f11Cont=getclass3('11f','f11-outer')[0];
var f11Left=document.getElementById('f11-inner-left');
var f11Right=document.getElementById('f11-inner-right');
f11Cont.onmouseover=function (){
	f11Left.style.display='block';
	f11Right.style.display='block';
}
f11Cont.onmouseout=function (){
	f11Left.style.display='none';
	f11Right.style.display='none';
}
var f12Cont=getclass3('11f','f12-outer')[0];
var f12Left=document.getElementById('f12-inner-left');
var f12Right=document.getElementById('f12-inner-right');
f12Cont.onmouseover=function (){
	f12Left.style.display='block';
	f12Right.style.display='block';
}
f12Cont.onmouseout=function (){
	f12Left.style.display='none';
	f12Right.style.display='none';
}
// =============今日抄底==================
var tImg=getclass3('day','t-img');
var day=document.getElementById('day');
var dayLi=day.getElementsByTagName('li');
var timer15=null, timer16=null, timer17=null, timer18=null;
for(var i=0; i<dayLi.length; i++){
	dayLi[i].onmouseover=function (ev){
		var event=ev||window.event;
		// var from=event.fromElement||event.relatedTarget;
		//在mouseover事件中from，表示鼠标来自哪个元素，也是事件委托类型，和target与srcElement相反
		// alert(from);
		var from=event.fromElement||event.relatedTarget;
		while(from){
			if (this==from) {
				return false;
			};
			from=from.parentNode;
		}
		for(var j=0; j<dayLi.length; j++){
			if(dayLi[j] == this){
				var b=j;
				var imgL=tImg[j].offsetLeft;
				clearInterval(timer15);
				clearInterval(timer16);
				timer15=setTimeout(function (){
					timer16=setInterval(function (){
						imgL--;
						if(imgL<=-10){
							tImg[b].style.left=-10+'px';
							clearInterval(timer16);
							setTimeout(timer15);
						}
						tImg[b].style.left=imgL+'px';
					},10)
				},1)
			}
		}
	}
	dayLi[i].onmouseout=function (ev){
		for(var j=0; j<dayLi.length; j++){
			var event=ev||window.event;
			var to=event.toElement||event.relatedTarget;
			//在mouseout事件中to，表示鼠标指向那个元素，也是事件委托类型，和target与srcElement相反
			// alert(to)
			while(to){
				if (this==to) {
					return false;
				};
				to=to.parentNode;
			}
			if(dayLi[j] == this){
				var d=j;
				var imgL=tImg[j].offsetLeft;
				clearInterval(timer17);
				clearInterval(timer18);
				timer17=setTimeout(function (){
					timer18=setInterval(function (){
						imgL++;
						if(imgL>=0){
							tImg[d].style.left=0+'px';
							clearInterval(timer18);
							setTimeout(timer17);
						}
						tImg[d].style.left=imgL+'px';
					},10)
				},1)
			}
		}
	}
}
// ============热门分享============

var f2Con=getclass3('share','share-con')[0];  //获取最外层的类名
var f2Outer=getclass3('share','share-outer')[0];//获取最外层的类名
var f2Inner=getclass3('share','share-inner')[0];//获取里层的的类名（包含了切换的图片）
var timer19=null, timer20=null;  
var todayLi=f2Inner.getElementsByTagName('li');    
var imgi=1;
f2Outer.scrollTop=240;//起始位置
function moveTop(){
	f2Outer.scrollTop+=10;
	if(f2Outer.scrollTop >= (f2Inner.offsetHeight-f2Con.offsetHeight)){
		f2Outer.scrollTop=f2Con.offsetHeight;
	}
	if(f2Outer.scrollTop%f2Con.offsetHeight == 0){
		clearInterval(timer19);
		clearInterval(timer20);
		timer20 = setTimeout(function (){
			timer19=setInterval(moveTop,10);
		},3000)
	}
}
timer19=setInterval(moveTop,10);

// ==========左边楼层数==============
var leftlc=document.getElementById('leftlc');
var lcLi=leftlc.getElementsByTagName('li');
var lcn=getclass3('leftlc','lcn');
var wz=getclass3('leftlc','wz');
var lcSelect=getclass3('leftlc','lc-select');
var lcNum=0;
var scrollT;

function check(){
	if(document.body && document.body.scrollTop){
		scrollT=document.body.scrollTop;
	}else if(document.documentElement && document.documentElement.scrollTop){
		scrollT=document.documentElement.scrollTop;
	}
	if(scrollT >= 1200 && scrollT <=9174){
		leftlc.style.display="block";
		if(scrollT >= 1200 && scrollT <= 2000){
			lcNum = 0;
		}else if(scrollT >= 2000 && scrollT < 2460){
			lcNum = 1;
		}else if(scrollT >= 2460 && scrollT < 3100){
			lcNum = 2;
		}else if(scrollT >= 3100 && scrollT < 3850){
			lcNum = 3;
		}else if(scrollT >= 3850 && scrollT < 4460){
			lcNum = 4;
		}else if(scrollT >= 4460 && scrollT < 5090){
			lcNum = 5;
		}else if(scrollT >= 5090 && scrollT < 5850){
			lcNum = 6;
		}else if(scrollT >= 5850 && scrollT < 6470){
			lcNum = 7;
		}else if(scrollT >= 6470 && scrollT <7070){
			lcNum = 8;
		}else if(scrollT >= 7690 && scrollT < 8450){
			lcNum = 9;
		}else{
			lcNum = 10;
		}
		
		for(var i=0; i<lcLi.length; i++){
			if(i == lcNum){
				lcn[lcNum].style.display="none";
				wz[lcNum].style.display="block";
				lcSelect[lcNum].style.display="none";
			}else{
				lcn[i].style.display="block";
				wz[i].style.display="none";
				lcSelect[i].style.display="none";
			}
		}
	}else{
		leftlc.style.display="none";
	}
}
check();
window.onscroll=function (){
	check();
}
for(var i=0; i<lcLi.length; i++){
	lcLi[i].onmouseover=function (ev){
		var event=ev||window.event;
		var from=event.formElement||event.relatedTarget;
		while(from){
			if(this == from){
				return false;
			}
			from=from.parentNode;
		}
		for(var j=0; j<lcLi.length; j++){
			if(lcLi[j] == this){
			lcn[j].style.display="none";
			wz[j].style.display="block";
			lcSelect[j].style.display="none";
			}
		}
	}
	lcLi[i].onmouseout=function (ev){
		var event=ev||window.event;
		var to=event.toElement||event.relatedTarget;
		while(to){
			if(to == this){
				return false;
			}
			to=to.parentNode;
		}
		for(var j=0; j<lcLi.length; j++){
			if(j != lcNum){
				if(lcLi[j] == this){
					lcn[j].style.display="block";
					wz[j].style.display="none";
					lcSelect[j].style.display="none";
				}
			}else{
				lcn[j].style.display="none";
				wz[j].style.display="none";
				lcSelect[j].style.display="block";
			}
		}
	}
	lcLi[i].onclick=function (){
		for(var j=0; j<lcLi.length; j++){
			if(lcLi[j] == this){
				lcNum =j;
				var newTop;
				//跳转到点击的楼层
				if( j == 0){
					newTop=1800;
				}else if(j == 1){
					newTop=2560;
				}else if(j == 2){
					newTop=3310;
				}else if(j == 3){
					newTop=3950;
				}else if(j == 4){
					newTop=4560;
				}else if(j == 5){
					newTop=5310;
				}else if(j == 6){
					newTop=5920;
				}else if(j == 7){
					newTop=6550;
				}else if(j == 8){
					newTop=7170;
				}else if(j == 9){
					newTop=7920;
				}else{
					newTop=8550;
				}
				if(document.body && document.body.scrollTop){
					document.body.scrollTop=newTop;
				}else if(document.documentElement && document.documentElement.scrollTop){
					document.documentElement.scrollTop=newTop;
				}
				lcn[j].style.display="none";
				wz[j].style.display="none";
				lcSelect[j].style.display="block";
			}else{
				lcn[j].style.display="block";
				wz[j].style.display="block";
				lcSelect[j].style.display="block";
			}
		}
	}
}





