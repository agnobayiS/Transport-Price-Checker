// add the routes to the drop down list using handlebars
document.querySelector("#route").innerHTML = Handlebars.compile(document.querySelector('.routesTemplate').innerHTML)({
    routes: pricePlanner.getAllRoutes()
})