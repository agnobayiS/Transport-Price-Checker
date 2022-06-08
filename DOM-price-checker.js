const availableRoutes = document.querySelector("#route");
const busPrice = document.querySelector(".busPrice");
const taxiPrice = document.querySelector(".taxiPrice");
const numberOfTrips = document.querySelector(".tripNumber");

const pricePlanner = TransportPriceChecker();

availableRoutes.addEventListener('change', function(){
    const route = pricePlanner.getRouteInfo(availableRoutes.value);
<<<<<<< HEAD
    if(route === undefined){
        taxiPrice.value = "";
        busPrice.value = ""
    } else {
        taxiPrice.value = route.taxiFare;
        busPrice.value = route.busFare;
    }
=======
    taxiPrice.value = route.taxiFare;
    busPrice.value = route.busFare;
>>>>>>> c306e7b4b1cfcb979321289f8455f392075260d8
})