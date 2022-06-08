//For route.html
const availableRoutes = document.querySelector("#route");
const busPrice = document.querySelector(".busPrice");
const taxiPrice = document.querySelector(".taxiPrice");
const numberOfTrips = document.querySelector(".tripNumber");

//For addRoute.html
const departLocation = document.querySelector('.depart');
const arrivalLocation = document.querySelector('.arrive');
const taxiPrice2 = document.querySelector('.taxiPrice');
const busPrice2 = document.querySelector('.busPrice');
const addRoutBtn = document.querySelector('.addRoutBtn');

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
});

addRoutBtn.addEventListener('click', () =>{
    
});


