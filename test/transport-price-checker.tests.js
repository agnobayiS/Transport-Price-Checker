describe("Testing for my TransportPriceChecker factory function", function() {
    describe("creating and getting the routes data", function() {
        it("should be able to create a new route", function () {
            const transportPriceChecker = TransportPriceChecker()
    
            // the new route created will be an object
            const expexted = {
                route: "KHAYELITSHA-CAPE TOWN",
                taxiFare: 20,
                busFare: 21
            }
    
            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("KHAYELITSHA-CAPE TOWN", 20, 21)
    
            // get the route that was created
            const results = transportPriceChecker.getNewRoute()
    
            // test to check if the created route is the same as the one expected
            assert.deepEqual(results, expexted)
        })
    
        it("should be able to add new route to available routes", function() {
            const transportPriceChecker = TransportPriceChecker()
    
            // the new route created will be an object
            const expexted = [
                {
                    route: "KHAYELITSHA-CAPE TOWN",
                    taxiFare: 20,
                    busFare: 21
                },
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
                    taxiFare: 18,
                    busFare: 19
                }
            ]
    
            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("KHAYELITSHA-CAPE TOWN", 20, 21)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())
    
            // get all the available routes
            const results = transportPriceChecker.getAllRoutes()
    
            // test to check if the created route is the same as the one expected
            assert.deepEqual(results, expexted)
        })

        it("should be able to get route data by route name", function() {
            const transportPriceChecker = TransportPriceChecker()
    
            // ADDING MULTIPLE ROUTES TO TEST FINDING ONE ROUTE
            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("KHAYELITSHA-CAPE TOWN", 20, 21)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())

            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("CAPE TOWN-KHAYELITSHA", 21, 22)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())

            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("NYANGA-CAPE TOWN", 18, 19)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())

            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("CAPE TOWN-NYANGA", 18, 19)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())

            // the new route created will be an object
            const expexted = {
                route: "CAPE TOWN-NYANGA",
                taxiFare: 18,
                busFare: 19
            }

            // get all the available routes
            const results = transportPriceChecker.getRouteInfo("CAPE TOWN-NYANGA")
            console.log(results)

            // test to check if the created route is the same as the one expected
            assert.deepEqual(results, expexted)
        })
    })
})