//windows화면이 로드된 후 화면에 출력됨
window.onload=function(){

let div=document.querySelector("#box1"); // #box1은 아직 존재하지 않음
console.log(div); // div값은 null. null은 참조값이 없다는 뜻
div.style.backgroundColor="blue"

let button=document.querySelector("button");
console.log(button);
button.addEventListener("click", function(){
    div.style.backgroundColor="green";
    div.style.left="200px"
    })
}
