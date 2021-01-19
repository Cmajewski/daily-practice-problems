document.addEventListener("DOMContentLoaded",()=>{
    let form=document.querySelector("form")
    form.addEventListener("submit",function(event){
        console.log(event)
    })
})

function descendingOrder(n){
    let number=Array.from(String(n), Number)
      return number.sort()
      }

function removeVowel(str){
    str.replace(/aeiou/gi,"")
    return str
}