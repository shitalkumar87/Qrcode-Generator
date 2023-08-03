const input=document.querySelector("input")
const qrimg=document.querySelector("img")
const generatebtn=document.querySelector("#generate")
const downloadbtn=document.querySelector("#download")

generatebtn.addEventListener("click",()=>{
    const qrcode=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
    qrimg.src=qrcode;
})

downloadbtn.addEventListener("click",async()=>{
     const response=await fetch(qrimg.src);
     const blob=await response.blob()
     const downloadlink=document.createElement("a");
     downloadlink.href=URL.createObjectURL(blob);
     downloadlink.download="qrcode.jpg"
     downloadlink.click()
})