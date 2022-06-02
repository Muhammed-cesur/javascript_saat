let kulaniciadi = prompt ("Kulanıcı Adi Giriniz :") 
let myname = document.querySelector("#myName")
myname.innerHTML=kulaniciadi

function zaman ()
{
    let anlık = new Date();
    let saat = anlık.getHours();
    let dakika = anlık.getMinutes();
    let saniye = anlık.getSeconds();
    var d = new Date();
    document.getElementById("myClock").innerHTML = d.getDay();
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let iceaktarma = document.querySelector("#myClock")
    iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()];
}
let simdi = setInterval(zaman,100); 
