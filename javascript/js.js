let products = [
    {
        id: '1',
        img: '1.PNG',
        name: 'By cha',
        price: 2.5
    },
    {
        id: '2',
        img: '2.PNG',
        name: 'serj chicken',
        price: 3.5
    },
    {
        id: '3',
        img: '3.PNG',
        name: 'Product 3',
        price: 4.5
    },
    {
        id: '4',
        img: '4.PNG',
        name: 'kiri',
        price: 5.5
    },
    {
        id: '5',
        img: '5.PNG',
        name: 'salade',
        price: 6.5
    },
    {
        id: '6',
        img: '6.PNG',
        name: 'pizza',
        price: 7.5
    }

];

//for push data from arry
let carts = [];

let container = document.getElementById("box-loop");
for (let i = 0; i < products.length; i++) {
    //loop object from array Object
    container.innerHTML +=
        `      
       <div class="col-lg-4">
             <div class="card rounded-4">
                 <div class="bg-body-secondary rounded-top-4 d-flex align-content-center">
                    <img src="image/${products[i].img}" class="product-image image-fluid "/>
                 </div>
                 <div class="card-body">
                    <div class="card-title">${products[i].name}</div>
                    <div class="card-text">${products[i].price} $</div>
                    <button type="button" class="btn btn-outline-dark" onclick="addProductToCart(${products[i].id})">Buy Now</button>
                </div>
            </div>
     </div>
    `;
}


function getCartList() {
    //calulate cart total 
    let total = document.getElementById("total");
    let totalSmallDevice = document.getElementById("total-small-device");

    let cartListSamllDevice = document.getElementById("cart-list-small-device");
    let cartBadgeSmallDevic = document.getElementById("badge-small-device");
    //clear string loop
    cartListSamllDevice.innerHTML = '';
     //make count carts
    cartBadgeSmallDevic.innerHTML = carts.length;

    let cartList = document.getElementById("cart-list");
    let cartBadge = document.getElementById("cart-badge");
    //clear string loop
    cartList.innerHTML = '';
    //make count carts
    cartBadge.innerHTML = carts.length;
    //make total to defull
    let tempTotal = 0;
    totalSmallDevice.innerHTML = `${tempTotal} $`;
    total.innerHTML = `${tempTotal} $`;
    for (let i = 0; i < carts.length; i++) {
        //calulate price from cart
        tempTotal += carts[i].price;
        //loop for small device
        cartListSamllDevice.innerHTML +=
            `      
        <div class="row rounded-5">
        <div class="carts col-lg-12  col-sm-12  ">
          <div
            class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-220 position-relative bg-light">
            <div class="col p-4 d-flex flex-column position-static text-dark">
              <h3 class="mb-0 ">${carts[i].name}</h3>
              <p class="card-text mb-auto">
                ${carts[i].price} $
              </p>

            </div>
            <div class="col-auto  d-lg-block">

              <div class="cart-product-image bg-body-secondary d-flex justify-content-sm-center h-">
              <button type="button" class="remove btn btn-danger rounded-circle p-2 lh-1" id="remove" onclick="removeProductFromCart(${i})"><i class="bi bi-trash3"></i></button>
                <img src="image/${carts[i].img}" alt="" srcset="" class="img-fluid">
              </div>

            </div>
          </div>
        </div>
      </div> 
    `;
    //make total calulate
        totalSmallDevice.innerHTML = `${tempTotal} $`;
        total.innerHTML = `${tempTotal} $`;
      //loop for Big device
        cartList.innerHTML +=
            `      
            <div class="row rounded-5">
            <div class="carts col-lg-12  col-sm-12  ">
              <div
                class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-220 position-relative bg-light">
                <div class="col p-4 d-flex flex-column position-static">
                  <h3 class="mb-0">${carts[i].name}</h3>
                  <p class="card-text mb-auto">
                    ${carts[i].price} $
                  </p>
  
                </div>
                <div class="col-auto  d-lg-block">

                  <div class="cart-product-image bg-body-secondary d-flex justify-content-sm-center">
                  <button type="button" class="remove btn btn-danger rounded-circle p-2 lh-1" id="remove" onclick="removeProductFromCart(${i})"><i class="bi bi-trash3"></i></button>
                    <img src="image/${carts[i].img}" alt="" srcset=""  class="img-fluid">
                  </div>
  
                </div>
              </div>
            </div>
          </div> 
        `;
    }
}
//add cart to list
function addProductToCart(productId) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == productId) {
            carts.push(products[i]);
        }
    }
    // tor function
    getCartList();
}

//remove cart from list
function removeProductFromCart(index) {
    // remove from index
    carts.pop(index);
    //tor function
    getCartList();
}

