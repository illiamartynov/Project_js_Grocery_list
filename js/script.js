const imageObject = {
      src_bin: './images/bin.png',
      class_bin: 'item_img_of_list1',
      class_bag: 'item_img_of_list2',
      li_contains: 'list_contains',
      div_class: 'div_class',
      money_src: './images/money.png',
      bag_src: './images/shopping-bag.png',
      class_input: 'input_amount',

    }

const list_of_all_items = document.querySelector('#all_items')
const inputRef = document.querySelector("#user_input")
const item_back = document.querySelector('.itemInput')
const item_span = document.querySelector('.span-bag')





document.querySelector("#pencil").addEventListener("click", () => {
    document.querySelector("#all_items").textContent = "";
  })
  


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
    
  

      

     
    if (length > 3 && length <= 15){
     const li_item = `
  <li class = ${imageObject.li_contains}>
    <span class=decoration>- ${user_insert}</span>
    <span class=span-bag decoration></span>
    <div class = ${imageObject.div_class}>
      <img class = "${imageObject.class_bin} bin" src = ${imageObject.src_bin}> 
      <img class = "${imageObject.class_bag} bag" src = ${imageObject.bag_src}>
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

window.addEventListener('DOMContentLoaded', () => {
  console.log('!!!!',localStorage.getItem('theme'))
})



  // icon_bin.addEventListener('change', addItemToList)
  inputRef.addEventListener('change', addItemToList)
  list_of_all_items.addEventListener("click", clickOnItem)
  list_of_all_items.addEventListener("click", clickOnBag)
  // list_of_all_items.addEventListener("click", clickonDelet)