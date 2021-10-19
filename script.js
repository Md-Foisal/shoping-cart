//Button handler Function---------------------------------------------
function wantedProduct (product, increase) {
  const productInputQuantity = quantity (product);
  let productInputNewQuantity = 0;
  if (increase == true) {
    productInputNewQuantity = productInputQuantity + 1;
  }if (increase == false & productInputQuantity > 0) {
    productInputNewQuantity = productInputQuantity - 1;
  }
  document.getElementById(product + "-quantity").value = productInputNewQuantity;
  let productPrice = 0;
  if (product == "phn") {
    productPrice = productInputNewQuantity * 1219;
  }if (product == "case") {
    productPrice = productInputNewQuantity * 59;
  }
  document.getElementById(product + "-price").innerText = "$" + productPrice;
  totalPrice ();
};

//Sub Total, Tax and Total goes here-------------------------------------
function totalPrice () {
  const phoneQuantity = quantity ("phn");
  const caseQuantity = quantity ("case");
  const totalProductPrice = phoneQuantity * 1219 + caseQuantity * 59;
  document.getElementById("total-product-price").innerText = "$" + totalProductPrice;
  const tax = Math.round (totalProductPrice * 0.1);
  document.getElementById("tax").innerText = tax;
  const totalWithTax = totalProductPrice + tax;
  document.getElementById("total").innerText = "$" + totalWithTax;
}

//Quantity select and number convertor function---------------------
function quantity (product) {
  const productInput = document.getElementById(product + "-quantity");
  const quantity = parseInt(productInput.value);
  return quantity;
}
