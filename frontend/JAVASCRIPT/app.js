// let msg="       helloworld";
// // console.log(msg)
// // msg=msg.trim();
// // msg=msg.indexOf("rld");
// // console.log(msg.indexOf("rld"));
// msg=msg.replace("world","everyone");
// console.log(msg)
// msg=msg.toUpperCase().trim();
// console.log(msg)        
// // msg.slice(0,5);
// console.log(msg.slice(0,5))
// msg=msg.slice(0,5).toLowerCase();
// console.log(msg)
// msg=msg.concat(" everyone");
// console.log(msg)
// msg=msg.repeat(2);
// console.log(msg)



// let msg="help!";
// console.log(msg.trim().toUpperCase());
// console.log("himanshu")
// let pencilPrice=10;
// let penPrice=5;
// console.log(penPrice>=pencilPrice);
// console.log("press ok to continue");
// console.error("press ok to continue");
// prompt("enter your name");


// let stu=["ram ","shyam ","hari "];
// console.log(stu);
// stu.push("gita ");
// console.log(stu);
// stu.pop();
// console.log(stu);
// stu.unshift("sita ");
// console.log(stu);
// stu.shift();
// console.log(stu);
// stu.splice(2,0,"laxman ");
// console.log(stu);
// stu.splice(1,1);
// console.log(stu);
// let newStu=stu.slice(0,2);
// console.log(newStu);
// let hariIndex = stu.indexOf("hari ");
// console.log(hariIndex);
// newStu.sort();
// console.log(newStu);
// for(let j=1;j<=10;j++){
//   for(let i=1;i<=30;i++){
//     if(i%3==0){
//     console.log("3 * "+ j + "=" + i);
//     }
//     }
// }

// for (let j = 1; j <= 10; j++) {
//   console.log("3 * " + j + " = " + (3 * j));
// }


// for (let j = 1; j <= 15; j++) {
//     if(j%2!=0){
//         console.log(j)
//     }
// }

// let n = parseInt(prompt("Enter your number"));

// for (let j = n; j <= n * 10; j += n) {
//   console.log(j);
// }

// for (let i = 1; i <=3; i++){
//     console.log("outer loop");
//     for (let j = 1; j <= 3; j++){
// console.log(j)}}
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let fevmovie = "avatar";
// let guess = prompt("Guess my favourite movie");

// while ((guess != fevmovie) && (guess != "quit")) {
//   console.log("wrong");
//   guess = prompt("Wrong! Try again or type quit");
// }

// if (guess == fevmovie) {
//   console.log("Congrats! You guessed it 🎉");
// } else {
//   console.log("You quit 😢");
// }

// let i =1;
// while(i<=7){
//     if(i==5){
//         break;
//     }
//         console.log(i);
//     i++;
// }



// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder woman", "flash"]
// ]
// for (let i=0; i<heroes.length; i++) {
//     console.log(i, heroes[i], heroes [i]. length) ;
//     for(let j=0; j<heroes [i]. length; j++) {
//      console.log(`j=${j}, ${heroes[i][j]}`);
//         }
//     }

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(fruit of fruits) {
// console. log (fruit);
// }


// for(char of "apnacollege") {
// console. log (char);}



// to do app
// let todo = [];
// let req=prompt("please enter your reauest🙏🏻");
// console.log(req);

// while (true){
//     if (req==="quit"){
//         console.log("quitting the app");
//         break;
//     }
//     if (req==="list"){
//         console.log("**********");
//         for (task of todo){
//             console.log(task);
//         }
//         console.log("**********");
//     }
//     else if (req==="add"){
//         let newtask=prompt("enter new task");
//         todo.push(newtask);
//         console.log(`${newtask} added to the list`);
//     }
//     else if (req==="delete"){
//         let deletetask=prompt("enter task number to delete");
//         todo.splice(deletetask,1);
//         console.log("task deleted");
//     }
//     req=prompt("please enter your reauest🙏🏻");

// }





/*object letral*/
// let animal={
//     name:"dog",
//     age:5,
//     drink:"milk",};
// console.log(animal);



// const student={
//     name:"himanshu",
//     age:18,
//     location:"ballia",
//     marks:[90,92,96],
//     isPassed:true,
// };
// console.log(student);




// const thread={
//     username:"himanshu",
//     content:"javascript is great",
//     likes:"4k",
//     reports:6,
//     tags:["javascript","web development","programming"],
// };
// console.log(thread);
// console.log(thread.username,thread.tags[1],thread.tags[2]);






// const student={
//     himanshu:{
//         rollno:1,class:"2c",marks:[90,92,96],
//     },
//     ram:{
//         rollno:2,class:"2c",marks:[89,92,97],
//     },
//     honey:{
//         rollno:3,class:"2c",marks:[88,92,98],
//     }
//     }
// console.log(student);




// let num =prompt("enter your number");
// console.log(num);
// let guess=Math.floor(Math.random()*10)+1;
// console.log(guess);
// while(num!=guess){
//     console.log("wrong guess! try again");
//     num=prompt("enter your number");
// }
// console.log("congrats! you guessed it 🎉");





// let dice=Math.floor(Math.random()*6)+1;
// console.log(dice);





// function sum(a,b,c){
//     console.log(a+b);
//     console.log(a+b+c);
// }
// function name(){
//     console.log("himanshu");
// }
// name();
// sum(11,13);
// sum(11,13,15);




// function printpoem(){
//     console.log("twinkle twinkle little star");
//     console.log("how i wonder what you are");
//     console.log("up above the world so high");
//     console.log("like a diamond in the sky");
//     console.log("twinkle twinkle little star");
//     console.log("how i wonder what you are");       
// }
// printpoem();





// function rolldice(){
//     const num=Math.floor(Math.random()*6+1);
//     console.log(num);
// }
// rolldice();



// function average(a,b,c){
//     console.log((a+b+c)/3);
// }
// average(10,20,30);


// function table(num){
//     for(let i=1;i<=10;i++){
//         console.log(num + " * "+ i +" = "+ (num*i));
//         }
// }
// table(5);



// function addition(a,b){
//     return a+b;
// }
// console.log(addition(10,4));





/*print sum of first n natural numbers*/
// function number(n){
//     let sum=0;
// for (let i=1;i<=n;i++){
//     sum=sum+i;
// }
// return sum;
// }
// console.log(number(5));




/*concetination of strings*/
// let arr=["my","name","is","himanshu","sharma"];
// function concetination(arr){
//     let result="";
//     for(let i=0;i<arr.length;i++){
//         result+=arr[i]+" ";
//     }
//     return result;
// }
// console.log(concetination(arr));






/* heigher order function */
// const multiplegreet=function(funn,n){
//     for(let i=0;i<n;i++){
//         funn();
//     }
// }
// const greet=function(){
//     console.log("hello");
// }
// multiplegreet(greet,3);





/*this key word*/
// const student={
//     name:"himanshu",
//     phy:94,
//     che:95,
//     eng:88,
//     hin:93,
//     sci:90,
//     getavg(){
//         let average=(this.eng+this.hin+this.sci)/3;
//         console.log(average);
//     }
// }


// console.log("hello");
// try{
// console.log(a);
// }catch(e){
//     console.log("an error occured");
// }





// console. log ("hi there!");
// setTimeout ( ()=>{
// console. log("Apna College");}, 5000);
// console. log ("welcome to");





// setInterval(()=>{
//     console.log("hi there!");
//     console.log("hello");
//     console.log("welcome to");
// },5000);




// let arr=[{
//     name:"himanshu",
//     marks:93,
// },{
//     name:"kashish",
//     marks:94,
// },{
//     name:"hemant",
//     marks:90,
// },];
// arr.forEach((student)=>{
//     console.log(student)
// });




/*map function*/
// let arr=[1,2,3,4];
// let double=arr.map(function(el){
//     return el*2;
// });
// console.log(double);





/*filter function*/
// let arr=[1,2,3,4,5,6,2,4,5,3,6,9,10];
// let ans=arr.filter(function(el){
//     return el%2==0;
// })
// console.log(ans);





/*is nums are multiple of 10 or not*/
// let nums = [10,20,30,40,50,40,60,70,80,90,100];
// let num=nums.every((el)=>{
//     return el%10===0;
// });
// console.log(num);






/* to find minimun num*/
// function getmin(arr){
// let min=arr.reduce((min,el)=>
//     {if(min<el) 
//         {return min;} 
//         else {return el;}
//     });

//     return min;
// }
//     let arr=[12,3344,5,21,4,67,23];
// console.log(getmin(arr));





/* default parameter*/
// function sum(a=5,b){
//     return a+b;
// }
// console.log(sum(5,4));



/*spread method*/
// let string="hello world";
// let newarr=[...string];
// console.log(newarr);
// // console.log([...string]);
// let arr=[2,3,5,2,1,4,6,8,9,64,123,453,121,2,3,0,-12,9];
// console.log(...arr);
// console.log([...arr]);
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));





