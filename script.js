import data from "./data.json" assert {type:'json'};

const graph_ele = document.querySelectorAll(".graph");
let max=0;

document.addEventListener("DOMContentLoaded",()=>{
    let max_item = data[0].amount;
    data.forEach((item,key)=>{
        graph_ele[key].setAttribute("style",`height:${item.amount*3}px`);
        if(item.amount > max_item){
            max_item = item.amount;
            max = key;
        }
        graph_ele[key].firstChild.textContent = `$${item.amount}`;
        graph_ele[key].addEventListener("mouseover",(e)=>{
            const price_popup = e.target.firstChild;
            (price_popup.classList && price_popup.classList.remove("hidden"));
        });
        graph_ele[key].addEventListener("mouseleave",(e)=>{
            const price_popup = e.target.firstChild;
            (price_popup.classList && price_popup.classList.add("hidden"));
        });
    });
    graph_ele[max].classList.add("graph-max");
});
