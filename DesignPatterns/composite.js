function shoppingCar(typePaella){ 
    this.typePaella = typePaella;
    var arrayElements = [];

    this.compositeProto = function(){
        var objectComposite = {
            add: function(product){
                arrayElements.push(product);
                return arrayElements;
            },

            remove: function (product){

                arrayElements.split(0, arrayElements.length);
                arrayElements.add(product);
                return arrayElements;
            }
        }
        return objectComposite;
    }
    
}
/*
shoppingCar.prototype = {
    add: function(product){
        arrayElements.push(product);
        return arrayElements;
    },

    remove: function (product){

        arrayElements.split(0, arrayElements.length);
        arrayElements.add(product);
        return arrayElements;
    }
}
*/
function buildShoppingCar(type,product){//tipo de producto, producto){    

    var car = new shoppingCar(type); 
    var resultCar;
    resultCar = car.compositeProto().add(product);
    /*
    for (var i = 0; i<=product.length; i++) {
        resultCar = car.compositeProto().add(product);
    }
*/
    return resultCar;
}