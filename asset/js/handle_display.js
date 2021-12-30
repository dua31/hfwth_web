// handle Main-nav header
(function() {
    const contain_nav_header = $(".contain_nav_header");
    const col_main_header = $(".col-main-header")
    const row_main_header = $(".row-main-header");
    const main_nav_header = $(".main_nav_header")
    const main_header_img = $("#main-header-img")


    function onscroll() {
        if (window.scrollY >= contain_nav_header.offsetTop + contain_nav_header.clientHeight) {
            contain_nav_header.classList.add("sticky");
            if (window.innerWidth <= 1024) {
                main_header_img.style.height = "70px"
            }
            contain_nav_header.setAttribute("style", "-webkit-animation: slowDown ease 0.7s")
            contain_nav_header.style.backgroundColor = "rgb(255, 255, 255, 0.85)"
            contain_nav_header.style.boxShadow = "1px 1px 10px rgb(0 0 0 / 15%)"
            contain_nav_header.style.animation = "slowDown ease 0.7s"
            contain_nav_header.style.height = "70px"
            col_main_header.classList.add("h-100per");
            row_main_header.classList.add("h-100per");
            main_nav_header.classList.add("h-100per");
        } else {
            contain_nav_header.classList.remove("sticky")
            contain_nav_header.removeAttribute("style")
            col_main_header.classList.remove("h-100per");
            if (window.innerWidth <= 1024) {
                main_header_img.style.height = "100px"
            }

        }
    }
    document.addEventListener("scroll", onscroll)
})()