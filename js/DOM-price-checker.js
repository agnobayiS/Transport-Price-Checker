//For route.html
const availableRoutes = document.querySelector("#route");
const busPrice = document.querySelector(".busPrice");
const taxiPrice = document.querySelector(".taxiPrice");
const numberOfTrips = document.querySelector(".tripNumber");
const errorMessage = document.querySelector(".errorMessage");

//make a plan section
const tripNumber = document.querySelector('.tripNumber');
const Total = document.querySelector('.Total');
const calculateButton = document.querySelector('.calculateBtn');

const pricePlanner = TransportPriceChecker(JSON.parse(localStorage.getItem("myRoutes")));

availableRoutes.addEventListener('change', function(){
    const route = pricePlanner.getRouteInfo(availableRoutes.value);
    if(route === undefined){
        taxiPrice.value = "";
        busPrice.value = ""
    } else {
        taxiPrice.value = "R" + route.taxiFare.toFixed(2);
        busPrice.value = "R" + route.busFare.toFixed(2);
    }
});

calculateButton.addEventListener('click', function() {
    const radioButton = document.querySelector('.radio:checked');
    const priceTrips = pricePlanner.calculateTrips(availableRoutes.value,radioButton.value,tripNumber.value);
    Total.value = "R " + priceTrips.toFixed(2);
    
});


