function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    var arrayElements = [];

    this.compositeProto = function(){
        var objectComposite = {
            add: function(product){
                arrayElements.push(product);
                return arrayElements
            },

            remove: function (product){

                arrayElements.split(0, arrayElements.length);
                arrayElements.add(product);
            }
        }
        return objectComposite;
    }
    
}

function buildShoppingCar(type,product){//tipo de producto, producto){    
    var car = new shoppingCar(type); 
    //var productType = new shoppingCar(type);
    return car.compositeProto().add(product);    
}