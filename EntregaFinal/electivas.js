function getValueM(ValueM){
	this.ValueM = ValueM.value;
}

function constructor(){
	this.materias = [
	{nombre:"Celula | 07:00 - 10:00 | L,J", disp:"si",ban:'0'},
	{nombre:"Taller de Radio | 08:00 - 11:00 | M", disp:"si",ban:'0'},
	{nombre:"Fundamentos de Matematicas | 11:00 - 13:00 | L,Mi,V", disp:"si",ban:'0'},
	{nombre:"Neuropsicologia | 07:00 - 09:00 | Mi,V", disp:"si",ban:'0'}
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
				document.getElementById("l7").innerHTML = "Celula";
				document.getElementById("l8").innerHTML = "Celula";
				document.getElementById("l9").innerHTML = "Celula";
				document.getElementById("j7").innerHTML = "Celula";
				document.getElementById("j8").innerHTML = "Celula";
				document.getElementById("j9").innerHTML = "Celula";
				this.materias[0].ban = '1';
			}
			else{
				document.getElementById("l7").innerHTML = "-";
				document.getElementById("l8").innerHTML = "-";
				document.getElementById("l9").innerHTML = "-";
				document.getElementById("j7").innerHTML = "-";
				document.getElementById("j8").innerHTML = "-";
				document.getElementById("j9").innerHTML = "-";
				this.materias[0].ban = '0';
			}
		}
	}
	if(this.ValueM == "materia2"){
		if(this.materias[1].disp == "si"){
			if(this.materias[0].ban == '0'){
				document.getElementById("m8").innerHTML = "Taller de Radio";
				document.getElementById("m9").innerHTML = "Taller de Radio";
				document.getElementById("m10").innerHTML = "Taller de Radio";
				this.materias[0].ban = '1';
			}
			else{
				document.getElementById("m8").innerHTML = "-";
				document.getElementById("m9").innerHTML = "-";
				document.getElementById("m10").innerHTML = "-";
				this.materias[0].ban = '0';
			}
		}
	}
	if(this.ValueM == "materia3"){
		if(this.materias[2].disp == "si"){
			if(this.materias[0].ban == '0'){
				document.getElementById("l11").innerHTML = "Fundamentos de Matematicas";
				document.getElementById("l12").innerHTML = "Fundamentos de Matematicas";
				document.getElementById("mi11").innerHTML = "Fundamentos de Matematicas";
				document.getElementById("mi12").innerHTML = "Fundamentos de Matematicas";
				document.getElementById("j11").innerHTML = "Fundamentos de Matematicas";
				document.getElementById("j12").innerHTML = "Fundamentos de Matematicas";
				this.materias[0].ban = '1';
			}
			else{
				document.getElementById("l11").innerHTML = "-";
				document.getElementById("l12").innerHTML = "-";
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
				document.getElementById("mi7").innerHTML = "Neuropsicologia";
				document.getElementById("mi8").innerHTML = "Neuropsicologia";
				document.getElementById("v7").innerHTML = "Neuropsicologia";
				document.getElementById("v8").innerHTML = "Neuropsicologia";
				this.materias[0].ban = '1';
			}
			else{
				document.getElementById("mi7").innerHTML = "-";
				document.getElementById("mi8").innerHTML = "-";
				document.getElementById("v7").innerHTML = "-";
				document.getElementById("v8").innerHTML = "-";
				this.materias[0].ban = '0';
			}
		}
	}
}

constructor();