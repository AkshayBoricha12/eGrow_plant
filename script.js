let popularPlants = document.querySelector(".popular-plants");
let features = document.querySelector(".features");
let header = document.querySelector(".header");
let mainSection = document.querySelector(".main-section");

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

let jsonData = {
  header: {
    logo: "assets/logo-regular.png",
    menuItems: [
      {
        label: "Shop All",
        action: "/shop",
        position: "left",
        type: "text",
      },
      {
        label: "Plants",
        action: "/product-category/plants",
        position: "left",
        type: "text",
      },
      {
        label: "Cacti",
        action: "/product-category/cacti",
        position: "left",
        type: "text",
      },
      {
        label: "Our Story",
        action: "/home",
        position: "right",
        type: "text",
      },
      {
        label: "Contact",
        action: "/contact",
        position: "right",
        type: "text",
      },
      {
        label: "Shopping Cart",
        action: "/shopping-cart",
        position: "right",
        type: "icon",
        iconURL: "fa-bag-shopping fs-4",
        color: "#586f69",
      },
      {
        label: "Account",
        action: "/my-account",
        position: "right",
        type: "icon",
        iconURL: "fa-circle-user fs-2",
        color: "#000",
      },
    ],
  },
  mainSection: {
    title: "Bird of Paradise Plant",
    subtitle: "Plants",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mattis nulla in mauris efficitur elementum.",
    price: "$65.00",
    discountedPrice: "$50.00",
    actionButton: "Add to cart",
    heroImage: "assets/hero.png",
  },
};

function createHeaderElement(item) {
  let element;
  if (item.type == "text") {
    element = document.createElement("a");
    element.href = `#${item.action.slice(1)}`;
    element.className = "nav-link";
    element.text = item.label;
  } else {
    element = document.createElement("i");
    element.classList = `fa-solid ${item.iconURL}`;
    element.style.color = item.color;
  }

  if (item.position !== "right") {
    header.firstElementChild.appendChild(element);
  } else {
    header.lastElementChild.appendChild(element);
  }
}

function renderData() {
  let logoImage = document.createElement("img");
  logoImage.classList = "navbar-brand img-fluid ";
  logoImage.src = jsonData.header.logo;
  logoImage.alt = "Logo";
  header.firstElementChild.appendChild(logoImage);

  for (const navItem of jsonData.header.menuItems) {
    createHeaderElement(navItem);
  }

  fillHeroSectionContent(jsonData.mainSection);
}

renderData();

function fillHeroSectionContent(mainSectionData) {
  let data = Object.entries(mainSectionData);
  data.pop();
  for (const [key, value] of data) {
    document.getElementById(key).textContent = value;
  }

  document.getElementById("heroImage").src = mainSectionData.heroImage;
}
