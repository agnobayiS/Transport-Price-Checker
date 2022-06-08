function TransportPriceChecker (){
    let newRoute 
    let routes = []

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