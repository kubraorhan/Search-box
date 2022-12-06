const input = document.getElementById("search-item");
input.addEventListener("keyup",search);

function search(){
    const inputValue = input.value.toLowerCase();
    const product = document.getElementsByClassName("product");
    for (let i = 0; i < product.length; i++) {
        let item = product[i];
        item.style.display = item.innerHTML.toLowerCase().includes(inputValue) ? "": "none"
    }
} 