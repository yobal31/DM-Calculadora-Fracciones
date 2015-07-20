// JavaScript Document

$(document).ready(function(e) {
    $("#bt_suma").click(function(e) {
        Operar(1);
    });
});

var a,b,c,d;

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
		
			break;
		case 4: //divide
		
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