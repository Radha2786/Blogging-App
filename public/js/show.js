console.log("Radhaaa");
let showFormIcon = document.getElementById("showFormIcon");
let Myform = document.getElementById("Myform");
showFormIcon.addEventListener("click", () => {
    console.log('inside onclick',Myform.style.display);
    if(Myform.style.display==='none'){
        Myform.style.display="block";
    }else{
        Myform.style.display="none";
    }
   
});