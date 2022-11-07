//----------------I make it easier to insert to any part of file-------by Tanawat
sq_count = 48//adjust sq amount here
sq_html_str = ''
for (sq_i = 1; sq_i <= sq_count; sq_i++) {
    sq_str = `<span class="sq sq-${sq_i}" style="animation-delay: ${sq_i * 0.02}s;border:1px solid black;z-index:${sq_count - sq_i}"></span>`
    sq_html_str += sq_str

}
loading_html =
    '<div class="loading_sq"><p style="color:white">loading</p>'
    + sq_html_str
    + '</div>'



body_el = document.querySelector("#loading")
body_el.insertAdjacentHTML("afterbegin", loading_html);
///////////////////////////////////////////////////////////////
document.onreadystatechange = () => {
    if (document.readyState !== "complete") {

        document.querySelector("#loading").style.visibility = "visible";
    } else {
        document.querySelector("#loading").style.display = "none";

    }
}


//ลองโหลด หน้าindex ยัง disable cache ด้วยนะ จะได้่เห็นหน้าโหลดแบบนานๆ
