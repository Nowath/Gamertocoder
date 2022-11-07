var slideIndex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade")

    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade")
    setTimeout(showSlides, 1000);
}

fetch("https://gamertocoder.garena.co.th/api/assets").then((response) => {
    if (response.status !== 200) {
        return response.status;
    }
    return response.json();
}).then((data) => {
    if (typeof data == "number") {
        alert(data);
    } else {
        
       

        let sem = data['wallpaper'].length;
        function get_img_wh(url, callback) {
            const img = new Image();
            img.onload = function () { callback(this.width, this.height) };
            img.src = url;
        }
        let sl_img = document.querySelector(".slideshow-container")
        for (let url of data.wallpaper) {
            get_img_wh(url, (w, h) => {//===== landscape img checker ----- Tanawat
                if (w > h) {
                    let pic_html = '<div class="mySlides"  >'
                        + `<img src="${url}" width="700" class="fade"> `
                        + '</div>';
                    sl_img.insertAdjacentHTML("beforeend", pic_html) //add img finish
                };
                sem -= 1;
                if (sem == 0) {
                    showSlides();
                };
            });
        };
    };
});





function view_img() {

    window.location.href = "img.html";


}

