// JavaScript Document

var a,b,c,d;

$(document).ready(function(e) {
	$("#number_num_1").numeric();
	$("#number_num_2").numeric();
	$("#number_den_1").numeric();
	$("#number_den_2").numeric();
	
	$("#bt_start, #bt_new_calc").click(function(e) {
		NewCalc();
    });
    $("#bt_suma,#bt_resta,#bt_multiplica,#bt_divide").click(function(e) {
        Resultado($(this).data("oper"));
		$.mobile.changePage("#pg_Result", { transition: "slide", changeHash: false });
    });
	$("#bt_suma_r,#bt_resta_r,#bt_multiplica_r,#bt_divide_r").click(function(e) {
        Resultado($(this).data("oper"));
		//$.mobile.changePage("#pg_Result", { transition: "slide", changeHash: false });
    });
	$("#bt_close_app,#bt_close_app2,#bt_close_app3").click(function(e) {
        if(navigator.app){
        	navigator.app.exitApp();
		}else if(navigator.device){
			navigator.device.exitApp();
		}
	
    });
});

function NewCalc() {
	a=0;
	b=0;
	c=0;
	d=0;
	
	$("#number_num_1").val("");
	$("#number_num_2").val("");
	$("#number_den_1").val("");
	$("#number_den_2").val("");
	
	$.mobile.changePage("#pg_Calc", { transition: "slide", changeHash: false });	
}

function Resultado(operador) {
	var r = new Array(4);
	r=Operar(operador);
	
	var sim = new Array(2);
	sim = Simplificar(r[0],r[1]);
	
	$("#sp_signo").text(operador);
	
	$("#sp_num_1").text(a);
	$("#sp_num_2").text(c);
	
	$("#sp_den_1").text(b);
	$("#sp_den_2").text(d);
	
	$("#sp_num_3").text(r[2]);
	$("#sp_den_3").text(r[3]);
	
	$("#sp_num_4").text(r[0]);
	$("#sp_den_4").text(r[1]);
	
	$("#sp_num_simp,#sp_num_simp2").text(sim[0]);
	$("#sp_den_simp,#sp_den_simp2").text(sim[1]);
}

function Operar(operador){
	var resultado=new Array(4);
	
	Validar();
	
	a= parseInt($("#number_num_1").val());
	c= parseInt($("#number_num_2").val());
	
	b= parseInt($("#number_den_1").val());
	d= parseInt($("#number_den_2").val());
	
	var EqualDen = false;
	
	if (b==d) { EqualDen=true; } //mismo denominador
		
	switch (operador) {
		case "-": //resta
			if (EqualDen==true) {
				resultado[0]=a-c;
				resultado[1]=b;
				resultado[2]=a+" - "+c;
				resultado[3]=b;
			} else {
				resultado[0]=(a*d)-(b*c);
				resultado[1]=b*d;
				resultado[2]="("+a+" x "+d+")"+" - "+"("+b+" x "+c+")";
				resultado[3]=b+" x "+d;
			}
			break;
		case "x": //multiplica
			resultado[0]=a*c;
			resultado[1]=b*d;
			resultado[2]=a+" x "+c;
			resultado[3]=b+" x "+d;
			break;
		case "/": //divide
			resultado[0]=a*d;
			resultado[1]=b*c;
			resultado[2]=a+" x "+d;
			resultado[3]=b+" x "+c;
			break;
		default: //suma			
			if (EqualDen==true) {
				resultado[0]=a+c;
				resultado[1]=b;
				resultado[2]=a+" + "+c;
				resultado[3]=b;
			} else {
				resultado[0]=(a*d)+(b*c);
				resultado[1]=b*d;
				resultado[2]="("+a+" x "+d+")"+" + "+"("+b+" x "+c+")";
				resultado[3]=b+" x "+d;
			}			
			break;
	}
	return resultado;
}

function Validar() {
	if($("#number_den_1").val()==0) {$("#number_den_1").val(1)}
	if($("#number_den_2").val()==0) {$("#number_den_2").val(1)}
}

function Simplificar(a,b) {
	 var M = mcd(a,b);
	 var sim = new Array(2);
	 sim[0]=a;sim[1]=b;
	 sim[0] /=M;
	 sim[1] /=M;
	 return sim;
}

function mcd(a,b) {
	var r = a % b;
	if(r==0) {
	  return b;
	 } else {
	  return mcd(b,r);
	 }
}