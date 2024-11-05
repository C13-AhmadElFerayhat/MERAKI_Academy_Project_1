
const alphabet = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const  Q = [
    {
        id: 1,
        c: "Animals",
        name: ["z","e","b","r","a"],
        // name1: "cat",
        r: 4
    },
    {
        id: 2,
        c: "Colors",
        name: ["p","u","r","p","l","e"],
        r: 3
    },{
        id: 3,
        c: "Food",
        name: ["p","i","z","z","a"],
        r: 3
    },{
        id: 4,
        c: "Sports",
        name: ["g","o","l","f"],
        r: 3
    },{
      id: 5,
      c: "Body Parts",
      name: ["h","e","a","r","t"],
      // name1: "cat",
      r: 4
  },
  {
      id: 6,
      c: "Nature",
      name: ["o","c","e","a","n"],
      r: 3
  },{
      id: 7,
      c: "Weather",
      name: ["s","t","o","r","m"],
      r: 3
  },{
      id: 8,
      c: "cars",
      name: ["h","o","n","d","a"],
      r: 3
  },{
    id: 9,
    c: "Clothing",
    name: ["s","h","i","r","t"],
    r: 3
},{
    id: 10,
    c: "Transportation",
    name: ["t","r","a","i","n"],
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
const wel = document.getElementById("wel")
const rulebutton = document.getElementById("head2")
const rule = document.getElementById("rules")
const nd = document.getElementById("2nd")
const hang = document.getElementById("Hang")
const st = document.getElementById("1st")
const end = document.getElementById("end")
const h1End = document.getElementById("h1End")
const score= document.getElementById("score")
let r1 = 0
let r2 = 0
let n1 = 0
let  Q1 =  Q
let A1 = alphabet
  const start = () =>{
    h1End.innerHTML = ""
    end.innerText = ""
    nd.innerHTML = ""
    rule.innerText = ""
    start1.remove()
    rulebutton.remove()
    wel.innerText = ""
    clue.innerHTML = ""
    score.innerHTML = ""
        alpha.innerHTML = ""
        imgMain.innerHTML = ""
        Alpha.innerHTML = ""
        const score1 = document.createElement("p")
        const timer = document.createElement("p")
        score1.id = "score1"
        timer.id = "score1"
        score.append(score1, timer)
        console.log(r2);
        
        score1.innerHTML = "Score: " + r2
        timer.innerHTML = "timer:"
        const retry = document.createElement("button")
        const home = document.createElement("button")
        nd.append(retry, home)
        retry.innerText = "Retry"
        home.innerText = "Home"
    const firstIm = document.createElement("img")
    firstIm.src = images[n1].src
    firstIm.id = "img1"
    imgMain.append(firstIm)
    let q = Math.round(Math.random() * ( Q1.length - 1))
    const p10 = document.createElement("p")
    clue.append(p10)
p10.innerHTML = Q1[q].c
let r;
  Q1[q].name.forEach((element,i) => {
    let s = document.createElement("dev")
    r = document.createElement("img")
    r.src = "New folder/mark.png"
    r.id = "ggg"
    alpha.append(s)
    s.append(r)
    s.id = i
})
let i1 = document.createElement("img")
alphabet.forEach ((element, i2) => {
w = document.createElement("p")
    Alpha.append(w)
    w.innerText = element
    w.id = "uni"
    w.classList.add(element)
    w.addEventListener("click", (e)=>{
      let t;
         Q1[q].name.forEach ((element1,i) => {
          console.log("fromtheE:" + e.target.innerText, "fromthearray:" + element1.toUpperCase());
          
          if (e.target.innerText === element1.toUpperCase()) {
          let g = document.getElementById(i)
          g.innerHTML = element1.toUpperCase()
          g.id = "dev1"
          i1.src = "New folder/T.png"
          e.target.style.color = "#78cdf5"
          e.target.style.textShadow = "none"
          i1.style.position = "relative"
          i1.style.bottom = "30px"
          i1.id = "img2"
        // Alpha.replaceChild(i1, Alpha.children[i2])
        e.target.append(i1)
        t = 1
        r1 = r1 + 1
        }
    })
    // e.target.innerText = ""
    if(t === undefined)
      {
        i1.src = "New folder/F.png"
        i1.id = "img2"
        i1.style.bottom = "0px"
      //   Alpha.children[i2]
      // Alpha.replaceChild(i1, Alpha.children[i2])
      e.target.innerText = ""
      e.target.append(i1)
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
        score.innerHTML = ""
        h1End.innerText = "u loose"
        end.append(h1End)
      }
      if (r1 ===  Q1[q].name.length) {
        r1 = 0
        r2 = r2 + 1
        clue.innerHTML = ""
        alpha.innerHTML = ""
        imgMain.innerHTML = ""
        Alpha.innerHTML = ""
        const h1End = document.createElement("h1")
        const next = document.createElement("button")
        end.append(h1End, next)
        next.innerText = "Next"
        h1End.innerText = "u completd this level"
        next.addEventListener("click",start)
        Q1 = Q1.filter((e,i) => {
          return Q1[q].id !== e.id
        });
        console.log(r2);
        
        
      }
    })
})

retry.addEventListener("click", () => {
Q1 = Q
n1 = 0 
r1 = 0
r2 = 0
start()
})
home.addEventListener("click", Welcome)
  }

const Welcome = () => {
  r2 = 0
  r1 = 0
  n1 = 0
  nd.innerHTML = ""
  h1End.innerHTML = ""
    wel.innerText = ""
    clue.innerHTML = ""
    alpha.innerHTML = ""
    imgMain.innerHTML = ""
    Alpha.innerHTML = ""
    score.innerHTML = ""
    st.append(start1, rulebutton)
const Wh1 = document.createElement("h1")
const Wp1 = document.createElement("p")
const Wp2 = document.createElement("p")

Wh1.innerHTML = "Welcome to Hang Man Game"
Wp1.innerHTML = "to start the game press START"
Wp2.innerHTML = "to read the rules press RULES"

wel.append(Wh1, Wp1, Wp2)


}

  const rules = () => {
    rule.innerText = ""
    wel.innerText = ""
const p = document.createElement ("p")
const h = document.createElement ("h1")
const pw = document.createElement ("p")
const hw = document.createElement ("h1")
const pl = document.createElement ("p")
const hl = document.createElement ("h1")
rule.append(h, p,hw,pw,hl,pl)
h.innerText = "Objective:"
p.innerText = "The goal is to guess the hidden word or phrase by suggesting letters, one at a time, before a drawing of a stick figure (the hangman) is completd"
hw.innerText = "Winning:"
pw.innerText = "The goal is to guess the hidden word or phrase by suggesting letters, one at a time, before a drawing of a stick figure (the hangman) is completd"
hl.innerText = "Losing:"
pl.innerText = "The goal is to guess the hidden word or phrase by suggesting letters, one at a time, before a drawing of a stick figure (the hangman) is completd"
  }

  start1.addEventListener("click", start)
  rulebutton.addEventListener("click", rules)
  
  
  