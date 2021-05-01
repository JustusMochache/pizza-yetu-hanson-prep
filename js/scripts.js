// business logic

function Order(type, size, crust, topping){
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}
//prototype is like a photocopy of origin document

Order.prototype.fullOrder = function(){
     return this.type + " With a crust of " + this.crust + " and with " + this.topping + "as topping";
    };

    //  margharita with a crust of crispy and with paperoni as topping

function Total(price, quantity, delivery){
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}

Total.prototype.finalTotal = function(){
    return this.price * this.quantity + this.delivery;
};


var sizePrice = [1200, 900, 600];
var deliveryPrice = [ 0, 150];
var crustPrice = [300, 400, 500,600]

// user interface logic

// use Jquery in user logic
$(document).ready(function(event){
    // event.preventDefault();

    var pizzaType = $('#type').val();
    var pizzaSize = parseInt('#size').val();
    var pizzaCrust = $('#crust').val();
    var pizzaTop = $('#top').val();
    var pizzaPick = parseInt('#pick').val();
    var price = sizePrice[pizzaSize-1];
    var deliveryCost = deliveryPrice[pizzaPick-1];


    newOrder = new Order(p)











})


