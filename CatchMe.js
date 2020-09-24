var box=document.getElementById("box");

var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;
// console.log(viewWidth,viewHeight);

box.addEventListener("mouseover",function()
{
	//console.log("Mouse over");
	var boxcoord=box.getBoundingClientRect();
	// console.log(boxcoord);

	var pos=getNewPos(boxcoord.width,boxcoord.height);

	box.style.top=pos.y+"px";
	box.style.left=pos.x+"px";
});

function getNewPos(boxWidth,boxHeight)
{
	var newX = Math.floor((Math.random() * viewWidth) + 1 - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight) + 1 - boxHeight);

 	// var newX = (Math.random())*Math.random()*1000;

  //   var newY = (Math.random())*Math.random()*1000 ;
  //   console.log(newX,newY);



    if (newX<0)
    {
    	newX=0;
    }
    if(newY<0)
    {
    	newY=0;
    }

	return {x:newX , y:newY};





}