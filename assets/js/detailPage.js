window.onload = () => {
  getDetailPage();
};

let detailTitle = document.getElementById("detailTitle");
let container = document.getElementById("container");

let product;

async function getDetailPage() {
  try {
    let id = localStorage.getItem("detailpage");
    console.log(id);
    await fetch(`https://6adda9db4e88f1bba4a48a73.mockapi.io/realProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        product = data;
        detailTitle.innerHTML = `Detail Page : ${data.title} `;
        container.innerHTML = `
          <div class="left">
            <img
              src="${data.image}"
              alt=""
            />
          </div>
          <div class="right">
            <p>description : ${data.description}</p>
            <p>price: ${data.price} $</p>
            <button onclick="getOrder(${id})">${data.order ? "sifaris verilib" : "sifaris ver "}</button>
          </div>
      `;
      });
  } catch (error) {
    console.log(error);
  }
}

async function getOrder(id) {
  if (product.order) return alert("sifaris artiq verilib ! ");
  try {
    await fetch(
      `https://6adda9db4e88f1bba4a48a73.mockapi.io/realProduct/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order: true,
        }),
      },
    ).then(() => {
      alert("sifaris edildi");
      getDetailPage();
    });
  } catch (error) {
    console.log(error);
  }
}
