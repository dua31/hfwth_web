// products data
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
const Arr_quantity_inCatt = [];

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const contain_product = $(".contain-product");
const product = (function() {
    var product_group = [{
        name: "13 Long Sleeve",
        price: "500.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/10/13-Long-sleeve-300x298.jpg"
    }, {
        name: "2020 Travel Jacket",
        price: "550.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/10/2020-Travel-jacket-300x300.jpg"
    }, {
        name: "2021 Hoodie",
        price: "550.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/10/7A517C14-0145-4B44-99E9-93B170376DEB-300x300.jpeg"
    }, {
        name: "2021 Tee",
        price: "300.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/10/received_872269623650048-300x300.jpeg"
    }, {
        name: "4×4 Sweater",
        price: "500.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/10/4x4-300x300.png"
    }, {
        name: "White Signature Shoes",
        price: "890.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/11/shoes-white-300x300.jpg"
    }, {
        name: "B/W Jacket",
        price: "500.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/10/bw-300x300.jpg"
    }, {
        name: "Bag Summer",
        price: "350.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/11/bag-summer-300x300.jpg"
    }, {
        name: "Basketball Jacket",
        price: "550.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/10/IMG_6214-300x300.jpg"
    }, {
        name: "Black Signature Shoes",
        price: "890.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/11/shoes-black1-300x300.jpg"
    }, {
        name: "Black White Shorts",
        price: "420.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/11/black-white-shorts-300x300.jpg"
    }, {
        name: "Basketball Jacket",
        price: "550.000",
        img: "https://havefunwiththehomies.com/wp-content/uploads/2021/11/lifes-a-beach-sweater-300x300.jpg"
    }];

    return {
        add(product) {
            product_group.push(product);
        },
        renderProduct_Mainview() {
            let html = product_group.map(function(product, index) {
                return `<div class="col l-4 contain-product-item m-4 c-12">
                            <div class="product-item" data-index="${index}">
                                <img src="${product.img}" alt="" class="product-item-img">
                                <div class="quick-view-item c-0">quick view</div>
                                <div class="product-item-desc">
                                    <label for="" class="product-name">${product.name}</label>
                                    <label for="" class="product-price">${product.price} ₫</label>
                                </div>
                            </div>
                        </div>`
            })
            contain_product.innerHTML = html.join("");
        },
        render_quickView(product_group, index) {
            const modal_container_QuickView = $(".modal-container.quick_View");

            var html = [product_group[index]].map(function(product) {
                return `<div class="contain-quickView-img">
                 <img src="${product.img}" alt="" class="quickView-img">
             </div>
             <div class="contain-quickView-info">
                 <div class="quickView-info">
                     <h2 class="quickView-info-name pointer">${product.name}</h2>
                     <div class="divide"></div>
                     <div class="contain-quickView-info-price">
                     <p class="quickView-info-price">
                         ${product.price}
                         </p>
                         <lable class="price-symbol">₫</lable>
                     </div>
                     <form action="" class="variaton_form">
                         <div class="contain-size-label">
                             <label class="size-label" for="">Size:
                                 <label for="" class="cur-size"></label>
                             </label>
                             <div class="clear-size-items_border pointer">clear</div>
 
                         </div>
                         <ul class="size-list">
                             <li class="size-items L">L
                             </li>
                             <li class="size-items M">M
                             </li>
                             <li class="size-items XL">XL
 
                             </li>
                         </ul>
                         <div class="quantity">
                         <div class="handle_quantity">
                         <input type="button" class="handle-quantity-btn minus" value="-">
                         <input type="text" class="cur-quantity-input" value="1">
                         <input type="button" class=" handle-quantity-btn plus" value="+">
                         </div>
                              <div class="contain-submit_addtoCart">
                              <div type="submit" class="add-to-cart pointer">ADD TO CART</div>
                              </div>
                             
                         </div>
                     </form>
                     <div class="product-meta">
                         <span class="sku_wrapper">SKU: 
                             <span class="sku">N/A</span>
                         </span>
                         <span class="posted_in">
                             Category: 
                             <a href="" class="category">Jacket</a>
                         </span>
                     </div>
                 </div>
             </div>
             <div class="close-modal-icon product">
                 <i class="ti-close"></i>
             </div>`
            })
            modal_container_QuickView.innerHTML = html.join("");



        },
        handleItem_inCart(listProduct_addtoCart, index, quanity_inProduct, Arr_totalPrice_inCatt, Arr_quantity_inCatt) {

            const inCart_product_list = $(".inCart_product_list");
            const quantity = "quantity";
            const size = "size";
            const cur_size = $(".cur-size").innerText;
            const sub = $(".sub");
            const text_noCart = $(".when-no-cart");
            const inCart_have_products = $(".inCart_have-products");

            // no solve !!!


            product_group[index][quantity] = quanity_inProduct.value;
            product_group[index][size] = cur_size;
            listProduct_addtoCart.push(product_group[index]);

            //render Product_inCart
            function renderProduct_inCart() {
                const html = listProduct_addtoCart.map(function(product, index) {
                    return `<li class="inCart_product_items" data-index=${index}>
                    <img src="${product.img}" alt="" class="inCart_product_items_img">
                    <div class="inCart_contain-product_items_info">
                        <div class="inCart_product_items_main-info">
                            <span class="inCart_product_items_name">${product.name}</span>
                            <span class="divided">-</span>
                            <span class="inCart_product_items_size">${product.size}</span>
                        </div>
                        <div class="inCart_product_items_sub-info">
                            <span class="inCart_product-items_quantity">${product.quantity}</span>
                            <span class="multiply">x</span>
                            <div class="inCart_contain-product-items_price">
                                <span class="inCart_product-items_price">${product.price}</span>
                                <span style="text-transform: lowercase;" class="inCart_price-symbol">₫</span>
                            </div>
                        </div>
                    </div>
                    <span class="inCart_product_items-close">
                        <i class="ti-close" ></i>
                    </span>
                </li>`
                })
                inCart_product_list.innerHTML = html.join("");

                sub.style.display = "block";
                inCart_have_products.style.display = "block";
                text_noCart.style.display = "none";

                // handle when multily product in Cart (srcoll)

                handleScroll_incart()

            }
            renderProduct_inCart()

            function handleScroll_incart() {
                const inCart_product_list = $(".inCart_product_list");
                const contain_cart = $(".contain_cart")

                contain_cart.onmouseover = function() {
                    const inCart_product_items = $(".inCart_product_items")
                    if (inCart_product_items) {
                        var max_height = inCart_product_items.clientHeight * 4

                        if (inCart_product_list.clientHeight > 300) {

                            inCart_product_list.style.height = max_height + "px";
                            inCart_product_list.style.overflow = "hidden";
                            inCart_product_list.style.overflowY = "auto";
                        }
                    }
                }

            }

            //delete item when click close 
            inCart_product_list.onclick = function(e) {
                const delete_btn = e.target.closest(".inCart_product_items-close");
                const quanity_inCart = $(".cart-icon");
                if (delete_btn) {
                    const data_index_productItem = delete_btn.parentElement.getAttribute("data-index");
                    listProduct_addtoCart.splice(data_index_productItem, 1);
                    renderProduct_inCart()
                    inCart_product_list.removeAttribute("style");

                    const cur_price = $(".toal_price");
                    const inCart_subtotal = $(".inCart_subtotal")
                    Arr_totalPrice_inCatt.splice(data_index_productItem, 1);
                    const left_totalPrice = Arr_totalPrice_inCatt.reduce((total, curPrice) => {
                        return total + Number(curPrice)

                    }, 0);

                    if (left_totalPrice > 0) {
                        cur_price.innerHTML = `${left_totalPrice.toLocaleString('vi-VN')}.000`;
                        inCart_subtotal.innerHTML = `${left_totalPrice.toLocaleString('vi-VN')}.000`;
                        Arr_quantity_inCatt.splice(data_index_productItem, 1)
                        const curQuantity_inCart = Arr_quantity_inCatt.reduce((total, curQuantity) => {
                            return total + Number(curQuantity)

                        }, 0);
                        quanity_inCart.innerHTML = curQuantity_inCart;

                        // when cart is empty
                    } else {
                        cur_price.innerText = 0;
                        Arr_quantity_inCatt.splice(data_index_productItem, 1)
                        quanity_inCart.innerHTML = 0;
                        text_noCart.style.display = 'block';
                        inCart_have_products.style.display = 'none';

                    }

                }

            }

        },
        handleClick_sizeItems() {
            const size_items = $$(".size-items");

            for (let i = 0; i < size_items.length; i++) {
                //when click
                size_items[i].onclick = () => {
                    let size_items_border = $(".size-items.border");
                    const cur_size = $(".cur-size");
                    const clear_size_items_border = $(".clear-size-items_border");

                    function clearItemsBorder() {
                        clear_size_items_border.onclick = function() {
                            handleClearItem_border();
                        }
                    }

                    function handleClearItem_border() {
                        size_items[i].classList.remove("border");
                        clear_size_items_border.setAttribute("style", "display:none");
                        cur_size.innerText = "";
                        isBorder = false;
                    }

                    // clear-item-bordered
                    handleClearItem_border()
                    if (!size_items_border) {
                        size_items[i].classList.add("border");
                        cur_size.innerText = size_items[i].innerText;
                        clear_size_items_border.setAttribute("style", "display:block");
                        clearItemsBorder()
                    } else {
                        size_items_border.classList.remove("border")
                        size_items[i].classList.add("border")
                        cur_size.innerText = size_items[i].innerText
                        clear_size_items_border.setAttribute("style", "display:block");
                        clearItemsBorder()
                    }

                }

            }
        },
        handleQuantity_product() {
            const minusBtn = $(".handle-quantity-btn.minus");
            const plusBtn = $(".handle-quantity-btn.plus");
            const quanity_inProduct = $(".cur-quantity-input");

            minusBtn.onclick = function() {
                if (quanity_inProduct.value > 1) {
                    quanity_inProduct.value--
                }
            }
            plusBtn.onclick = function() {
                quanity_inProduct.value++
            }
        },
        handle_login_form() {
            const modal_layout = $(".modal-layout.login");
            const login_btn = $(".sub_nav-items.login");
            const login_btn2 = $(".inner_menu_items.sub_nav-items.login")
            const close_icon = $(".close-modal-icon");
            const modal_container = $(".modal-container.login");

            // show login-form
            function showlogin_form() {
                console.log('da bam trung')
                modal_layout.classList.remove("close")
            };

            // hide login-form
            function hidelogin_form() {
                modal_layout.classList.add("close")

            }
            login_btn2.onclick = showlogin_form
            login_btn.onclick = showlogin_form
            close_icon.onclick = hidelogin_form
            modal_layout.onclick = hidelogin_form
            modal_container.onclick = function(e) {
                e.stopPropagation()
            }




        },
        clickEveryProduct() {
            const _this = this;
            const product_items = $$(".product-item");
            const modal_layout = $(".modal-layout");
            const modal_container_QuickView = $(".modal-container.quick_View");
            const Arr_totalPrice_inCatt = [];
            const listProduct_addtoCart = []

            ;
            (function handleShowQuick_view() {
                Array.from(product_items).forEach(function(product_item, index) {
                    let quickView_btn = product_item.querySelector(".quick-view-item");

                    // handle close quickView
                    function hideQuick_view() {
                        modal_layout.classList.add("close");
                    }

                    function handleQuickView() {
                        if (!isOutof_Stock(product_item)) {
                            // Show quickView
                            modal_layout.classList.remove("close");
                            _this.render_quickView(product_group, index)

                            // Close quickView
                            const close_modalQuickView = $(".close-modal-icon");
                            close_modalQuickView.addEventListener("click", hideQuick_view);
                            modal_layout.addEventListener("click", hideQuick_view);



                            // handle when click size-items(L,M,XL)
                            _this.handleClick_sizeItems()


                            //handle in Cart
                            const addtoCartBtn = $(".add-to-cart");

                            addtoCartBtn.onclick = () => {
                                //check is items border?
                                const size_items_border = $(".size-items.border");
                                if (!size_items_border) {
                                    console.log(Arr_quantity_inCatt)
                                    alert("Please select some product options before adding this product to your cart.")
                                } else {

                                    //handle quantity in cart
                                    const quanity_inProduct = $(".cur-quantity-input");
                                    const quanity_inCart = $(".cart-icon");

                                    Arr_quantity_inCatt.push(quanity_inProduct.value);
                                    const curQuantity_inCart = Arr_quantity_inCatt.reduce((total, curQuantity) => {
                                        return total + Number(curQuantity)

                                    }, 0);
                                    quanity_inCart.innerHTML = curQuantity_inCart;

                                    //handle price in cart
                                    const cur_price = $(".toal_price");
                                    const priceofProduct = $(".quickView-info-price");
                                    const inCart_subtotal = $(".inCart_subtotal")
                                    const priceXquanity_product = Number(priceofProduct.innerText) * quanity_inProduct.value
                                    Arr_totalPrice_inCatt.push(priceXquanity_product)
                                    var totalPrice_inCart = Arr_totalPrice_inCatt.reduce((total, curPrice) => {
                                        return total + Number(curPrice)

                                    }, 0);
                                    cur_price.innerHTML = `${totalPrice_inCart.toLocaleString('vi-VN')}.000`;
                                    if (inCart_subtotal) {

                                        inCart_subtotal.innerHTML = `${totalPrice_inCart.toLocaleString('vi-VN')}.000`;
                                    }
                                    hideQuick_view();





                                    //handle items in Cart 
                                    _this.handleItem_inCart(listProduct_addtoCart, index, quanity_inProduct, Arr_totalPrice_inCatt, Arr_quantity_inCatt)





                                }
                            };


                            //Handle quantity of Product
                            _this.handleQuantity_product()

                        }
                    }
                    modal_container_QuickView.onclick = function(e) {
                        e.stopPropagation()
                    }
                    quickView_btn.onclick = function(e) {
                        e.stopPropagation()
                    }
                    product_item.addEventListener("click", handleQuickView)
                    quickView_btn.addEventListener("click", handleQuickView)


                })

            })()
        },
        handle_containerCart() {

        },
        run() {
            this.renderProduct_Mainview();
            this.clickEveryProduct();
            this.handle_containerCart();
            this.handle_login_form()
        }
    }
})()
product.run()

