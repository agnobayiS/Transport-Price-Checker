describe("Testing for my TransportPriceChecker factory function", function() {
    describe("creating and getting the routes data", function() {
        it("should be able to create a new route", function () {
            const transportPriceChecker = TransportPriceChecker()
    
            // the new route created will be an object
            const expexted = {
                route: "KHAYELITSHA-CAPE TOWN",
                taxiFare: 21,
                busFare: 19
            }
    
            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("KHAYELITSHA-CAPE TOWN", 21, 19)
    
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
                    route: "KHAYELITSHA-CPT",
                    taxiFare: 21,
                    busFare: 19
                },
                {
                    route: "CPT-KHAYELITSHA",
                    taxiFare: 22,
                    busFare: 19
                },
                {
                    route: "NYANGA-CPT",
                    taxiFare: 20,
                    busFare: 14
                },
                {
                    route: "CPT-NYANGA",
                    taxiFare: 20,
                    busFare: 14
                },
                {
                    route: "KHAYELITSHA-BEL",
                    taxiFare: 20,
                    busFare: 21
                }
            ]
    
            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("KHAYELITSHA-BEL", 20, 21)
    
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
            transportPriceChecker.setNewRoute("KHAYELITSHA-CAPE TOWN", 21, 19)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())

            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("CAPE TOWN-KHAYELITSHA", 22, 19)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())

            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("NYANGA-CAPE TOWN", 20, 14)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())

            // to set a new route you need to the route the taxi fare and the bus fare
            transportPriceChecker.setNewRoute("CAPE TOWN-NYANGA", 20, 14)
    
            // add new route to available
            transportPriceChecker.addToRoutes(transportPriceChecker.getNewRoute())

            // the new route created will be an object
            const expexted = {
                route: "CAPE TOWN-NYANGA",
                taxiFare: 20,
                busFare: 14
            }

            // get all the available routes
            const results = transportPriceChecker.getRouteInfo("CAPE TOWN-NYANGA")

            // test to check if the created route is the same as the one expected
            assert.deepEqual(results, expexted)
        })
    })

    describe("making a plan for multiple trips", function() {
        it("should be able to calculate how much it will cost from \"KHAYELITSHA-CPT\" using \"TAXI\"", function() {
            const transportPriceChecker = TransportPriceChecker()

            const expected = 63
            const results = transportPriceChecker.calculateTrips("KHAYELITSHA-CPT", "TAXI", 3)

            assert.equal(results, expected)
        })

        it("should be able to calculate how much it will cost from \"KHAYELITSHA-CPT\" using \"BUS\"", function() {
            const transportPriceChecker = TransportPriceChecker()

            const expected = 76
            const results = transportPriceChecker.calculateTrips("KHAYELITSHA-CPT", "BUS", 4)

            assert.equal(results, expected)
        })

        it("should be able to calculate how much it will cost from \"NYANGA-CPT\" using \"TAXI\"", function() {
            const transportPriceChecker = TransportPriceChecker()

            const expected = 60
            const results = transportPriceChecker.calculateTrips("NYANGA-CPT", "TAXI", 3)

            assert.equal(results, expected)
        })

        it("should be able to calculate how much it will cost from \"NYANGA-CPT\" using \"BUS\"", function() {
            const transportPriceChecker = TransportPriceChecker()

            const expected = 56
            const results = transportPriceChecker.calculateTrips("NYANGA-CPT", "BUS", 4)

            assert.equal(results, expected)
        })
    })
})