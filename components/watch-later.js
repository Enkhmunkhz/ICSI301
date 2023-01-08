import "./add-watch-comp.js"
class WatchLaterList {
    constructor(movies){
        this.image = movies.image;
        this.filtera = movies.filtera;
        this.movie = movies;
    }
    
    render_product_card() {
            return `
            <div class="fullMovie">
                <a class="no_dec" href="./detail.html">
                <div class="movie-img">
                    <div class="background_list" style="background:url(
                    ${this.image}
                    );">
                    </div>
                </div>
                </a>
                <div class="movie-det">
                    ${new movieDetail(this.a).Render()}
                </div>
                <img src="done.png" class="unit" on>
            </div>`;
    }
    render_checkout() {
            return `
            <div class="checkout-card">
                    <div class="checkout-card-name">
                            <h4>${this.name}</h4>
                    </div>
                    <div class="checkout-card-price">
                            <p>${this.price}</p>
                    </div>
                    <div style="position:absolute;
                            right:0.5vw;
                            font-weight: bold;
                    ">
                            <p>${this.unit}</p>
                    </div>
            </div>
            `;
    }
}

class WatchLaterComponent extends HTMLElement {
    constructor() {
            super(); 
            this.products = [];
            this.className = "watch";
            this.returnValue = "";
            this.returnCheckout = "";
            this.watchNum = 0;
            if(JSON.parse(localStorage.getItem('products'))){
                    const productJson = JSON.parse(localStorage.getItem('products'));
                    this.watchNum = productJson.length;
            }
            else{
                    const productJson = [];
            }
            this.render_cart();
    }

    render_cart() {
            if(!JSON.parse(localStorage.getItem('products'))){
                    this.watchNum = 0;
            }
            this.innerHTML = `
                    <div class="shopping-cart-container">
                            <img src="./img/shopping-cart.png" alt="shopping cart" width="40">
                            <p class="product-count" style="font-weight: bold;">${this.watchNum}</p>
                    </div>
            `;
    }

    addToCart(myProduct) {
            this.products.push(myProduct);
            
            const product = new ShoppingCartProduct(myProduct.src, myProduct.name, myProduct.price, myProduct.unit);

            console.log(product);
            this.productJson.push(myProduct); //json array luuga shine jsonobject nemeh

            localStorage.setItem("products", JSON.stringify(this.productJson)); //local storaged jsonoo hadgalna
            this.watchNum++;
            this.render_cart();//shopping-cart shinechleh

            this.returnValue += product.render_product_card();
            this.returnCheckout += product.render_checkout();
    }
    jsonToCard(){
            if(JSON.parse(localStorage.getItem('products'))){
                    const products = JSON.parse(localStorage.getItem('products'));
                    for(const data of products){
                            const product = new ShoppingCartProduct(data.src, data.name, data.price, data.unit);
                            this.returnValue += product.render_product_card();
                            this.returnCheckout += product.render_checkout();
                    }
                    if(document.querySelector(".shopping-cart-products")){
                            document.querySelector(".shopping-cart-products").innerHTML = this.returnValue;
                            document.querySelector(".shopping-cart-checkout").innerHTML = this.returnCheckout;

                    }
            }
            else{
                    if(document.querySelector(".shopping-cart-products")){
                            document.querySelector(".shopping-cart-products").innerHTML = `<h2>Сагс хоосон байна.</h2>`;
                            document.querySelector(".shopping-cart-checkout").innerHTML = ``;
                    }
            }
    }
    connectedCallback() {
            if(localStorage.getItem("products")){
                    this.productJson = JSON.parse(localStorage.getItem("products"));
                    this.watchNum = this.productJson.length;
            }
            else{
                    this.productJson = [];
            }
            this.jsonToCard();
    }
    disconnectedCallback() {

    }
    get productCount() {
            return this.watchNum;
    }
}
window.customElements.define('later-comp', WatchLaterList);
