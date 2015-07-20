// JavaScript Document

var a,b,c,d;

$(document).ready(function(e) {
	$("#bt_start, #bt_new_calc").click(function(e) {
		NewCalc();
    });
    $("#bt_suma").click(function(e) {
        Operar(1);
		$.mobile.changePage("#pg_Result", { transition: "slide", changeHash: false });
    });
	$("#bt_close_app").click(function(e) {
        navigator.app.exitApp();
    });
});

function NewCalc() {
	a=0;
	b=0;
	c=0;
	d=0;
	
	$("#number_num_1").val(0);
	$("#number_num_2").val(0);
	$("#number_den_1").val(0);
	$("#number_den_2").val(0);
	
	$.mobile.changePage("#pg_Calc", { transition: "slide", changeHash: false });	
}

function Operar(operador){
	var resultado=new Array(2);
	
	a= $("#number_num_1").val();
	c= $("#number_num_2").val();
	
	b= $("#number_den_1").val();
	d= $("#number_den_2").val();
	
	var EqualDen = false;
	
	if (b==d) { EqualDen=true; } //mismo denominador
	
	switch (operador) {
		case 2: //resta
			if (EqualDen==true) {
				resultado[0]=a-c;
				resultado[1]=b;
			} else {
				resultado[0]=(a*d)-(b*c);
				resultado[1]=b*d;
			}
			break;
		case 3: //multiplica
			resultado[0]=a*c;
			resultado[1]=b*d;
			break;
		case 4: //divide
			resultado[0]=a*d;
			resultado[1]=b*c;
			break;
		default: //suma			
			if (EqualDen==true) {
				resultado[0]=a+c;
				resultado[1]=b;
			} else {
				resultado[0]=(a*d)+(b*c);
				resultado[1]=b*d;
			}			
			break;
	}
	return resultado;
}