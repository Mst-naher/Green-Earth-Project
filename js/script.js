// console.log("connected");
// promise --> pending --> resolve(success), reject(error)

const categoryContainer = document.getElementById("categoryContainer");
const plantContainer = document.getElementById("plantContainer");
const cartContainer = document.getElementById("cartContainer");

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
    <li id=${cat.id} class=" hover:bg-green-600 coursor-pointer rounded-md m-1 p-1  ">${cat.category_name}</li>
  
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
  console.log(categoryId);
  fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.plants);
      showPlantByCategory(data.plants);
    })
    .catch((err) => {
      console.log(err);
    });
};

const showPlantByCategory = (plants) => {
  plantContainer.innerHTML = "";
  plants.forEach((plant) => {
    plantContainer.innerHTML += `

    <div class=""> 
     <div class=" mb-2 p-2 bg-white">
            <div>
              <img class="rounded-lg  w-[100%] h-[200px] " src="${plant.image}">
             </div>
              <h1 class="font-semibold"> ${plant.name} </h1>
              <p class="font-sm text-gray-400">${plant.description} </P>
            <div class="flex justify-between items-center">
              <button class="bg-[#DCFCE7] text-[#15803d] font-sm rounded-lg p-1 "> ${plant.name} </button>
             <p class=""> <i class="fa-solid fa-bangladeshi-taka-sign"></i>${plant.price}
           </div>
         <div> 
         <button class="bg-[#15803D] font-sm text-white rounded-2xl w-[100%] mt-2 p-1 ">Add to Cart </button>
       </div>
       </div>
    </div>
 
  
  `;
  });
};

loadCategory();
loadPlantByCategory(3);

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
