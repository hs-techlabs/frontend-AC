// let jsonRes=
// '{"fact":"Cats dislike citrus scent.","length":26}';

// // console.log(jsonRes); // Output: {"fact":"Cats dislike citrus scent.","length":26} 

// let obj = JSON.parse(jsonRes);
// console.log(obj.fact); // Output: Cats dislike citrus scent.


// let students={
//     name: "John",
//     age: 20,
//     marks: [85, 90, 78]
// };

let btn =document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let fact = await getfacts();
    console.log(fact);
    let p = document.createElement("p");
    p.textContent = fact;
    document.body.appendChild(p);
});

let url = "https://catfact.ninja/fact";
async function getfacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch (error) {
        console.error("Error fetching cat fact:", error);
        return "Error fetching cat fact";
    }
}