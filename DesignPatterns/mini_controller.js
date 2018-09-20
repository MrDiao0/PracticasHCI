let menuItems = ["Mariscos","Vegetariana","Carne y Pollo"]

/*Esta funcion permite obtener el valor del select de html(onchange)*/
let originalPrice;
let ivaCalculate;
let aux = [];
let addit = true

function getValueType (paellaType){

	this.paellaType = paellaType;

}

function getValuePrice(paellaPrice){

	this.paellaPrice = paellaPrice;
	ivaCalculate = Math.round((this.paellaPrice.value * 19) / 100);
	originalPrice = this.paellaPrice.value - ivaCalculate;
}

function getValueCoin(typeCoin){
	this.typeCoin = typeCoin;
}


function buildPaella(){
/*
	var factory = execute_factory(this.paella_type.value);
	var paella_product = generate_paella(factory.type);
	var Ingredientes = produceBase()
	console.log(Ingredientes)

	noIVAPrice = value_price - value_price*0.19
	IVA = value_price*0.19

	if(currency == "COP"){
		console.log("Valor sin IVA: ", value_price)
		console.log("IVA: ",IVA)
		console.log("Total: ",value_price)
	}
	if(currency == "USD"){
		console.log("Valor sin IVA: ",calculatePaellaPrice.calculateDolarVal(noIVAPrice))
		console.log("IVA: ",calculatePaellaPrice.calculateDolarVal(IVA))
		console.log("Total: ",calculatePaellaPrice.calculateDolarVal(value_price))
	}
	if(currency == "EUR"){
		console.log("Valor sin IVA: ",calculatePaellaPrice.calculateEuroVal(noIVAPrice))
		console.log("IVA: ",calculatePaellaPrice.calculateEuroVal(IVA))
		console.log("Total: ",calculatePaellaPrice.calculateEuroVal(value_price))
	}
*/

	/*Construccion de paella*/
	var factory = executeFactory(this.paellaType.value);
	var paellaProduct = generatePaella(factory.type);
	console.log(paellaProduct);

	/*llamamdo a patrones de diseño prototype y singleton*/
	var buildBase = produceBase(); //prototype
	var executeSingle = executeSingleton();
	console.log(buildBase);
	
	/*validacion de tipo de moneda para llamado del adaptador*/
	if(this.typeCoin.value == "dolar"){
		console.log("Precio en dolares con iva " + new CalculatePriceDolar().newCalculateDolar(originalPrice));
	}else if(this.typeCoin.value == "euro"){
		console.log("Precio en dolares con iva " + new CalculatePriceEuro().newCalculateEuro(originalPrice));
	}

	console.log("Precio Original " + originalPrice);
	console.log("Precio Iva " + ivaCalculate);

	var car = new buildShoppingCar(factory.type, paellaProduct)
	for (var i = 0; i < aux.length; i++) {
		if(aux[i].typePaella == car.typePaella){ aux.splice(i,1)}
	}
	aux.push(car);
	console.log(aux);
 	
 	var item = new executeDecorator(menuItems);
 	console.log(item);
 	var singleton = new executeSingleton();
 	console.log(singleton);
}