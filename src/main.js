$(function () 
 {    
 	 var count=0,values=[],op="",solved=false,isSetOp=false,isSetTerm =false,term=0;
	  $(document).ready(function(){
	     	
	  	 $('.numbers div:not(.erasers) button').on('click',function(e){
	  	 
	  	 	 if((count==0 || !isSetOp) && !solved){
	  	 	 	 $("#operation")[0].value +=(this.innerHTML);	
	  	 	  }else{
	  	 	  	$("#operation")[0].value =(this.innerHTML);
	  	 	  	isSetOp =false;
	  	 	  	solved = false;
	  	 	  }	

	  	 	isSetTerm = true;
	  	 });

	  	  $('.erasers button').on('click',function(e){
	  	 	 
	  	 	  switch(this.innerHTML){
	  	 	  	case "CE":   $("#operation")[0].value =""; break;
	  	 	  	case "C": 
 				 $(".display")[0].dataset.value ="";
 				 values = [];
	  	 	  	 $("#operation")[0].value ="";
	  	 	  	 break; 
	  	 	  	 default:   var value = $("#operation")[0].value;
	  	 	  	            $("#operation")[0].value = value.substring(0,value.length-1);  break;
	  	 	  }
	  	 });

	  	   $('.operations button').on('click',function(e){
	  	   	  switch(this.innerHTML){
	  	   	  	case '+':
	  	   	  	case '-': op = this.innerHTML; break;
	  	   	  	case '×': op = '*'; break;
	  	   	  	case '÷' : op ='/'; break;  
	  	   	  }
	  	   	  
	  	   	   term= $("#operation")[0].value;

	  	   	   if(this.innerHTML == '='){
	  	   	   	  values.push(term);	
		 		  var compute = eval(values.join(""));
		 		  $("#operation")[0].value = compute;
	  	   	   	  $(".display")[0].dataset.value = "";
	  	   	   	  isSetOp =false;
	  	   	   	  solved =true;
	  	   	   	  isSetTerm =true;	
	  	   	   	  count = 0;
	  	   	   	  values = [];
	  	   	   }else{
	  	   	   		if(isSetTerm){ 
	  	   	  	$(".display")[0].dataset.value += term+this.innerHTML;	
	  	   	  	  count++;
		  	 	  isSetOp = true; 
		  	 	  isSetTerm =false;
		  	 	  if(count ==2 ){
		  	 	    values.push(term);	
		 		    var compute = eval(values.join(""));
		 		    $("#operation")[0].value = compute;
		  	 	    count=1;
 		 			values = [compute,op];
		  	 	  }
		  	 	  else{
		  	 	  	values.push(term+op);
		  	 	  }

	  	   	  }
	  	   	  else{
	  	   	  	$(".display")[0].dataset.value = $(".display")[0].dataset.value.substring(0,$(".display")[0].dataset.value.length-1)+this.innerHTML;	
	  	   	  	values[1] = op;
	  	   	  }
	  	   }
	  	   	  
	  	 });

	  });

	 
});
