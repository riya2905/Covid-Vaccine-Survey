function validateform()
	{
		var name = document.myform.field1;
		var gender = document.myform.field2;
		var age = document.myform.field3;
		var flag1= true, flag2= true;
		if (name.value==null || name==""){  
		    var x = document.getElementById("nameSpan");
		    x.innerHTML = 'Please enter name'
		    x.style.color = 'red';
		    flag1=false;
		}
		if(name.value.length<6){  
		    var x = document.getElementById("nameSpan");
		    x.innerHTML = 'Name must be atleast 6 characters long';
		    x.style.color = 'red';
		    flag1=false;  
		}
		if(parseInt(age.value)<18 || parseInt(age.value)>60)
	    {
	        var x = document.getElementById("ageSpan");
	        x.innerHTML = 'Age must be between 18 and 60';
	        x.style.color = 'red';
	        flag2= false;
	    }
		if (flag1 && flag2)
		{
			return show();
		}
		else
			return false;
		
	}
function show()
	{
		var name = document.myform.field1.value;
		var gender = document.myform.field2.value;
		var age = document.myform.field3.value;
		var vaccine= document.myform.field4.value;
		var result=vaccine.localCompare("Covaxin");
		document.getElementById("d").innerHTML="Name : "+name+" <br> Gender : "+gender+" <br> Age : "+age+" <br> Vaccine : "+vaccine;
		if (result==0)
		{
			var url="http://localhost:3000/covaxin";
			var http =  new XMLHttpRequest();
			http.open("GET",url);
			http.send();
			http.onreadystatechange=function() {
			if (http.readyState==4){
				var responseContent= http.responseText;
				var jsData = JSON.parse(responseContent);
				var htmlContent = "<table><tr><th>Name</th><th>SecondDose</th><th>SideEffects</th><th>Precautions</th></tr>";
				for(var x=0; x<jsData.length;x++)
				{
					htmlContent = htmlContent+"<tr><td>"+jsData[x].name+"</td><td>"+jsData[x].seconddose+"</td><td>"+jsData[x].sideeffects+"</td><td>"+jsData[x].precautions+"</td></tr>";
				}
				document.getElementById("d1").innerHTML=htmlContent+"</table>";
			}
		}
		}
		else
		{
			var url="http://localhost:3000/covidshield";
			var http =  new XMLHttpRequest();
			http.open("GET",url);
			http.send();
			http.onreadystatechange=function() {
			if (http.readyState==4){
				var responseContent= http.responseText;
				var jsData = JSON.parse(responseContent);
				var htmlContent = "<table><tr><th>Name</th><th>SecondDose</th><th>SideEffects</th><th>Precautions</th></tr>";
				for(var x=0; x<jsData.length;x++)
				{
					htmlContent = htmlContent+"<tr><td>"+jsData[x].name+"</td><td>"+jsData[x].seconddose+"</td><td>"+jsData[x].sideeffects+"</td><td>"+jsData[x].precautions+"</td></tr>";
				}
				document.getElementById("d1").innerHTML=htmlContent+"</table>";
			}
		}

		}
		
	}
	