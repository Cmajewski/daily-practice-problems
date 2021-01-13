document.addEventListener("DOMContentLoaded",()=>{
    let form=document.querySelector("form")
    form.addEventListener("submit",function(event){
        console.log(event)
    })
})