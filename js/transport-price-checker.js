function TransportPriceChecker (getRoutes){
    let newRoute 
    let routes = getRoutes || [
        {
            route: "KHAYELITSHA-CPT",
            taxiFare: 20,
            busFare: 21
        },
        {
            route: "CPT-KHAYELITSHA",
            taxiFare: 21,
            busFare: 22
        },
        {
            route: "NYANGA-CPT",
            taxiFare: 18,
            busFare: 19
        },
        {
            route: "CPT-NYANGA",
            taxiFare: 18,
            busFare: 19
        }
    ]

    // set a new route
    function setNewRoute(route, taxiFare, busFare){
        newRoute = {
            route: route.toUpperCase(),
            taxiFare,
            busFare
        }
    }

    // get the new set route
    function getNewRoute(){
        return newRoute
    }

    // add new route too routes
    function addToRoutes(route){
        routes.push(route)
    }

    // get all the available routes
    function getAllRoutes(){
        return routes
    }

    // find specific route and return details
    function getRouteInfo(routeName){
        return getAllRoutes().find(function (obj){
            return obj.route === routeName
        })
    }

    //  calculate cost for number of trips
    function calculateTrips(route, transport, trips){
        const info = getRouteInfo(route)
        if(transport === "TAXI"){
            return info.taxiFare * trips
        } else if(transport === "BUS"){
            return info.busFare * trips
        }
    }

    return {
        setNewRoute,
        getNewRoute,
        addToRoutes,
        getAllRoutes,
        getRouteInfo,
        calculateTrips
    }
}