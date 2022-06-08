const availableRoutes = document.querySelector("#route");
const busPrice = document.querySelector(".busPrice");
const taxiPrice = document.querySelector(".taxiPrice");
const numberOfTrips = document.querySelector(".tripNumber");

const pricePlanner = TransportPriceChecker();

availableRoutes.addEventListener('change', function(){
    console.log(availableRoutes.value)
    const route = pricePlanner.getRouteInfo(availableRoutes.value);
    taxiPrice.value = route.taxiFare;
    busPrice.value = route.busFare;
})