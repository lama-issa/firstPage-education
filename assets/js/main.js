

$(document).ready(function(){
    $('#loading').fadeOut(3000)
})

let register=document.getElementById("register");
let registerPage=document.getElementById("register-page");
let overlayReg=document.getElementById("overlay-reg");
register.addEventListener('click',function(){
    registerPage.style.display='block';
})

overlayReg.addEventListener('click',function(){/*لما اكبس على المنطقة الي خارخ الفورم يخفي صفحة الرجستر */
    registerPage.style.display='none';
})

