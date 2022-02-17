

let userName= prompt("Lütfen kullanıcı adını giriniz: ")
let myName = document.querySelector('#myName');




let info = document.querySelector('#patika')
let value;

function myclock() { 
    
    const date = new Date()
    let h, m, s;
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();
    let session = date.getDay();


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    if (session === 1) {
        session = "Pazartesi";
    }
    if (session === 2) {
        session = "Salı";
    }
    if (session === 3) {
        session = "Çarşamba";
    }
    if (session === 4) {
        session = "Perşembe";
    }
    if (session === 5) {
        session = "Cuma";
    }
    if (session === 6) {
        session = "Cumartesi";
    }
    if (session === 7) {
        session = "Pazar";
    }

    value = h + ":" + m + ":" + s + " " + session;
    if (userName.length > 0) {
        info.innerHTML = `
        ${value}
        `
        myName.innerHTML= `${userName}`
        
    }
    setTimeout(myclock, 1000);
}
myclock()