
let db;
let products = document.getElementById("products");


function getApi() {
    fetch ( `https://6adda9db4e88f1bba4a48a73.mockapi.io/realProduct`,
  )
    .then((res) => res.json())
    .then((data) => {
      db = data;
      console.log(data);
      
      getVisableProduct(db);
    });
}

getApi();

function getVisableProduct(array) {
  products.innerHTML = "";
  array.forEach((item) => {
  products.innerHTML += `
         <div class="box">
              <img
                src="${item.image[0]}"
                alt=""
              />
              <div class="productBody">
                <h3>${item.title}</h3>
                <p>${item.price}$</p>
                  <button onclick="getLocalAddToWishlist(${JSON.stringify(item.id)})">Add to wishlist</button>
              </div>
              <i onclick="getLocalAddToCard(${JSON.stringify(item.id)})" id="heart" class="fa-solid fa-heart"></i>
            </div>
        `;
  })
}

let expensivetoCheap = document.getElementById("expensivetoCheap");
let cheaptoExp = document.getElementById("cheaptoExp");
let abc = document.getElementById("abc");
let cba = document.getElementById("cba");

const sortProducts = () => {
  let result = db.sort((a,b) => b.price - a.price);
   getVisableProduct(result)

}


const sortCheap = () => {
   let result = db.sort((a,b) => a.price - b.price);
   getVisableProduct(result)
}


const abcFunc = () => {
let result  = db.sort((a,b) => a.title.localeCompare(b.title));
    getVisableProduct(result)
}

const cbaFunc = () => {
let result  = db.sort((a,b) => b.title.localeCompare(a.title));
   getVisableProduct(result)
}


abc.addEventListener("click", abcFunc)
cba.addEventListener("click", cbaFunc)
expensivetoCheap.addEventListener("click", sortProducts)
cheaptoExp.addEventListener("click",sortCheap )

