// Tablet
// handle menu header
(function handle_menuHeader() {
    const contain_menu = $(".contain_menu");
    const modal_layout_menu = $(".modal-layout.menu")
    const inner_menu = $(".inner.menu")
    const login_inerMenu = $(".inner_menu_items.sub_nav-items.login");
    const modal_layout_login = $(".modal-layout.login");
    const inner_menu_items = $(".inner.menu_items");
    const close_icon = $(".close-modal-icon.menu")

    // when click menu icon -> show modal_layout of menu -> set cannot scroll
    contain_menu.onclick = function() {
        modal_layout_menu.classList.remove("close");
        inner_menu.setAttribute("style", "-webkit-animation: moveRight ease 0.5s")
        $("body").style.height = "100%"
        $("body").style.overflow = "hidden"

    }

    function hide_layoutMenu() {
        modal_layout_menu.classList.add("close")
        $("body").removeAttribute("style")
    }
    // when click layout -> close -> 
    modal_layout_menu.onclick = hide_layoutMenu
    close_icon.onclick = hide_layoutMenu

    inner_menu.onclick = function(e) {
            e.stopPropagation()
        }
        // show login form when click login btn
    login_inerMenu.onclick = function() {
        modal_layout_menu.classList.add("close")
        modal_layout_login.classList.remove("close")

    }
    modal_layout_login.onclick = function() {
        modal_layout_login.classList.add("close")
        $("body").removeAttribute("style")

    }
})()


// handle category
const shop_sideBar = $(".shop_sideBar");
const modal_layout = $(".modal-layout.category");
shop_sideBar.onclick = function() {
    modal_layout.classList.remove("close");
    shop_sideBar.style.transform = "translateX(-10px)";
    shop_sideBar.style.opacity = 0;
    shop_sideBar.style.transition = "all ease 0.5s"
}
modal_layout.onclick = function() {
    modal_layout.classList.add("close")
    shop_sideBar.style.transform = "translateX(0px)";
    shop_sideBar.style.opacity = 1;
    shop_sideBar.style.transition = "all ease 0.5s"
}

// handle cart
const contain_cart = $(".contain_cart ")
const modal_cart = $(".modal-layoutt")
const close_icon = $(".close-modal-iconofCart")
const inner_modal = $(".inner-layout_cart")
const inCart_product_list = $(".inCart_product_list")
const inCart_product_items = $(".inCart_product_items")
contain_cart.onclick = function() {
    modal_cart.classList.remove("close");

    $("body").style.height = "100%"
    $("body").style.overflow = "hidden"
}
close_icon.onclick = function() {
    modal_cart.classList.add("close")
    $("body").removeAttribute("style")

}
inner_modal.onclick = function(e) {
    e.stopPropagation()
}
modal_cart.onclick = function() {
    modal_cart.classList.add("close")
    $("body").removeAttribute("style")


}