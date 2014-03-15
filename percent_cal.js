function calc(){
	var num1,num2,result;

	num1 = parseFloat(document.form1.txt1.value);
	num2 = parseFloat(document.form1.txt2.value);

	result = (num1*num2/100);

	document.getElementById('ans').innerHTML="RESULT: "+result;
}

function refresh(){
	document.getElementById('ans').innerHTML="Answer";
}