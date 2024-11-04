
const alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const  Q = [
    {
        id: 1,
        c: "man",
        name: ["c","a","a","c","t","m"],
        name1: "cat",
        r: 4
    },
    {
        id: 2,
        c: "sss",
        name: ["c","a","t"],
        r: 3
    },{
        id: 3,
        c: "ddd",
        name: ["c","a","t"],
        r: 3
    },{
        id: 4,
        c: "fff",
        name: ["c","a","t"],
        r: 3
    },
  ]
  const images = [
    { id: 0, src: "New folder/Untitled-2.png" },
    { id: 1, src: "New folder/Untitled-3.png" },
    { id: 2, src: "New folder/Untitled-4.png" },
    { id: 3, src: "New folder/Untitled-5.png" },
    { id: 4, src: "New folder/Untitled-6.png" },
    { id: 5, src: "New folder/Untitled-8.png" },
    { id: 5, src: "New folder/Untitled-9.png" },
  ];

const body = document.querySelector("body")
const game = document.querySelector("#game")
const clue = document.querySelector("#clue")
const start1 = document.querySelector("#start")
const Alpha = document.querySelector("#Alpha")
const alpha = document.querySelector("#alpha")
const imgMain = document.getElementById("imgMain")
let r1 = 0
let n1 = 0
let  Q1 =  Q
  const start = () =>{
    clue.innerHTML = ""
        alpha.innerHTML = ""
        imgMain.innerHTML = ""
        Alpha.innerHTML = ""
    const firstIm = document.createElement("img")
    firstIm.src = images[n1].src
    imgMain.append(firstIm)
    let q = Math.round(Math.random() * ( Q1.length - 1))
    console.log(Q1);
    
clue.innerHTML = Q1[q].c
let r;
  Q1[q].name.forEach((element,i) => {
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
      let t;
         Q1[q].name.forEach ((element1,i) => {
          
          if (e.target.innerText === element1) {
          let g = document.getElementById(i)
          g.innerHTML = element1
          i1.src = "New folder/T.png"
        Alpha.replaceChild(i1, Alpha.children[i2])
        t = 1
        r1 = r1 + 1
        }
    })
    if(t === undefined)
      {
        i1.src = "New folder/F.png"
        Alpha.children[i2]
      Alpha.replaceChild(i1, Alpha.children[i2])
      n1 = n1 + 1
      }
      if (n1 > -1 && n1 < 7) {  
        firstIm.src = images[n1].src
        imgMain.append(firstIm)
      }else{
        clue.innerHTML = ""
        alpha.innerHTML = ""
        imgMain.innerHTML = ""
        Alpha.innerHTML = ""
        const h1End = document.getElementById("h1End")
        h1End.innerText = "u loose"
      }
      if (r1 ===  Q1[q].name.length) {
        r1 = 0
        clue.innerHTML = ""
        alpha.innerHTML = ""
        imgMain.innerHTML = ""
        Alpha.innerHTML = ""
        const h1End = document.getElementById("h1End")
        h1End.innerText = "u completd this level"
        Q1 = Q1.filter((e,i) => {
          console.log(Q1[q].id, e.id);
          
          return Q1[q].id !== e.id
        });
        console.log(Q1);
        
      }
    })
})


  }

  const Welcome = () =>{

  } 

  start1.addEventListener("click", start)
  
  
  