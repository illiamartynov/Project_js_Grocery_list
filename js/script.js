document.querySelector("#pencil").addEventListener("click", () => {
  document.querySelector("#all_items").textContent = "";
})

document.querySelector("#user_input").addEventListener("keydown", (event) => {
  if(event.key == "Enter")
    addItem();
});

addItem = () => {
  const div_item = document.createElement("div")
  



  const item = document.createElement("li")
  item.id = "li_item_list";

  const img1 = document.createElement("img")
img1.src = './images/bin.png'
img1.className = "item_img_of_list1"
img1.id = "first_img_in_list"

const img2 = document.createElement("img")
img2.src = './images/money.png'
img2.className = "item_img_of_list2"
img2.id = "second_img_in_list"

const img3 = document.createElement("img")
img3.src = './images/shopping-bag.png'
img3.className = "item_img_of_list3"
img3.id = "third_img_in_list"


// document.querySelector("#first_img_in_list").addEventListener("click", () => {
//   document.querySelector("#all_items").textContent = "";
// })



  
  
  item.textContent =   "- " + document.querySelector("#user_input").value;
 
  
  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through")
      item.style.textDecoration = "line-through";
    else
      item.style.textDecoration = "none";
  })

   document.querySelector("#all_items").appendChild(item);
  // document.querySelector('#unique_id').appendChild(div_item);
 
  document.querySelector("#all_items").appendChild(img1);
  document.querySelector("#all_items").appendChild(img2);
  document.querySelector("#all_items").appendChild(img3);
  document.querySelector("#user_input").value = "";
}



