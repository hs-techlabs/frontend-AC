// let btns=document.querySelectorAll("button");
// for (btn of btns){
// //     btn.onclick=clickbutton;
//     btn.onmouseenter=function(){
//         console.log("Mouse Entered");
// }
// btn.addEventListener("click",clickbutton);
// btn.addEventListener("click",sayname);



// }
// function clickbutton(){
//     alert("Button Clicked");
// }
// function sayname(){
//     alert("My name is JavaScript");
// }



/*Activity*/
// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//     let h3=document.querySelector("h3");
//     let randomcolor=getrRandomColor();
//     h3.innerText=randomcolor;

//     let div=document.querySelector("div");
//     div.style.backgroundColor=randomcolor;
//     console.log("color updated");
// });

// function getrRandomColor(){
//     const red=Math.floor(Math.random()*256);
//     const green=Math.floor(Math.random()*256);
//     const blue=Math.floor(Math.random()*256);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }





/* text editor */
// let inp=document.querySelector("#text");
// let p=document.querySelector("p");

// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     p.innerText=inp.value;
// });





/*Event Bubbling and Capturing*/
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("div is clicked");
// });
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul is clicked");
// });
// for(li of lis){
// li.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("li is clicked");
// });}






 /*to-do bubbling*/
let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");//to make delete button as a class

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
    });

    ul.addEventListener("click",function(event){
        if(event.target.nodeName=="BUTTON"){
            console.log("element is deleted");
            let listItem=event.target.parentElement; //li
            listItem.remove();
            // ul.removeChild(event.target.parentElement);
        }});

    // let delbtns=document.querySelectorAll(".delete");
    // for(delbtn of delbtns){
    // delbtn.addEventListener("click",function(){
    //     let par=this.parentElement;
    //     console.log("element is deleted");
    //     par.remove();
    // });  
// }


