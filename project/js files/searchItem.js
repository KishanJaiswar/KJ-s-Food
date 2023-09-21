const search = () => {
    const searchBox = document.getElementById("searchItem").value.toUpperCase();
    const storeItem = document.getElementById("products");
    const product = document.querySelectorAll(".single-menu");
    const productName = storeItem.getElementsByTagName("h1");

    for (var i = 0; i < productName.length; i++) {
        let match = product[i].getElementsByTagName("h1")[0];
        if (match) {
            let textValue = match.innerText || match.innerHTML;
            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}