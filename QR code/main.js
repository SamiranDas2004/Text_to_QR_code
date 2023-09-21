const input=document.getElementById('input');

const button=document.getElementById('button')

const imgbox=document.getElementById('qrimg')

button.addEventListener('click',()=>{
    imgbox.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input.value;
    input.value='';
    imgbox.classList.add(".show-img");
})