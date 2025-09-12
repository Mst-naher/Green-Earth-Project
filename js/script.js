// console.log("connected");
// promise --> pending --> resolve(success), reject(error)
const allPlantsContainer = document.getElementById("allPlantsContainer");

const categoryContainer = document.getElementById("categoryContainer");
const plantContainer = document.getElementById("plantContainer");
const cartContainer = document.getElementById("cartContainer");
const cartCounter = document.getElementById("cartCounter");

const cartBtnOne = document.getElementById("cartBtnOne");
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

let carts = [];

// const allPlantsContainer = document.getElementById("allPlantsContainer");
const loadPlants = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.plants);

      // const plants = data.plants;
      displayPlants(json.plants);
    });
   
};

const displayPlants = (plants) => {

  plants
    .forEach((plant) => {
      // console.log(plant);
      allPlantsContainer.innerHTML += `
      
      <div  class=""> 
     <div  class=" mb-2 p-2 bg-white rounded-lg">
            <div class="">
              <img class="mx-auto rounded-lg w-full  lg:w-[100%] h-[200px] lg:h-[200px] " src="${plant.image}">
             </div>
              <h1 id="" class="font-semibold">${plant.name}</h1>
              <p class="font-sm text-gray-400">${plant.description} </p>
             <div id="${plant.id}" class="flex justify-between items-center">
             <div>
                 <button class=" btn bg-[#DCFCE7] text-[#15803d] font-sm rounded-lg p-1 "> ${plant.name} </button>   
             </div>
             <div>
              <p id="card-price-1" class=""><span>${plant.price} </span><i class="fa-solid fa-bangladeshi-taka-sign"></i></p>
             </div>
              
             
           </div>
         <div> 
           <button id="cartBtnOne" class="btn bg-[#15803D] font-sm text-white rounded-2xl w-[100%] mt-2 p-1 ">Add to Cart</button>
         </div>
       </div>
    </div>
      
      `;

    })

   
};

const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/categories") //promise
    .then((res) => res.json()) //res -- promise
    .then((data) => {
      // console.log(data.categories);
      const categories = data.categories;

      showCategory(categories);
    })

    .catch((err) => {
      console.log(err);
    });
};
const showCategory = (categories) => {
  categories.forEach((cat) => {
    // console.log(cat.category_name);
    categoryContainer.innerHTML += `
    <li id=${cat.id} class=" hover:bg-green-600 cursor-pointer rounded-md m-1 p-1  ">${cat.category_name}</li>
  
   `;
  });

  categoryContainer.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll("li");
    // console.log(allLi)

    allLi.forEach((li) => {
      li.classList.remove("bg-green-600");
    });

    if (e.target.localName === "li") {
      // console.log(e.target.id)
      e.target.classList.add("bg-green-600");
      loadPlantByCategory(e.target.id);
    }
  });
};

const loadPlantByCategory = (categoryId) => {
  // console.log(categoryId);
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then((res) => res.json())
    .then((json) => {
      // console.log(data.plants);
      showPlantByCategory(json.plants);
    })
    .catch((err) => {
      // console.log(err);
    });
};

const showPlantByCategory = (plants) => {
  // console.log(plants);
  plantContainer.innerHTML = "";
  plants.forEach((plant) => {
    plantContainer.innerHTML += `

    <div  class=""> 
     <div  class=" mb-2 p-2 bg-white rounded-lg">
            <div>
              <img class="mx-auto rounded-lg w-full  lg:w-[100%] h-[200px] lg:h-[200px] " src="${plant.image}">
             </div>
              <h1 id="card-title-1" class="font-semibold">${plant.name}</h1>
              <p class="font-sm text-gray-400">${plant.description} </P>
             <div id="${plant.id}" class="flex justify-between items-center">
             <div>
                 <button class=" btn bg-[#DCFCE7] text-[#15803d] font-sm rounded-lg p-1 "> ${plant.name} </button>   
             </div>
             <div>
              <p id="card-price-1" class=""><span>${plant.price} </span><i class="fa-solid fa-bangladeshi-taka-sign"></i></p>
             </div>
              
             
           </div>
         <div> 
           <button id="cartBtnOne" class="btn bg-[#15803D] font-sm text-white rounded-2xl w-[100%] mt-2 p-1 ">Add to Cart</button>
         </div>
       </div>
    </div>
 
  
  `;
  });
};

plantContainer.addEventListener("click", (e) => {
  // console.log(e.target.innerText)

  if (e.target.innerText === "Add to Cart") {
    // console.log('Add to Cart Clicked')
    handleCarts(e);
  }
});

const handleCarts = (e) => {
  const title = e.target.parentNode.parentNode.children[1].innerText;
  console.log(title);
  const price =
    e.target.parentNode.parentNode.children[3].children[1].innerText;
  console.log(price);
  const id = e.target.parentNode.parentNode.children[3].id;
  console.log(id);

  // console.log(title, price)
  // const totalPrice = price.innerText;
  // currentTotal = price + totalPrice;
  // price.innerText = currentTotal;
  // console.log(currentTotal);
  // const totle = currentTotal;

  carts.push({
    title: title,
    price: price,
    id: id,
    // total: totle
  });
  // console.log(carts);
  showCarts(carts);
};

const showCarts = (carts) => {
  // console.log(carts)
  cartContainer.innerHTML = "";
  carts.forEach((cart) => {
    cartContainer.innerHTML += `
  <div class="flex justify-between items-center bg-[#DCFCE7] my-2 p-1 rounded-lg">
  <div>
     <h1>${cart.title} </h1>
  </div>
  <div>
   <p><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${cart.price} </p>
   </div>
  <div>
    <button onclick="handleDeleteCart('${cart.id}')" class="btn btn-sm"><i class="fa-solid fa-xmark text-xsm" style="color: #f20202;"></i></button>
  </div> 
  </div>
  <div>
   
  </div>
  `;
  });
  cartCounter.innerText = carts.length;
};

const handleDeleteCart = (cartId) => {
  // console.log(cartId)
  const filteredCarts = carts.filter((cart) => cart.id !== cartId);
  console.log(filteredCarts);
  carts = filteredCarts;
  showCarts(carts);
};

// document.getElementById("cartBtnOne").addEventListener("click", function()
// {
// const title = getElement("cartTitleOne");
// console.log(title)
// });

loadCategory();
loadPlantByCategory();
loadPlants();

// Using Async await

//   const loadCategoryAsync = async () => {
//     try {
//     const res = await fetch(
//       "https://openapi.programming-hero.com/api/categories"
//     );
//     const data = await res.json();
//     console.log(data);
//   }
//    catch (error) {
//   console.log(error);
// };

// }
