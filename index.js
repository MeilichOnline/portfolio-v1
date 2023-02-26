function menu_open_and_close(){
    const menu_btn = document.querySelector("body > nav > div > img");
    const menu_bar = document.querySelector("body > nav > div > div");
    menu_btn.addEventListener("click",()=>{
        menu_bar.style.display = "inline";
    });
}