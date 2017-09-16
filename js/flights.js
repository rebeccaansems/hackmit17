

var airports = ["ATL", "PEK", "DXB", "ORD", "LHR", "HDN", "LAX", "CDG", "DFW", "FRA", "DEN", "HKG", "MAD", "JFK",
				"AMS", "CGK", "BKK", "SIN", "CAN", "PVG", "IAH", "LAS", "SFO", "PHX", "CLT", "FCP", "SYD", "MIA",
				"MCO", "MUC"];

function getFlights(){
	var budget = document.getElementById('if_budget').value;
	console.log(budget);
}

function getFlightsInBudget(origin, budget, departDate, returnDate, callback){

	var flightsInBudget = [];

	for(j = 0; j<airports.length; j++){
		var params = ["apikey=bBduk1jlhPOfjTGiYuGUNysVrTbuOG2Q", "origin="+origin, "destination="+airports[j], 
					"departure_date="+departDate, "return_date="+returnDate];

		var submitParams = "";
		for(i=0; i<params.length; i++){
			if(i > 0){
				submitParams += "&"
			}
			submitParams += params[i];
		}

		var budgetURL = "https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?"+submitParams;

		var checked = 0;
		$(document).ready(function() {
		    $.ajax({
		        url: budgetURL
		    }).then(function(data) {
		    	checked++;
		    	for(k=0; k<data.results.length; k++){
		    		addToShortest(checked, flightsInBudget);
		    		if(data.results[k].fare.total_price < budget){
		    			flightsInBudget.push(data.results[k]);
		    			k = data.results.length;
		    			break;
		    		}
		    	}
		    });
		});
	}
}

function addToShortest(current, budgetFlights){
	if(current == airports.length){
		return budgetFlights;
	}
}

