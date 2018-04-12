function deleteItem(e){
  var item = e.currentTarget.parentNode.parentNode;
  var itemLine = item.parentNode;
  itemLine.removeChild(item)
}



// function getPriceByProduct(){

// }



// function updatePriceByProduct(productPrice, index){

// }



function getTotalPrice() {
 
var unitPrice = document.getElementsByClassName("costPerUnit");
var unitPriceArray = [];
for (var i=0; i < unitPrice.length; i++) {
  var unitPriceValue = unitPrice[i].innerText;
  // console.log(unitPriceValue);
  unitPriceArray.push(unitPriceValue);
  // console.log(unitPriceArray) 
}

var unitQuantity = document.getElementsByClassName("itemQuantity");
var unitQuantityArray = [];
for (var i=0; i < unitQuantity.length; i++) {
  var unitQuantityValue = unitQuantity[i].value;
  // console.log(unitQuantityValue);
  unitQuantityArray.push(unitQuantityValue);
  // console.log(unitQuantityArray);
  if (unitQuantityValue === "") {
    unitQuantityValue = "0.00";
  }
}

var items = document.getElementsByClassName("items");
for (var i=0; i < items.length; i++) {
  var totalItemPrice = unitPrice[i].value * unitQuantity[i].value;
  // console.log(totalItemPrice);
}

var priceByProduct = document.getElementsByClassName("totalPrice");
var itemPricesArray = [];
for (var i=0; i < priceByProduct.length; i++) {
  var totalItemPriceValues = priceByProduct[i].innerHTML = unitPriceArray[i]*unitQuantityArray[i];
  itemPricesArray.push(totalItemPriceValues);
  // console.log(itemPricesArray);
  // console.log(totalItemPriceValues)
}

var sum = itemPricesArray.reduce(sumArray, 0);
function sumArray(a, b) {
return a + b;
// console.log(sum);
}

var finalTotal = document.getElementsByClassName("finalTotal");
for (var i=0; i < finalTotal.length; i++) {
  var finalTotalValue = finalTotal[i].childNodes[1].childNodes[1].innerHTML = sum;
  // console.log(finalTotalValue);
}
}



function createDeleteButton(){
  var buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "col-lg-2");
  var newButton = document.createElement("button");
  newButton.className = "btn btn-delete";
  newButton.innerText = "Delete";
  newButton.onclick = deleteItem;
  buttonDiv.appendChild(newButton);

  return buttonDiv;
}



function createNameNode(newName){
  var nameDiv = document.createElement("div");
  nameDiv.setAttribute("class", "col-lg-2");
  var nameSpan = document.createElement("span");
  nameSpan.setAttribute("class", "productName")
  nameSpan.innerHTML = newName;
  nameDiv.appendChild(nameSpan);
  console.log(nameDiv);

  return nameDiv
}



function createPriceNode(newPrice){
  var priceDiv = document.createElement("div");
  priceDiv.setAttribute("class", "col-lg-2")
  var priceSpan = document.createElement("span");
  priceSpan.setAttribute("class", "costPerUnit")
  priceSpan.innerHTML = "$" + newPrice;
  priceDiv.appendChild(priceSpan);
  console.log(priceDiv);

  return priceDiv
}



function createQuantityInput(){
  var newQtyDiv = document.createElement("div");
  newQtyDiv.setAttribute("class", "col-lg-4");
  newQtyDiv.innerHTML = "QTY";
  var newQtyInput = document.createElement("input");
  newQtyInput.setAttribute("class", "itemQuantity");
  newQtyDiv.appendChild(newQtyInput);
  console.log(newQtyDiv);

  return newQtyDiv
}



function createItemTotalNode(){
  var itemTotalPrice = getTotalPrice();
  var itemTotalPriceDiv = document.createElement("div");
  itemTotalPriceDiv.setAttribute("class", "col-lg-2")
  var itemTotalPriceSpan = document.createElement("span");
  itemTotalPriceSpan.setAttribute("class", "totalPrice");
  itemTotalPriceSpan.innerHTML = itemTotalPrice;
  itemTotalPriceDiv.appendChild(itemTotalPriceSpan);
  console.log(itemTotalPriceDiv);

  return itemTotalPriceDiv
}



function createNewItemRow(newName, newPrice){
  var getValueOfProductName = document.getElementsByClassName("newName").value;
  // console.log(getValueOfProductName);
  var getValueOfProductCost = document.getElementsByClassName("newPrice").value;
  var itemRow = document.createElement("div");
  itemRow.setAttribute("class", "item row");
  var productName = createNameNode(newName);
  var productPrice = createPriceNode(newPrice);
  var qtyInput = createQuantityInput();
  var itemTotalPrice = createItemTotalNode();
  var deleteBtn = createDeleteButton();
  itemRow.appendChild(productName);
  itemRow.appendChild(productPrice);
  itemRow.appendChild(qtyInput);
  itemRow.appendChild(itemTotalPrice);
  itemRow.appendChild(deleteBtn);
  // console.log(itemRow);

  return itemRow;
}


function createNewItem(){
  var newProductName = document.getElementById("newName").value;
  // console.log(newProductName);
  var newProductPrice = document.getElementById("newPrice").value;
  // console.log(newProductPrice);
  var newItem = createNewItemRow(newProductName, newProductPrice);
  var newDiv = document.getElementById("newItemLine");
  newDiv.parentNode.insertBefore(newItem, newDiv);
  document.getElementById("newName").value = "";
  document.getElementById("newPrice").value = "";
}


// function newItemHtml () {
//   return 
//   "<div class="container">" + 
//   "<div class="item row">" + 
//     "<div class="col-lg-2">" +
//       "<span class="productName">"+itemName+"</span>" +
//     "</div>" +
//     "<div class="col-lg-2">" + 
//         "$" + "<span class="costPerUnit">" + itemUnitPrice + "</span>" +
//     "</div>" +
//     "<div class="col-lg-4">" +
//       "QTY" + "<input class="itemQuantity" type="text" name="quantity">" +
//     "</div>" +
//     "<div class="col-lg-2">" +
//       "$" + "<span class="totalPrice">" + totalItemPriceValues + "</span>" +
//     "</div>" +
//     "<div class="col-lg-2">" +
//       "<button type="button" class="btn btn-delete">Delete</button>" +
//     "</div>" +
//   "</div>" +
//   "</div>"
// }





window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length; i++){
    deleteButtons[i].onclick = deleteItem
  }
};
