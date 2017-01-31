$(function () 
 {    
 	 var term1=0,term2=0,count=0,op="",isSet=false;
	  $(document).ready(function(){
	     	
	  	 $('.numbers div:not(.erasers) button').on('click',function(e){
	  	 	
	  	 	 if(count==0 || !isSet){
	  	 	 	  $("#operation")[0].value +=(this.innerHTML);	
	  	 	 	  term1= parseInt($("#operation")[0].value);
	  	 	  }else{
	  	 	  	$("#operation")[0].value =(this.innerHTML);	
	  	 	  	isSet=false;
	  	 	  }
	  	 	
	  	 });

	  	  $('.erasers button').on('click',function(e){
	  	 	 
	  	 	  switch(this.value){
	  	 	  	case "CE":  
	  	 	  	case "C":
	  	 	  	case "X":
	  	 	  	default: 
	  	 	  	   $(".display")[0].dataset.value =""; 
	  	 	  	   $("#operation")[0].value ="";
	  	 	  	   count=0;
	  	 	  	 break; 
	  	 	  }
	  	 });

	  	   $('.operations button').on('click',function(e){
	  	   	  op = (this.innerHTML);
	  	   	  var term= $("#operation")[0].value;
	  	 	  $(".display")[0].dataset.value += term;
	  	 	  count++;
	  	 	  isSet =true;
	  	 	  if(count ==2 ){
	  	 		 var compute = eval($(".display")[0].dataset.value);
	  	 		 $("#operation")[0].value = compute;
	  	 		 $(".display")[0].dataset.value = compute+op; 
	  	 		 count=0;
	  	 		 isSet =false;
	  	 	 }else{
	  	 	 	 $(".display")[0].dataset.value +=op;
	  	 	 }	
	  	 });

	  });

});
