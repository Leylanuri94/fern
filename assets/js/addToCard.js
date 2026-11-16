let products = document.getElementById("boxs");
function getToCard() {
  let allToCard = JSON.parse(localStorage.getItem("addToCard")) || [];
  if (allToCard.length == 0) {
    products.innerHTML = "addcardiniz yoxdur";
    return;
  }
  products.innerHTML = "";

  allToCard.forEach((item) => {
    products.innerHTML += `
 <div class="box" onclick="getDetailPage(${item.id})">
 <button onclick="removeFunc(${item.id})" id="Add to card" /></button>
 <svg onclick="removeFunc(${item.id})" id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>

              <img
                src="${item.image}"
                alt=""
              />
              <div class="about">
                <h4>${item.title}</h4>
                <span>Monstera deliciosa</span>
                <div class="bright">
                  <span>Bright indirect</span>
                  <span>Weekly</span>
                </div>
                <span>${item.price}</span>
              </div>
            </div>`;
  });
}

getToCard();

function removeFunc(id) {
  let allToCard = JSON.parse(localStorage.getItem("addToCard")) || [];
  let newCards = allToCard.filter((item) => item.id != id);
  localStorage.setItem("addToCard", JSON.stringify(newCards));
  getToCard();
}


