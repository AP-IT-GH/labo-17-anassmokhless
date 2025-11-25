const allFaqEntries = document.querySelectorAll(".faq-entry");

console.log(allFaqEntries);

for(let element of allFaqEntries){
    let buttonElement = element.querySelector("h3");

    buttonElement.addEventListener("click", () => {
        const contextElement = buttonElement.parentElement.querySelector("p");

        contextElement.classList.toggle("hidden");
    });
}