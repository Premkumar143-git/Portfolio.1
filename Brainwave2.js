document.addEventListener("DOMContentLoaded", () => {
    let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
    document.getElementById("cart-count").innerText = cartCount;

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            cartCount++;
            document.getElementById("cart-count").innerText = cartCount;
            localStorage.setItem("cartCount", cartCount);
            alert("Product added to cart!");
        });
    });

    // Create Search Input
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search products...");
    searchInput.style.margin = "20px";
    searchInput.style.padding = "10px";
    searchInput.style.width = "80%";
    document.body.insertBefore(searchInput, document.querySelector(".products"));

    // Product Search Functionality
    searchInput.addEventListener("keyup", () => {
        const query = searchInput.value.toLowerCase();
        document.querySelectorAll(".product").forEach(product => {
            const name = product.dataset.name.toLowerCase();
            product.style.display = name.includes(query) ? "block" : "none";
        });
    });
});
