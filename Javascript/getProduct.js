function getProduct() {
    
    let itemId = localStorage.getItem("productId")
    // https://fakestoreapi.com/products/1
    
    fetch(`https://fakestoreapi.com/products/${itemId}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let productImg = document.getElementsByClassName('productAdd')
        let  imgContent = ""

         imgContent += `
        
            <div>
                <h2 class="">${data.title}</h2>
                <img class="" src=${data.image} alt="">
                
            </div>

        `
        
       productImg.innerHTML = imgContent;
    })    

}
    
    
  
            

