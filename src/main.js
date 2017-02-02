$(function () 
 {    
 	window.onload = function() {
       $('#operation')[0].value = '';
    }
 	 var count=0,values=[],op="",solved=false,isSetOp=false,isSetTerm =false,term=0;
	  function numbersAction(value){
	  	if((count==0 || !isSetOp) && !solved){

	  	 	 	 $("#operation")[0].value +=value;	
		  	 	  }else{
		  	 	  	$("#operation")[0].value =value;
		  	 	  	isSetOp =false;
		  	 	  	solved = false;
		  	 	  }	

		  	 	isSetTerm = true;
	  }
	  $(document).ready(function(){
	     

	  	 $('.numbers div:not(.erasers) button').on('click',function(e){
	  		   switch(this.innerHTML){
	     	         case ".": if($("#operation")[0].value.match(/\./)){break;}
	     	                   else{
	     	                   	  if($("#operation")[0].value ===""){
	     	                   	  	numbersAction(0+this.innerHTML)
	     	                   	  }
	     	                   	  else{
	     	                   	  	numbersAction(this.innerHTML);
	     	                   	  }
	     	                   	  break;
	     	                   }   
	     	            
	     	 		 case "0": 
	         	    	if($("#operation")[0].value.charAt(0) ==="")
	         	    	{
	         	    		break;
	         	    	}  
			     	default:
			     	    numbersAction(this.innerHTML);
			     	    break;
			     	   	
			     }		 	 
	  	 	 
	  	 	 
	  	 });

	  	  $('.erasers button').on('click',function(e){
	  	 	 
	  	 	  switch(this.innerHTML){
	  	 	  	case "CE":   
	  	 	  	$("#operation")[0].value ="0";
	  	 	  	 isSetTerm=true; 
	  	 	  	break;
	  	 	  	case "C": 
 				 $(".display")[0].dataset.value ="";
 				 values = [];
	  	 	  	 $("#operation")[0].value ="0";
	  	 	  	 isSetTerm=true;
	  	 	  	 break; 
	  	 	  	 default:   var value = $("#operation")[0].value;
	  	 	  	        
	  	 	  	            $("#operation")[0].value = value.substring(0,value.length-1);  
	  	 	  	            if($("#operation")[0].value === ""){
	  	 	  	            $("#operation")[0].value = 0; 
	  	 	  	              isSetTerm=true;
	  	 	  	            }
	  	 	  	            break;
	  	 	  }
	  	 });

	  	   $('.operations button').on('click',function(e){
	  	   	  switch(this.innerHTML){
	  	   	  	case '+':
	  	   	  	case '-': op = this.innerHTML; break;
	  	   	  	case '×': op = '*'; break;
	  	   	  	case '÷' : op ='/'; break;  
	  	   	  }
	  	   	  
	  	   	   term= $("#operation")[0].value.charAt($("#operation")[0].value.length-1) === "." ? $("#operation")[0].value.substring(0,$("#operation")[0].value.length-1):$("#operation")[0].value;

	  	   	   if(this.innerHTML == '=' &&  $("#operation")[0].value!==""){
	  	   	   	  values.push(term);	
		 		  var compute = eval(values.join(""));
		 		  $("#operation")[0].value = +(compute).toFixed(10);
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
			 		    $("#operation")[0].value = +(compute).toFixed(10);
			  	 	    count=1;
	 		 			values = [compute,op];
			  	 	  }
			  	 	  else{
			  	 	  	values.push(term+op);
			  	 	  }
	  	   	    }
	  	   	     else if( $("#operation")[0].value!==""){
	  	   	     	 $(".display")[0].dataset.value = $(".display")[0].dataset.value.substring(0,$(".display")[0].dataset.value.length-1)+this.innerHTML;	
	  	   	  	     values[1] = op;
	  	   	     }
	  	   }
	  	   	  
	  	 });

	  });

	 
});
