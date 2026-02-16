let cart = [];
let total = 0;

function scrollToMenu(){
  document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}

function addToCart(name, price){
  cart.push({name, price});
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
}

function updateCart(){
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item=>{
    const li = document.createElement("li");
    li.innerText = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function checkout(){
  if(cart.length === 0){
    alert("Your cart is empty 😅");
  } else {
    alert("Order placed successfully 🎉🍨\nTotal: ₹" + total);
    cart = [];
    total = 0;
    updateCart();
    document.getElementById("cart-count").innerText = 0;
  }
}

