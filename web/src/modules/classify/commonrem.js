(function(e,t){function i(){var i=t.documentElement;n=i.offsetWidth,i.style.fontSize=0.3125*n+"px";var o=parseFloat(e.getComputedStyle(i,null)["font-size"]),u=0.3125*n;o!==u&&(o>u+1||o<u-1)&&(i.style.fontSize="126.4px")}var n,r=function(){setTimeout(function(){i()},300)};i(),e.addEventListener("resize",r)})(window,document);
