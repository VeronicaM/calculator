$(function(){var count=0,values=[],op="",solved=!1,isSetOp=!1,isSetTerm=!1,term=0;$(document).ready(function(){$(".numbers div:not(.erasers) button").on("click",function(e){0!=count&&isSetOp||solved?($("#operation")[0].value=this.innerHTML,isSetOp=!1,solved=!1):$("#operation")[0].value+=this.innerHTML,isSetTerm=!0}),$(".erasers button").on("click",function(e){switch(this.innerHTML){case"CE":$("#operation")[0].value="";break;case"C":$(".display")[0].dataset.value="",values=[],$("#operation")[0].value="";break;default:var t=$("#operation")[0].value;$("#operation")[0].value=t.substring(0,t.length-1)}}),$(".operations button").on("click",function(e){switch(this.innerHTML){case"+":case"-":op=this.innerHTML;break;case"×":op="*";break;case"÷":op="/"}if(term=$("#operation")[0].value,"="==this.innerHTML){values.push(term);var compute=eval(values.join(""));$("#operation")[0].value=compute,$(".display")[0].dataset.value="",isSetOp=!1,solved=!0,isSetTerm=!0,count=0,values=[]}else if(isSetTerm)if($(".display")[0].dataset.value+=term+this.innerHTML,count++,isSetOp=!0,isSetTerm=!1,2==count){values.push(term);var compute=eval(values.join(""));$("#operation")[0].value=compute,count=1,values=[compute,op]}else values.push(term+op);else $(".display")[0].dataset.value=$(".display")[0].dataset.value.substring(0,$(".display")[0].dataset.value.length-1)+this.innerHTML,values[1]=op})})});