/* spread object laterals */
// const student=[
// {
//     name:"himanshu",
//     age:18,
// },
// {
//     name:"kashish",
//     age:19,
// }]
// let newstudent={...student, id:180};
// console.log(newstudent);




/*javascript call stack*/
// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     return two()+one();
// }

// three();




/* callback hell*/
// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed to " + color);
//         }, delay);
//     });
// }
// changeColor("red", 1000)
//     .then(() => {
//         console.log("color changed to red");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("color changed to green");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("color changed to blue");
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("color changed to orange");
//         return changeColor("pink", 1000);
//     })
//     .then(() => {
//         console.log("color changed to pink");
//         console.log("all colors are changed");
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// changeColor("red", 1000, () => {
//     changeColor("green", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("orange", 1000, () => {
//                 changeColor("pink", 1000, () => {
//                     console.log("all colors are changed");
//                 });
//             });
//         });
//     });
// });





//     function saveToDb(data, success, failure) {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed < 5) {
//             success();
//         } else {
//             failure();
//         }
//     }

//     saveToDb("apna college",
//         () => {
//             console.log("s1 your data was saved");
//             saveToDb("apna college2",
//                 () => {
//                     console.log("s2 your data was saved");
//                     saveToDb("apna college3",
//                         () => {
//                             console.log("s3 your data was saved");
//                         },
//                         () => {
//                             console.log("weak internet");
//                         }
//                     );
//                 },
//                 () => {
//                     console.log("weak internet");
//                 }
//             );
//         },
//         () => {
//             console.log("weak internet");
//         }
// );

/*
Promises
The Promise object represents the eventual completion(success-> resolve) (or failure-> reject) of an asynchronous operation
and its resulting value.*/

// function savetoDb(data) {
//     return new Promise((success, failure) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 5) {
//             success("your data was saved");
//         } else {
//             failure("weak internet");
//         }
//     });
// }



// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 5) {
//             resolve("your data was saved");
//         } else {
//             reject("weak internet");
//         }
//     });
// }

// let request= savetoDb("apna college");// req=promise object
// request.then(()=>{
//     console.log("promise resolved");
//     console.log(request);
// })
// .catch(()=>{
//     console.log("promise rejected");
//     console.log(request);
// });

// savetoDb("apna college")// req=promise object
//     .then((result) => {
//         console.log("1st promise resolved");
//         console.log("result of promise: ", result);
//         return savetoDb("apna college2")
//     })
//     .then((result) => {
//         console.log("2nd promise resolved");
//         console.log("result of promise: ", result);
//         return savetoDb("apna college3");
//     })
//     .then((result) => {
//         console.log("3rd promise resolved");
//         console.log("result of promise: ", result);
//     })
//     .catch((error) => {
//         console.log("promise rejected");
//         console.log("error of promise: ", error);  
//     });


// async function greet(){
//     return "hello";
// }

console.log("hello world");