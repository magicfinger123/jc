class Cart {
  constructor(amount, qty, itemName) {
    this.amount = amount;
    this.qty = qty;
    this.itemName = itemName;
  }
}

var newCartInstance = new Cart(100,10,'test');
newCartInstance.amount;
newCartInstance.qty



var cartList = [];

function addToCart(a,q,i){
	let cartItem = new Cart(a,q,i);
	cartList.push(cartItem);
	console.log(cartList.length);
}

function viewCart(){
	document.getElementById("xx").innerHTML = "";
	cartList.forEach(updateCarts);
}

function updateCarts(item, index){
  var text = '<div class="row border-top border-bottom">'+
               '<div class="row main align-items-center">'+
                    '<div class="col-2"><img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg"></div><div class="col"><div class="row text-muted">Shirt</div><div class="row">'+item.itemName+'</div></div>'+
                    '<div class="col"> <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a> </div>'+
                    '<div class="col">&euro;'+item.amount+' <span class="close">&#10005;</span></div>'+
                '</div>'+
            '</div>';
document.getElementById("xx").innerHTML += text;

}