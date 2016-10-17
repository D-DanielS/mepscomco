function desplegar(valor){
	document.getElementById('bgventana').style.display=valor;
	$(document).on('keydown',function(e){
		if(e.which == 27){
			document.getElementById('bgventana').style.display="none";
		}
	});
}


function formPublipan(valor){
	document.getElementById('modal').style.display=valor;
	$(document).on('keydown',function(e){
		if(e.which == 27){
			document.getElementById('modal').style.display="none";
		}
	});
}
