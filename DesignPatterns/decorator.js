function productPaella(name){
	this.name = name;
}

function decoratorNameProduct(product, description){
	this.product = product;
	this.description = description;

	var allname = this.product.name + " " + this.description;

	return allname
}

function executeDecorator(item){
	
	var itemDecorate = [];

	for(var i=0;i<item.length;i++){
		var productName = new productPaella(item[i]);
		var decorated = new decoratorNameProduct(productName,"La mejor paella de la universidad");
		itemDecorate.push(decorated);
	}
	return itemDecorate;
}