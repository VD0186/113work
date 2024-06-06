window.onload = function() {
    var specificDiv = document.getElementById('content0');
    if (specificDiv) {
        specificDiv.style.display = 'block';
    }
};   



    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    } else {
    document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
    }



    function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

    }
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    document.getElementById("myDropdown").classList.remove("show");
    }
    }



    function display0(){
        let a = document.getElementById("content1");
        let b = document.getElementById("content2");
        let c = document.getElementById("content3");
        let d = document.getElementById("content4");
        let z = document.getElementById("content0");
        z.style.display = "block";
        a.style.display = "none";
        b.style.display ="none";
        c.style.display ="none";
        d.style.display ="none";
    }
    function display1(){
        let a = document.getElementById("content1");
        let b = document.getElementById("content2");
        let c = document.getElementById("content3");
        let d = document.getElementById("content4");
        let z = document.getElementById("content0");
        z.style.display = "none";
        a.style.display = "block";
        b.style.display ="none";
        c.style.display ="none";
        d.style.display ="none";
    }
    function display2(){
        let a = document.getElementById("content1");
        let b = document.getElementById("content2");
        let c = document.getElementById("content3");
        let d = document.getElementById("content4");
        let z = document.getElementById("content0");
        z.style.display = "none";
        a.style.display = "none";
        b.style.display ="block";
        c.style.display ="none";
        d.style.display ="none";
    }
    function display3(){
        let a = document.getElementById("content1");
        let b = document.getElementById("content2");
        let c = document.getElementById("content3");
        let d = document.getElementById("content4");
        let z = document.getElementById("content0");
        z.style.display = "none";
        a.style.display = "none";
        b.style.display ="none";
        c.style.display ="block";
        d.style.display ="none";
    }
    function display4(){
        let a = document.getElementById("content1");
        let b = document.getElementById("content2");
        let c = document.getElementById("content3");
        let d = document.getElementById("content4");
        let z = document.getElementById("content0");
        z.style.display = "none";
        a.style.display = "none";
        b.style.display ="none";
        c.style.display ="none";
        d.style.display ="block";
    }


document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const images = ["https://vd0186.github.io/113work/tai01.jpg", "https://vd0186.github.io/113work/tai02.jpg", "https://vd0186.github.io/113work/tai03.jpg"]; 
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        container.style.backgroundImage = `url(${images[currentIndex]})`;
    }, 3000); 
});
