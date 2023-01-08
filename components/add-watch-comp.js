class AddList extends HTMLElement {
    constructor(){
            super();
            this.innerHTML = `
                    <div class="add-container">
                        <div class="add-icon"></div>
                    </div>
            `;
    }
    connectedCallback(){
            this.parentNode.querySelector("add-list").addEventListener('click', () => {
                    const list = document.querySelector("later-comp");
                    const json = 
                            {
                                "name": this.parentNode.childNodes[5].textContent.trim(" "),
                                "image": this.parentNode.childNodes[1].style.backgroundImage.slice(5, -2),
                                "eps_num": this.parentNode.childNodes[2].textContent.trim(" "),
                                "year": this.parentNode.childNodes[6].textContent.trim(" "),
                                "type": this.parentNode.childNodes[3].textContent.trim([]),
                                "fav": this.parentNode.childNodes[7].textContent.trim(" "),
                                "fav": this.parentNode.childNodes[8].textContent.trim(" "),
                                "unit": 1
                            };
                    
                    console.log(this.parentNode.childNodes[1].style.backgroundImage.slice(5, -2));
                    list.addToCart(json);
            });
    }
}
customElements.define("add-list", AddList);