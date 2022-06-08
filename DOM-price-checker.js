const availableRoutes = document.querySelector("#route");
const busPrice = document.querySelector(".busPrice");
const taxiPrice = document.querySelector(".taxiPrice");
const numberOfTrips = document.querySelector(".tripNumber");

const pricePlanner = TransportPriceChecker();

availableRoutes.addEventListener('change', function(){
    const route = pricePlanner.getRouteInfo(availableRoutes.value);
    if(route === undefined){
        taxiPrice.value = "";
        busPrice.value = ""
    } else {
        taxiPrice.value = route.taxiFare;
        busPrice.value = route.busFare;
    }
})