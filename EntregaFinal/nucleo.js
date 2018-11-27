function getValuefilter(filter){
	this.filter = filter.value;
}

function getValueM(ValueM){
	this.ValueM = ValueM.value;
}


function constructor(){
	this.materias = [
	{nombre:"Arboles y Grafos | 08:00 - 10:00 | M,J,V | Camilo Rocha", disp:"si",ban:'0'},
	{nombre:"Diseno de Interfaces | 10:00 - 12:00 | L,Mi,V | Andres Newball", disp:"si",ban:'0'},
	{nombre:"Logica Digital | 11:00 - 13:00 | M,J| Maribel Sacanamboy", disp:"no",ban:'0'},
	{nombre:"Cinematica y Dinamica | 07:00 - 09:00 | L,Mi,V | Luis Pedraza", disp:"si",ban:'0'}
	];
	console.log(this.materias);
	onInit();
}
function onInit(){
/*
	document.getElementById("materia1").innerHTML = this.materias[0].nombre;
	document.getElementById("materia2").innerHTML = this.materias[1].nombre;
	document.getElementById("materia3").innerHTML = this.materias[2].nombre;
	document.getElementById("materia4").innerHTML = this.materias[3].nombre;
*/	

	let materia = document.getElementById("Materia");
	for (var i = 0; i < this.materias.length; i++){
		if(this.materias[i].disp=="si"){
		materia.innerHTML += ("<option id="+String.fromCharCode(34)+"materia"+(i+1)+String.fromCharCode(34)+" value="+String.fromCharCode(34)+"materia"+(i+1)+String.fromCharCode(34)+">"+this.materias[i].nombre+"</option>");
		}
		else{	
		materia.innerHTML += ("<option id="+String.fromCharCode(34)+"materia"+(i+1)+String.fromCharCode(34)+" value="+String.fromCharCode(34)+"materia"+(i+1)+String.fromCharCode(34)+" style="+String.fromCharCode(34)+"color: red"+String.fromCharCode(34)+">"+"No disponible - "+this.materias[i].nombre+"</option>");
		}
	}


}

function applyFilter(){
	let materia = document.getElementById("Materia");
	materia.innerHTML = "";
	if(this.filter == "filter1"){
		for(var i=0;i<this.materias.length;i++){
			if(this.materias[i].disp == "si"){
				materia.innerHTML += ("<option id="+String.fromCharCode(34)+"materia"+(i+1)+String.fromCharCode(34)+" value="+String.fromCharCode(34)+"materia"+(i+1)+String.fromCharCode(34)+">"+this.materias[i].nombre+"</option>");
			}
		}
	}
	else{
		for(var i=0;i<this.materias.length;i++){
			if(this.materias[i].disp == "no"){
				materia.innerHTML += ("<option id="+String.fromCharCode(34)+"materia"+(i+1)+String.fromCharCode(34)+" value="+String.fromCharCode(34)+"materia"+(i+1)+String.fromCharCode(34)+" style="+String.fromCharCode(34)+"color: red"+String.fromCharCode(34)+">"+this.materias[i].nombre+"</option>");
			}
		}
	}
}

function matricular(){
	if(this.ValueM == "materia1"){
		if(this.materias[0].disp == "si"){
			if(this.materias[0].ban == '0' && this.materias[3].ban == '0'){
				document.getElementById("m8").innerHTML = "Arboles y Grafos";
				document.getElementById("m9").innerHTML = "Arboles y Grafos";
				document.getElementById("j8").innerHTML = "Arboles y Grafos";
				document.getElementById("j9").innerHTML = "Arboles y Grafos";
				document.getElementById("v8").innerHTML = "Arboles y Grafos";
				document.getElementById("v9").innerHTML = "Arboles y Grafos";
				this.materias[0].ban = '1';
			}
			else if(this.materias[0].ban == '1' && this.materias[3].ban == '0'){
				document.getElementById("m8").innerHTML = "-";
				document.getElementById("m9").innerHTML = "-";
				document.getElementById("j8").innerHTML = "-";
				document.getElementById("j9").innerHTML = "-";
				document.getElementById("v8").innerHTML = "-";
				document.getElementById("v9").innerHTML = "-";
				this.materias[0].ban = '0';
			}
			else{ alert("Ya tiene una materia matriculada en el horario solicitado");}
		}
	}
	if(this.ValueM == "materia2"){
		if(this.materias[1].disp == "si"){
			if(this.materias[1].ban == '0'){
				document.getElementById("l10").innerHTML = "Diseno de Interfaces";
				document.getElementById("l11").innerHTML = "Diseno de Interfaces";
				document.getElementById("mi10").innerHTML = "Diseno de Interfaces";
				document.getElementById("mi11").innerHTML = "Diseno de Interfaces";
				document.getElementById("v10").innerHTML = "Diseno de Interfaces";
				document.getElementById("v11").innerHTML = "Diseno de Interfaces";
				this.materias[1].ban = '1';
			}
			else{
				document.getElementById("l10").innerHTML = "-";
				document.getElementById("l11").innerHTML = "-";
				document.getElementById("mi10").innerHTML = "-";
				document.getElementById("mi11").innerHTML = "-";
				document.getElementById("v10").innerHTML = "-";
				document.getElementById("v11").innerHTML = "-";
				this.materias[1].ban = '0';
			}
		}
	}
	if(this.ValueM == "materia3"){
		if(this.materias[2].disp == "si"){
			if(this.materias[2].ban == '0'){
				document.getElementById("m11").innerHTML = "Logica Digital";
				document.getElementById("m12").innerHTML = "Logica Digital";
				document.getElementById("j11").innerHTML = "Logica Digital";
				document.getElementById("j12").innerHTML = "Logica Digital";
				this.materias[2].ban = '1';
			}
			else{
				document.getElementById("m11").innerHTML = "-";
				document.getElementById("m12").innerHTML = "-";
				document.getElementById("j11").innerHTML = "-";
				document.getElementById("j12").innerHTML = "-";
				this.materias[2].ban = '0';
			}
		}
	}
	if(this.ValueM == "materia4"){
		if(this.materias[3].disp == "si"){
			if(this.materias[3].ban == '0' && this.materias[0].ban == '0'){
				document.getElementById("l7").innerHTML = "Cinematica y Dinamica";
				document.getElementById("l8").innerHTML = "Cinematica y Dinamica";
				document.getElementById("mi7").innerHTML = "Cinematica y Dinamica";
				document.getElementById("mi8").innerHTML = "Cinematica y Dinamica";
				document.getElementById("v7").innerHTML = "Cinematica y Dinamica";
				document.getElementById("v8").innerHTML = "Cinematica y Dinamica";
				this.materias[3].ban = '1';
			}
			else if(this.materias[3].ban == '1' && this.materias[0].ban == '0'){
				document.getElementById("l7").innerHTML = "-";
				document.getElementById("l8").innerHTML = "-";
				document.getElementById("mi7").innerHTML = "-";
				document.getElementById("mi8").innerHTML = "-";
				document.getElementById("v7").innerHTML = "-";
				document.getElementById("v8").innerHTML = "-";
				this.materias[3].ban = '0';
			}
			else{ alert("Ya tiene una materia matriculada en el horario solicitado");}
		}
	}
}

constructor();