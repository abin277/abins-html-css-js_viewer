	//document.getElementById("white").style.display = "none";
								//FINDING RESULT JS AREA
								function result(){
 //Getting The Value From Field    
let result=document.getElementById("field").value
//Printing The Value To The Preview Area
document.getElementById("Preview").innerHTML=result
}
								//END


//Dark Mod

function changeTheme(){
var bdclr = document.body.style;

bdclr.backgroundColor = "#1d2020";
var obj =document.getElementById("field");

document.getElementById("Preview").style.backgroundColor = "white";
obj.setAttribute(
       "style", "color: white; background-color: #4f5656; ");
       document.getElementById("head").style.color ="white";

var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

document.getElementById("dark").style.display = "none";

if (document.getElementById("dark").style.display = "none")
 {
document.getElementById("white").style.display = "block"
 }
else
 {
document.getElementById("dark").style.display = "none";
 }

}


//white mod


function myFunction(){
				
				document.body.style.backgroundColor = "white";
var obj =document.getElementById("field");

document.getElementById("Preview").style.backgroundColor = "white";
obj.setAttribute(
       "style", "color: #000000; background-color: #bfffff; ");
       document.getElementById("head").style.color ="black";

if (document.getElementById("dark").style.display = "block")
 {
document.getElementById("white").style.display = "none"
 }
else
 {
document.getElementById("dark").style.display = "block";
 }
 var x = document.getElementById("snackbar2");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

}
//Font Size (Maximum Size is 24)




function customFontSize(){
let customNum=prompt("Font Size in Px(Default 13px Max 24px)")
if(isNaN(customNum))
 {
 alert("You Have Entered A Wrong Value")
 }
 if (customNum>=25)
 {
alert("The Maximum Font Size is 24")
 }
else
 {
document.getElementById("field").style.fontSize=customNum+"px"
 }
 }


