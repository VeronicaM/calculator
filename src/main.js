$(function () 
 {    
 	 var count=0,op="",isSet=false;
	  $(document).ready(function(){
	     	
	  	 $('.numbers div:not(.erasers) button').on('click',function(e){
	  	 	if(op!=="" && count ==1 ){
	  	 		 var term = $("#operation")[0].value;
	  	 		 $("#operation")[0].value = eval($(".display")[0].dataset.value+term);
	  	 		 count=0;
	  	 	 }else{
	  	 	 if(count==0){
	  	 	 	 $("#operation")[0].value +=(this.innerHTML);	
	  	 	  }
	  	 	}
	  	 });

	  	  $('.erasers button').on('click',function(e){
	  	 	 
	  	 	  switch(this.value){
	  	 	  	case "CE":  
	  	 	  	case "C":
	  	 	  	case "X":
	  	 	  	default:  $("#operation")[0].value ="";
	  	 	  	 break; 
	  	 	  }
	  	 });

	  	   $('.operations button').on('click',function(e){
	  	   	  op = (this.innerHTML);
	  	   	  var term= $("#operation")[0].value;
	  	 	  $(".display")[0].dataset.value = term1+op;
	  	 	  count++;

	  	 });

	  });

});
