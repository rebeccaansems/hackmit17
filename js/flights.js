

var budget = 100000;


function getFlights(){
	var budget = document.getElementById('if_budget').value;
	console.log(budget);
}

function getFlightsFromDate(origin, dates){
	var params = ["apikey=bBduk1jlhPOfjTGiYuGUNysVrTbuOG2Q", "origin="+origin, "departure_date="+dates];

	var submitParams = "";
	for(i=0; i<params.length; i++){
		if(i > 0){
			submitParams += "&"
		}
		submitParams += params[i];
	}

	var budgetURL = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?"+submitParams;

	console.log(budgetURL);

	$(document).ready(function() {
	    $.ajax({
	        url: budgetURL
	    }).then(function(data) {
	    	getFlightsInBudget(data, 500);
	    });
	});
}

function getFlightsInBudget(data, budget){

	var flightsInBudget = [];

	for(i=0; i<data.results.length; i++){
		if(data.results[i].price < budget){

			flightsInBudget.push(data.results[i]);
		}
	}
	console.log(flightsInBudget);

}

