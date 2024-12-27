let popularPlants = document.querySelector(".popular-plants");
let features = document.querySelector(".features");

let popularPlant = [
  {
    image: "assets/flower-03-a-400x550.jpg",
    category: "Cacti",
    name: "Aloe Juvenna Plant",
    price: 85,
  },
  {
    image: "assets/flower-008-a-400x550.jpg",
    category: "Plants",
    name: "Bird of Paradise Plant",
    price: 50,
  },
  {
    image: "assets/flower-02-a-400x550.jpg",
    category: "Cacti",
    name: "Christmas Cactus",
    price: 70,
  },
  {
    image: "assets/flower-06-a-400x550.jpg",
    category: "Plants",
    name: "Fiddle Leaf Fig Plant",
    price: 63,
  },
];

let featuresObj = [
  {
    image: "fa-solid fa-truck",
    title: "Fast Delivery",
  },
  {
    image: "fa-solid fa-location-dot",
    title: "Order Tracking",
  },
  {
    image: "fa-solid fa-shield-halved",
    title: "Secure Payment",
  },
  {
    image: "fa-solid fa-percent",
    title: "Big Discounts",
  },
];

for (const plant of popularPlant) {
  let div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `
  <img
            src="${plant.image}"
            class="img-fluid w-100"
            alt="flower plant image"
          />
          <div class="image-details p-3">
            <p class="text-secondary fw-medium">${plant.category}</p>
            <a href="#" class="nav-link"> <h4>${plant.name}</h4> </a>
            <div class="stars text-secondary">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>
            <div class="price text-secondary fw-bolder">$${plant.price}.00</div>
          </div>
          `;
  popularPlants.appendChild(div);
}

for (const feature of featuresObj) {
  let div = document.createElement("div");
  div.classList.add("col");
  div.innerHTML = `<div class="row">
                  <div class="col">
                    <i
                      class="${feature.image} p-3 rounded-circle"
                      style="color: white; background-color: #586f69"
                    ></i>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col"><h3>${feature.title}</h3></div>
                </div>
                <div class="row mt-3">
                  <div class="col h5 opacity-50">
                    Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                    tempor consectetur
                  </div>
                </div>`;
  features.appendChild(div);
}
