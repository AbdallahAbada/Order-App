//  SELLECTION
const orderBtn = document.querySelector(".order-btn");

// EVENTS
orderBtn.addEventListener('click', () => {
    userId = prompt("Please enter your ID", "User ID")
    console.log(`Cooking a meal to ${userId}`)

    const event = new CustomEvent("ready", {
        detail: {
            user: userId
        }
    });

    setTimeout(() => {
        document.dispatchEvent(event)
    }, 3000)

})

document.addEventListener("ready", (e) => {
    console.log(`Serving a meal to client ${e.detail.user}`)
})

