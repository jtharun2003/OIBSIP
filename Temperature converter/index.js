function convert(){ 
var type1=document.querySelector('select[name="tem"]').value
var type2=document.querySelector('select[name="temp"]').value
    var deg=document.getElementById("deg").value
    if(deg==''){
        alert("Enter degrees")
    }
    if(type1==type2){
        document.getElementById('disp').value=deg;
    }else if(type1=='Celsius'&&type2=='Fahrenheit'){
        document.getElementById('disp').value=((Number(deg)*9/5)+32).toFixed(2);
    }else if(type1=='Fahrenheit'&&type2=='Celsius'){
        document.getElementById('disp').value=((Number(deg)-32)*5/9).toFixed(2)
    }else if(type1=='Celsius'&&type2=='Kelvin'){
        document.getElementById('disp').value=(Number(deg)+273.15)
    }else if(type1=='Fahrenheit'&&type2=='Kelvin'){
        document.getElementById('disp').value=(((Number(deg)-32)*5/9)+273.15).toFixed(2)
    }else if(type1=='Kelvin'&&type2=='Celsius'){
        document.getElementById('disp').value=(Number(deg)-273.15).toFixed(2);
    }else{
        document.getElementById('disp').value=(((Number(deg)-273.15)*9/5)+32).toFixed(2);
    }
}
function reset(){
    document.getElementById('deg').value="";
    document.getElementById('disp').value="";
}