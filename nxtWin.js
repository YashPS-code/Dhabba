list = { 0: "North Indian", 1: "South Indian", 2: "Desi Chinese", 3: "Pastas", 4: "Snacks", 5: "Chaat", 6: "Drinks", 7: "Cakes 'n' Pastries", 8: "Sweets 'n' Desserts" };

content=[["Sweet",[[1,"Halwa","food_images/Halwa.jpg","20","Description"],
  [2,"Kaju Katli","food_images/kajukatli.jpg", "20","Description"]]
]];

const url = document.location.href;
let xID = url.split('?')[1] || 0;
document.title=list[xID]+'@Dhabba';
document.getElementById("nxtWin_txt").innerText=list[xID];

for(i=0;i<content.length;i++){
 document.getElementById("categoryList").innerHTML+=`<div class="line"><h4 
 class="nxtWin_cat">${content[i][0]}</h4></div>`;
 let lst=content[i][1];
 for(j=0;j<lst.length;j++){
   costIt=`₹${lst[j][3]}`;
   document.getElementById("categoryList").innerHTML+=`<div 
class="optionY"><img src=${lst[j][2]} class="descriptionImg"><div class="descriptionDiv"> 
<span id="itemName">${lst[j][1]}</span><span>${costIt}</span><div>${lst[j][4]}</div><button id="${[i]+'#'+[j][0]}" class="categoryBtn">Add to Cart +</button></div></div>`
 };
};

let cartList={};
let cost=0;
let tms=false;

function delBtn(x){
  alpha = x.parentElement;
  delete cartList[alpha.id];
  alpha.remove();
  cost-=Number(alpha.children[1].children[1].children[1].innerText);
  document.querySelector('#costing').innerText=`₹${cost}`;
  if (Object.entries(cartList).length==0){
    tms=false;
    document.getElementById("cartText").innerText=":( Cart is Empty";
    document.getElementById("xOutDiv").style.display="none";
  };
};

document.querySelectorAll(".categoryBtn").forEach((y)=>{
  y.addEventListener("click",()=>{
    actElement = y.id;
    if(!(actElement in cartList)){
      if(tms==false){document.getElementById("cartText").innerText="";
                     document.getElementById("xOutDiv").style.display="block";
        tms=true;};
      let x=actElement.split("#");
      cartList[actElement]=1;
  document.querySelector("#cartListing").innerHTML+=`<div class="optionY" id="${actElement}"><img src=${content[Number(x[0])][1][Number(x[1])][2]} class="inCartImg"><div class="descriptionDiv"><h4>${content[Number(x[0])][1][Number(x[1])][1]}</h4><h4>${content[Number(x[0])][1][Number(x[1])][3]}</h4><div id="qtyDiv">Qty.<input type="number" min=0 value=1 class="cartRelImg"></div></div><img src="delete.png" alt="Del" class="cartRelImg" onclick="delBtn(this)"></div>`;
      cost+=Number(content[Number(x[0])][1][Number(x[1])][3]);
      document.querySelector('#costing').innerText=`₹${cost}`;
    };
  });
});