// create the references to the inputs
//For addRoute.html
const departLocation = document.querySelector('.depart');
const arrivalLocation = document.querySelector('.arrive');
const taxiPrice2 = document.querySelector('.taxiPrice2');
const busPrice2 = document.querySelector('.busPrice2');
const addRoutBtn = document.querySelector('.addRoutBtn');

addRoutBtn.addEventListener("click", function() {
    // create new route
    const location = departLocation.value+"-"+arrivalLocation.value;
    pricePlanner.setNewRoute(location, +taxiPrice2.value, +busPrice2.value);

    // add the new route to the array of routes
    pricePlanner.addToRoutes(pricePlanner.getNewRoute())

    // update the routes on localstorage
    localStorage.setItem("myRoutes", JSON.stringify(pricePlanner.getAllRoutes()));
    // send the user to the available routes page
    // setTimeout(function() {
    //     window.location.href = window.location.host+"/route.html"
    // }, 3000)
})