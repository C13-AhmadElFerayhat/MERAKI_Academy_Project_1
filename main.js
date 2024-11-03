
const alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const Q = [
    {
        id: 1,
        c: "man",
        name: ["c","a","t"],
        name1: "cat"
    },
    {
        id: 2,
        c: "sss",
        name: ["c","a","t"]
    },{
        id: 2,
        c: "ddd",
        name: ["c","a","t"]
    },{
        id: 3,
        c: "fff",
        name: ["c","a","t"]
    },
  ]
  const images = [
    { id: 1, src: "" /*add more key/value if need*/ },
    { id: 2, src: "" /*add more key/value if need*/ },
  ];
const body = document.querySelector("body")
const game = document.querySelector("#game")
const clue = document.querySelector("#clue")
const start1 = document.querySelector("#start")
const Alpha = document.querySelector("#Alpha")
const alpha = document.querySelector("#alpha")
  const start = () =>{
    let q = Math.round(Math.random() * (Q.length - 1))
clue.innerHTML = Q[q].c
let r;
Q[q].name.forEach((element,i) => {
    let s = document.createElement("dev")
    r = document.createElement("img")
    r.src = "New folder/mark.png"
    alpha.append(s)
    s.append(r)
    s.id = i
})
let i1 = document.createElement("img")
alphabet.forEach ((element, i2) => {
w = document.createElement("p")
    Alpha.append(w)
    w.innerText = element
    w.id = element + " uni"
    w.addEventListener("click", (e)=>{
        Q[q].name.forEach ((element1,i) => {
            if (e.target.innerText === element1) {
           
           let g = document.getElementById(i)
           g.innerHTML = element1
           let b = "#" + element1
           i1.src = "New folder/T.png"
           console.log(i1);
            Alpha.replaceChild(i1, Alpha.children[i2])
        }else{}
    })
    })
})
  }

  const Welcome = () =>{

  } 

  start1.addEventListener("click", start)
  