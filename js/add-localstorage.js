// create the references to the inputs
//For addRoute.html
const departLocation = document.querySelector('.depart');
const arrivalLocation = document.querySelector('.arrive');
const taxiPrice2 = document.querySelector('.taxiPrice2');
const busPrice2 = document.querySelector('.busPrice2');
const addRoutBtn = document.querySelector('.addRoutBtn');
const noRouteAdded = document.querySelector('.noRouteAdded');
const center = document.querySelector('.center')


const pricePlanner = TransportPriceChecker(JSON.parse(localStorage.getItem("myRoutes")));

addRoutBtn.addEventListener("click", function() {
    // create new route
    const location = departLocation.value+"-"+arrivalLocation.value;
    console.log(location, taxiPrice2.value,busPrice2.value)

    pricePlanner.setNewRoute(location, +taxiPrice2.value, +busPrice2.value);

    if(location === "-" && taxiPrice2.value === "" && busPrice2.value === ""){
        noRouteAdded.innerHTML = "Please Enter Locations and Transport Prices";
        setTimeout(() => {
            noRouteAdded.innerHTML = "";
        }, 3000);
        return;
    }
    if(location === "-" ){
        noRouteAdded.innerHTML = "Please Enter departing location and Arival Location";
        setTimeout(() => {
            noRouteAdded.innerHTML = "";
        }, 3000);
        return;
    }
    if(arrivalLocation.value === ""){
        noRouteAdded.innerHTML = "Please Enter Arival location";
        setTimeout(() => {
            noRouteAdded.innerHTML = "";
        }, 3000);
        return;
    }
    if(departLocation.value === ""){
        noRouteAdded.innerHTML = "Please Enter departing location";
        setTimeout(() => {
            noRouteAdded.innerHTML = "";
        }, 3000);
        return;
    }
    if(taxiPrice2.value === "" && busPrice2.value ==="" ){
        noRouteAdded.innerHTML = "Please Enter bus or Taxi price";
        setTimeout(() => {
            noRouteAdded.innerHTML = "";
        }, 3000);
        return;
    }
    // location === "-" && taxiPrice2.value === ""||location === "-" && busPrice2.value > 0 || location === "-" && busPrice2.value === ""||location === "-" && taxiPrice2.value 
    
    // add the new route to the array of routes 
    pricePlanner.addToRoutes(pricePlanner.getNewRoute());
    
    center.innerHTML = "Route has been added, Please check the available Routes Page ";
    setTimeout(() => {
        center.innerHTML = "";
    }, 4000);

    // update the routes on localstorage
    localStorage.setItem("myRoutes", JSON.stringify(pricePlanner.getAllRoutes()));

    // after button click clear inputs
    departLocation.value = "";
    arrivalLocation.value = "";
    taxiPrice2.value = "";
    busPrice2.value = "";
});