function getValueM(ValueM){
	this.ValueM = ValueM.value;
}

function constructor(){
	this.materias = [
	{nombre:"Taller de Guitarra | 08:00 - 09:00 | L,V", disp:"si",ban:'0'},
	{nombre:"Basketball | 09:00 - 11:00 | L,J", disp:"si",ban:'0'},
	{nombre:"Tenis de mesa | 11:00 - 13:00 | Mi,J", disp:"si",ban:'0'},
	{nombre:"Danza contemporanea | 07:00 - 08:00 | M,V", disp:"si",ban:'0'}
	];
	console.log(this.materias);
	onInit();
}

function onInit(){

	
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

function matricular(){
	if(this.ValueM == "materia1"){
		if(this.materias[0].disp == "si"){
			if(this.materias[0].ban == '0'){
				document.getElementById("l8").innerHTML = "Taller de Guitarra";
				document.getElementById("v8").innerHTML = "Taller de Guitarra";
				this.materias[0].ban = '1';
			}
			else{
				document.getElementById("l8").innerHTML = "-";
				document.getElementById("v8").innerHTML = "-";
				this.materias[0].ban = '0';
			}
		}
	}
	if(this.ValueM == "materia2"){
		if(this.materias[1].disp == "si"){
			if(this.materias[0].ban == '0'){
				document.getElementById("l9").innerHTML = "Basketball";
				document.getElementById("l10").innerHTML = "Basketball";
				document.getElementById("j9").innerHTML = "Basketball";
				document.getElementById("j10").innerHTML = "Basketball";
				this.materias[0].ban = '1';
			}
			else{
				document.getElementById("l9").innerHTML = "-";
				document.getElementById("l10").innerHTML = "-";
				document.getElementById("j9").innerHTML = "-";
				document.getElementById("j10").innerHTML = "-";
				this.materias[0].ban = '0';
			}
		}
	}
	if(this.ValueM == "materia3"){
		if(this.materias[2].disp == "si"){
			if(this.materias[0].ban == '0'){
				document.getElementById("mi11").innerHTML = "Tenis de Mesa";
				document.getElementById("mi12").innerHTML = "Tenis de Mesa";
				document.getElementById("j11").innerHTML = "Tenis de Mesa";
				document.getElementById("j12").innerHTML = "Tenis de Mesa";
				this.materias[0].ban = '1';
			}
			else{
				document.getElementById("mi11").innerHTML = "-";
				document.getElementById("mi12").innerHTML = "-";
				document.getElementById("j11").innerHTML = "-";
				document.getElementById("j12").innerHTML = "-";
				this.materias[0].ban = '0';
			}
		}
	}
	if(this.ValueM == "materia4"){
		if(this.materias[3].disp == "si"){
			if(this.materias[0].ban == '0'){
				document.getElementById("m7").innerHTML = "Danza contemporanea";
				document.getElementById("v7").innerHTML = "Danza contemporanea";
				this.materias[0].ban = '1';
			}
			else{
				document.getElementById("m7").innerHTML = "-";
				document.getElementById("v7").innerHTML = "-";
				this.materias[0].ban = '0';
			}
		}
	}
}

constructor();