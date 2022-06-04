let kulaniciadi = prompt ("Kulanıcı Adi Giriniz :") // uyarının çıkmasını sağladık
let myname = document.querySelector("#myName") // uyarıya girdiğimiz değerin nerde yazılacağını girdik
myname.innerHTML=kulaniciadi // son olarak verilen değeri yazdırıyoruz

function zaman ()
{   // burda zaman atadık sadce bunu verseydik çok fazla detay olup ödevin istediği olmazdı
    let anlık = new Date();  
    // saat ekledik
    let saat = anlık.getHours(); 
    // dakika ekledik
    let dakika = anlık.getMinutes(); 
    // saniye ekledik
    let saniye = anlık.getSeconds(); 
    // güne ekstra zaman atamamızın sebebi aşağıdaki verdiğimiz değerler ile sorunsuz çalışa bilsin diye aksi takdirde çalışmaz
    var d = new Date(); 
    // günleri ekledik
    var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    // id tanımmladık
    let iceaktarma = document.querySelector("#myClock") 
    // burda oluşturduğumuz değerleri ekrana yazdırıyoruz
    iceaktarma.innerHTML= saat + ":" + dakika +":" + saniye + " " + gunler[d.getDay()]; 
}
let simdi = setInterval(zaman,100); 
