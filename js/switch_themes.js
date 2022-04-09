const btn = document.querySelector("#theme-button");
const link = document.querySelector("#theme-link");

btn.addEventListener("click", ChangeTheme);

function ChangeTheme()
{
    const lightTheme = "css/light.css";
    const darkTheme = "css/dark.css";

    let currentTheme = link.getAttribute("href");
    let theme = "";

    if(currentTheme == lightTheme)
    {
   	 currentTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currentTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currentTheme);

    
if(currentTheme == lightTheme){
     document.querySelector('#setDfltBack_2time').addEventListener('click', () =>{
    document.body.style.background = `#BF6D30`;
  })
  
}
else if(currentTheme == darkTheme){
    document.querySelector('#setDfltBack_2time').addEventListener('click', () =>{
        document.body.style.background = `#232946`;
      }) 
}
}