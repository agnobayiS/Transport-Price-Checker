describe("Testing for my TransportPriceChecker factory function", function() {
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
})