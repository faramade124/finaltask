let API = "https://fakestoreapi.com/products";

newArray = [] ;
// API for get requests
let fetchRes = fetch(
    API);
        
    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(data => {
            console.log(data)
            newArray =data
            rendPost()
        })

// fetchRes();

//  rendering 

function rendPost() {
    let ProductDisplay = document.getElementById('product-details')
    let displayPost = "";

    
    newArray.forEach((e, index) => {
        displayPost += `
        <div class="addProduct col-md-3">
                <div class="card">
                    <div class="card-body">
                        <img class="tumbnail" src=${e.image} alt="">
                        <h5 class="post-title mb-4">${e.title}</h5>
                        
                         <btn class="post-body">${e.price}</btn>
                         
                    </div>
                </div>
        </div>

        `
    })

    ProductDisplay.innerHTML = displayPost;
    addProduct()
}

function addProduct() {
    let addProduct = document.querySelectorAll(".addProduct")
    addProduct.forEach((a , index)  => {
        a.addEventListener("click" , () => {
            console.log(index)
            localStorage.setItem("productId", index + 1)
            window.location.href = "product.html"
        })
    })
}