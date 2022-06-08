function TransportPriceChecker (){
    let newRoute 
    let routes = [
        {
            route: "KHAYELITSHA-CPT",
            taxiFare: 20,
            busFare: 21
        },
        {
            route: "CPT-KHAYELITSHA",
            taxiFare: 20,
            busFare: 21
        },
        {
            route: "NYANGA-CPT",
            taxiFare: 20,
            busFare: 21
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
        return getAllRoutes().find(obj => obj.route === routeName)
    }

    return {
        setNewRoute,
        getNewRoute,
        addToRoutes,
        getAllRoutes,
        getRouteInfo
    }
}