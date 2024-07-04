// const panelAll=document.querySelector(".panel-all");
// const btn=document.querySelector(".btn");
// let createBox=document.querySelector(".input-box");


// btn.addEventListener("click",()=>{
//    document.body.style.visibility= "visible";
// })
// btn.addEventListener("click",()=>{
//     let inputBox=document.createElement("div");
//     let itemBox =document.createElement("div");
//     let img=document.createElement("img")
//     inputBox.className="input-box";
//     itemBox.className="items";
//     // inputBox.setAttribute("contenteditable","true");
//     // img.src="Screenshot (215).png";
//     img.src="Screenshot (215).png";
//    panelAll.appendChild(inputBox).appendChild(img);
//     panelAll.appendChild(inputBox);
//     inputBox.appendChild(itemBox);
//     // inputBox.appendChild(itemBox);
// })


// panelAll.addEventListener("click",function(e){
//     if(e.target.tagName ==="IMG"){
//       e.target.parentElement.remove();
//     //  updateStorage();
//     }
// })


let popup=document.getElementById("input-box");

function openPopup(){
   let popup=document.getElementById("input-box");
   //popup.classList.add("open-popup");
   // popup.styleadd("open-popup");
   popup.style.opacity="1";
   console.log("openPopup")
}

function closePopup(){
   let popup=document.getElementById("input-box");
  // popup.classList.remove("open-popup");
  popup.style.opacity="0";
  console.log("closePopup")
}

console.log(31)

function openpopup(){
   let pop=document.getElementById("list-box");
   pop.style.opacity="1";
   console.log("pop open");
}

function closepopup(){
   let pop=document.getElementById("list-box");
   pop.style.opacity="0";
   console.log("pop close")
}