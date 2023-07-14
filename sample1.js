// document.querySelector("div").addEventListener("click",function(event){
//     console.log(this);
//     this.style.backgroundColor="blue";
//     console.log(event);
// });
$("div").on("click",function(event){
    console.log(this);
    // this.style.backgroundColor="purple";
    // console.log(event);
    // console.log(event.target);
    // event.target.style.backgroundColor="green";
    $(event.target).css("background-color","blue");
});