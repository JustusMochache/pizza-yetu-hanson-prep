// business logic

function Order(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}
//prototype is like a photocopy of origin document

Order.prototype.fullOrder = function () {
    return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
};
//  margharita with a crust of crispy and with paperoni as topping

function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}


Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
};

//variables
var sizePrice = [1200, 900, 600];
var deliverPrices = [0, 150];


// user interface logic

//we will use jquery for our logic
$(document).ready(function () {
    $('form#myForm').submit(function (event) {

        var pizzaType = $('#type').val();

        var pizzaSize = parseInt($('#size').val());

        var pizzaCrust = $('#crust').val();

        var pizzaTop = $('#top').val();

        var pizzaQty = parseInt($('#qty').val());

        var pizzaPick = parseInt($('#pick').val());


        var price = sizePrice[pizzaSize - 1];


        var DeliveryCost = deliverPrices[pizzaPick - 1];



        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);

        newTotal = new Total(price, pizzaQty, DeliveryCost);

        if (pizzaPick === 1) {
            alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
            alert("your bill is: " + newTotal.finalTotal());
        } else {
                //prompt is to insert a string
                prompt("Enter where you want your pizza to be delivered");

                alert("Your order has been received and it will be delivered. Continue to see your order details");

                alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
                alert("your bill is: " + newTotal.finalTotal());
           
            
        }

    });

});
