var airportTimezone = require('.');
var jfk = airportTimezone.filter(function(airport){
  return airport.code === 'JFK';
})[0];
console.log(jfk);
