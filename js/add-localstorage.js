// create the references to the inputs
//For addRoute.html
const departLocation = document.querySelector('.depart');
const arrivalLocation = document.querySelector('.arrive');
const taxiPrice2 = document.querySelector('.taxiPrice2');
const busPrice2 = document.querySelector('.busPrice2');
const addRoutBtn = document.querySelector('.addRoutBtn');
const noRouteAdded = document.querySelector('.noRouteAdded');

const pricePlanner = TransportPriceChecker(JSON.parse(localStorage.getItem("myRoutes")));

addRoutBtn.addEventListener("click", function() {
    // create new route
    const location = departLocation.value+"-"+arrivalLocation.value;
    pricePlanner.setNewRoute(location, +taxiPrice2.value, +busPrice2.value);

    // add the new route to the array of routes
    pricePlanner.addToRoutes(pricePlanner.getNewRoute());
    if(location == "" && taxiPrice2 == 00000 && busPrice2 == 0){
        noRouteAdded.innerHTML = "sdfbslk"
    }

    // update the routes on localstorage
    localStorage.setItem("myRoutes", JSON.stringify(pricePlanner.getAllRoutes()));

    // after button click clear inputs
    departLocation.value = ""
    arrivalLocation.value = ""
    taxiPrice2.value = ""
    busPrice2.value = ""
    // send the user to the available routes page
    // setTimeout(function() {
    //     window.location.href = window.location.host+"/route.html"
    // }, 3000)
})