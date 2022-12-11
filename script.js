let textarea = document.getElementById("textarea")
let iframe = document.getElementById("iframe")
let btn = document.getElementById("btn")
textarea.value= "<h1> Write your code here </h1>"
btn.onclick = function (){
    iframe.contentWindow.document.body.innerHTML="";
    iframe.contentWindow.document.write(textarea.value)
}
btn1.onclick = function (){
    iframe.contentWindow.document.body.innerHTML="";
    textarea.value="";
}


