let h=0
let g=0
hs=document.getElementById("hscore")
gs=document.getElementById("gscore")
res=document.getElementById("reset")
hs.textContent=h
gs.textContent=g
function add1h(){
    h++
    hs.textContent=h
}
function add2h(){
    h+=2
    hs.textContent=h
}
function add3h(){
    h+=3
    hs.textContent=h
}
function add1g(){
    g++
    gs.textContent=g
}
function add2g(){
    g+=2
    gs.textContent=g
}
function add3g(){
    g+=3
    gs.textContent=g
}
function reset(){
    g=0
    h=0
    hs.textContent=h
    gs.textContent=g
}