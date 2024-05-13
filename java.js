function showOptions(item) {
    var optionsDiv = document.getElementById(item.toLowerCase() + "Options");
    optionsDiv.style.display = "block";
  }

  function addToCart(item) {
    var filling =document.getElementById("type_" + item.toLowerCase()) ? document.getElementById("type_" + item.toLowerCase()).value :document.getElementById("kind_" + item.toLowerCase()) ? document.getElementById("kind_" + item.toLowerCase()).value :document.getElementById("filling_" + item.toLowerCase()) ? document.getElementById("filling_" + item.toLowerCase()).value : document.getElementById("sauce_" + item.toLowerCase()) ? document.getElementById("sauce_" + item.toLowerCase()).value : document.getElementById("spiciness_" + item.toLowerCase()) ? document.getElementById("spiciness_" + item.toLowerCase()).value : document.getElementById("topping_" + item.toLowerCase()) ? document.getElementById("topping_" + item.toLowerCase()).value : document.getElementById("extras_" + item.toLowerCase()) ? document.getElementById("extras_" + item.toLowerCase()).value : document.getElementById("doneness_" + item.toLowerCase()).value;
    var quantity = parseInt(document.getElementById("quantity_" + item.toLowerCase()).value);
   
    // Logic to add item to cart
    var order = {
      item: item,
      filling: filling,
      quantity: quantity,
      
    };

    // Display order details
    var orderList = document.getElementById("orderList");
    var orderItem = document.createElement("li");
    orderItem.textContent = `${order.quantity} x ${order.item} (${order.filling})`;

    orderList.appendChild(orderItem);

    // Show order details section
    var orderDetails = document.getElementById("orderDetails");
    orderDetails.style.display = "block";
  }