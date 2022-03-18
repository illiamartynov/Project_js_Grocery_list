// document.querySelector("#pencil").addEventListener("click", () => {
//   document.querySelector("#all_items").textContent = "";
// })

// document.querySelector("#user_input").addEventListener("keydown", (event) => {
//   if(event.key == "Enter")
//     addItem();
// });

// addItem = () => {
//   const div_item = document.createElement("div")
  



//   const item = document.createElement("li")
//   item.id = "li_item_list";

//   const img1 = document.createElement("img")
// img1.src = './images/bin.png'
// img1.className = "item_img_of_list1"
// img1.id = "first_img_in_list"

// const img2 = document.createElement("img")
// img2.src = './images/money.png'
// img2.className = "item_img_of_list2"
// img2.id = "second_img_in_list"

// const img3 = document.createElement("img")
// img3.src = './images/shopping-bag.png'
// img3.className = "item_img_of_list3"
// img3.id = "third_img_in_list"


// // document.querySelector("#first_img_in_list").addEventListener("click", () => {
// //   document.querySelector("#all_items").textContent = "";
// // })



  
  
//   item.textContent =   "- " + document.querySelector("#user_input").value;
 
  
//   item.addEventListener("click", () => {
//     if(item.style.textDecoration != "line-through")
//       item.style.textDecoration = "line-through";
//     else
//       item.style.textDecoration = "none";
//   })

//    document.querySelector("#all_items").appendChild(item);
//   // document.querySelector('#unique_id').appendChild(div_item);
 
//   document.querySelector("#all_items").appendChild(img1);
//   document.querySelector("#all_items").appendChild(img2);
//   document.querySelector("#all_items").appendChild(img3);
//   document.querySelector("#user_input").value = "";
// }





































// document.querySelector("#pencil").addEventListener("click", () => {
//   document.querySelector("#all_items").textContent = "";
// })

// document.querySelector("#user_input").addEventListener("keydown", (event) => {
//   if(event.key == "Enter")
//     addItem();
// });

// addItem = () => {
//   const user_insert = document.querySelector('#user_input').value
// }



    





    const imageObject = {
      src_bin: './images/bin.png',
      class_bin: 'item_img_of_list1',
      li_contains: 'list_contains',
      div_class: 'div_class',
      money_src: './images/money.png',
      bag_src: './images/shopping-bag.png',
      class_input: 'input_amount',

    }
  
    // const li_item = `<li class = ${imageObject.li_contains}>- ${user_insert} <div class = ${imageObject.div_class}><img class = ${imageObject.class_bin} src = ${imageObject.bag_src}> <img class = ${imageObject.class_bin} > <img class = ${imageObject.class_bin} src = ${imageObject.src_bin}></div></li>`
    // const key_with_input = `<li class = ${imageObject.li_contains}>- ${user_insert} <div class = ${imageObject.div_class}><input name = weigth class = ${imageObject.class_input} > <img class = ${imageObject.class_bin} src = ${imageObject.src_bin}></div></li>`



  //   const item = document.createElement("li")
  //   item.id = "li_item_list";

  //   const img1 = document.createElement("img")
  // img1.src = './images/bin.png'
  // img1.className = "item_img_of_list1"
  // img1.id = "first_img_in_list"

  // const img2 = document.createElement("img")
  // img2.src = './images/money.png'
  // img2.className = "item_img_of_list2"
  // img2.id = "second_img_in_list"

  // const img3 = document.createElement("img")
  // img3.src = './images/shopping-bag.png'
  // img3.className = "item_img_of_list3"
  // img3.id = "third_img_in_list"


// document.querySelector("#first_img_in_list").addEventListener("click", () => {
//   document.querySelector("#all_items").textContent = "";
// })



  
  // const list_of_all_items = document.querySelector('#all_items')
  // list_of_all_items.insertAdjacentHTML('beforeend', li_item)
  // document.querySelector("#user_input").value = "";



  // list_of_all_items.addEventListener("click", (e) => {
  //   const input_amount = document.createElement("input")
  //   e.target.parentNode.appendChild(input_amount);
    
  //   if( e.target.style.textDecoration != "line-through")
  //     e.target.style.textDecoration = "line-through";
    
   
  //   else
  //     e.target.style.textDecoration = "none";
    
    
  // })

 






  // ====================================================================================
const list_of_all_items = document.querySelector('#all_items')
const inputRef = document.querySelector("#user_input")
const item_back = document.querySelector('.itemInput')
const item_span = document.querySelector('.span-bag')

// const icon_bin = document.querySelector('.bin')




document.querySelector("#pencil").addEventListener("click", () => {
    document.querySelector("#all_items").textContent = "";
  })
  
  // document.querySelector("#user_input").addEventListener("keydown", (event) => {
  //   if(event.key == "Enter")
  //   addItemToList();
  // });

const addItemToList = (e) => {
  const user_insert = inputRef.value;
  
    let length = inputRef.value.length
    if(length <= 3 || length >= 15){
      
      inputRef.value = ''

    } 
    const pattern = /^[\s]+$/
    if (pattern.test(user_insert)){
      

      user_insert = ''

    }
    
    //  if (user_insert === " "){
    //   inputRef.value = ''
          
    //   }

      

     
    if (length > 3 && length <= 15){
     const li_item = `
  <li class = ${imageObject.li_contains}>
    <span class=decoration>- ${user_insert}</span>
    <span class=span-bag decoration></span>
    <div class = ${imageObject.div_class}>
      <img class = "${imageObject.class_bin} bin" src = ${imageObject.src_bin}> 
      <img class = "${imageObject.class_bin} bag" src = ${imageObject.bag_src}>
      <input type="text" maxlength="6"  class="itemInput nowiev" autofocus/>
    </div>
  </li>`
   list_of_all_items.insertAdjacentHTML('beforeend', li_item)
  inputRef.value = ''
   }
    
 
  

  
}





const clickOnItem = (e) => {
  if (e.target.tagName === 'LI' ||e.target.tagName === 'SPAN') {
    const spanRef = e.target.tagName === 'LI'
      ? e.target.querySelector('.decoration')
      : e.target.parentNode.querySelector('.decoration')

    if (spanRef.style.textDecoration != "line-through") {
      spanRef.style.textDecoration = "line-through";
    } else {
      spanRef.style.textDecoration = "none";
    }
  }
}
const closeBagInput = (e) => {
  const icon_bag = e.target.parentNode.querySelector('.bag')
  const span_item = e.target.parentNode.parentNode.querySelector('.span-bag')
  span_item.textContent = e.target.value
  
  e.target.value = ''
  e.target.classList.add('nowiev')
  icon_bag.classList.remove('nowiev')
  
}
 
const clickOnBag = (e) => {
  const item_back = e.target.parentNode.querySelector('.itemInput')
  if (e.target.tagName === 'IMG') {
    if (e.target.classList.contains('bag')) {
            e.target.classList.add('nowiev')
      item_back.classList.remove('nowiev')
    } 
    if (e.target.classList.contains('bin')) {
      console.log('delete it')
      e.target.parentNode.parentNode.remove()
    } 
  }
  item_back.addEventListener('change', closeBagInput )
}

// const deleteItem = (elem) => {
//   elem.innerHTML = "";
// }

// const clickonDelet = (e) => {
//   console.log(e)
// }



  // icon_bin.addEventListener('change', addItemToList)
  inputRef.addEventListener('change', addItemToList)
  list_of_all_items.addEventListener("click", clickOnItem)
  list_of_all_items.addEventListener("click", clickOnBag)
  // list_of_all_items.addEventListener("click", clickonDelet)