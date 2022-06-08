function TransportPriceChecker (){
    let newRoute 
    let routes = [
        {
            route: "KHAYELITSHA-CAPE TOWN",
            taxiFare: 20,
            busFare: 21
        },
        {
            route: "CAPE TOWN-KHAYELITSHA",
            taxiFare: 20,
            busFare: 21
        },
        {
            route: "NYANGA-CAPE TOWN",
            taxiFare: 20,
            busFare: 21
        },
        {
            route: "CAPE TOWN-NYANGA",
            taxiFare: 20,
            busFare: 21
        }
    ]

    // set a new route
    function setNewRoute(route, taxiFare, busFare){
        newRoute = {
            route,
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
        return getAllRoutes().find(route => route.route === routeName)
    }

    return {
        setNewRoute,
        getNewRoute,
        addToRoutes,
        getAllRoutes,
        getRouteInfo
    }
}