var product_items = $$(".product-item");



// Handle product when out of stock
function product_outofStock() {
    let data_index_product = Array.from(arguments);
    data_index_product.forEach(function(index_product) {
        for (let i = 0; i < product_items.length; i++) {
            if (product_items[i].getAttribute("data-index") == index_product) {
                product_items[i].innerHTML += ` <div class="outOf_stock uppercase">out of stock</div>`;
                const quickView_item = product_items[i].querySelector(".quick-view-item");
                quickView_item.setAttribute("style", "visibility: hidden;")
            }
        }
    })

}
// check is product out-of-stock?
function isOutof_Stock(product_item) {
    if (product_item.querySelector(".outOf_stock")) {
        return true
    } else {
        return false
    }
}
// Handle product when hover img
function hover_changingImg(data) {
    let data_index_product = [];
    let new_img_product = [];
    let old_img_product = [];

    data.forEach(function(product_changing) {
        data_index_product.push(product_changing.data_index)
        new_img_product.push(product_changing.new_img_address)
        old_img_product.push(product_changing.old_img_address)
    })

    //set img
    for (let i = 0; i < data_index_product.length; i++) {
        Array.from(product_items).forEach(function(product) {
            if (product.getAttribute("data-index") == data_index_product[i]) {
                product.onmouseover = function() {
                    const product_img = product.querySelector(".product-item-img");
                    setTimeout(function() {
                        product_img.setAttribute("style", "opacity:0.95");
                        product_img.setAttribute("src", new_img_product[i]);

                    }, 200)
                }
                product.onmouseout = function() {
                    const product_img = product.querySelector(".product-item-img");
                    setTimeout(function() {
                        product_img.setAttribute("src", old_img_product[i]);
                        product_img.setAttribute("style", "opacity:1")

                    }, 200)
                }
            }
        })
    }
}