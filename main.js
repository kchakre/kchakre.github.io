	function calc(){
		var num1,num2,result;
		num1 = parseInt(document.form1.txt1.value);
		num2 = parseInt(document.form1.txt2.value);

		result = (num1*num2/100);

		alert("RESULT: "+result);
	}