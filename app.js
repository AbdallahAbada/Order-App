//  SELLECTION
let orderBtn = document.querySelector(".order-btn");
let wait = document.getElementById('wating')

// EVENTS
orderBtn.addEventListener('click', function resgId() {
    let userId = prompt("Please enter your ID", "User ID")
    console.log(`Cooking a meal to ${userId}`)
    let readyMeal = setTimeout(mealReady, 5000)
    function mealReady() {
        console.log(`Serving a meal to client ${userId}`)
        wait.innerHTML = 'Your Meal is ready!!'
    }
})

