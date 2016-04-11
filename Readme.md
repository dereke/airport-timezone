# airport-timezone

A list of all the airports and their timezone information including gmt/dst offsets

Data sourced from https://github.com/opentraveldata/opentraveldata/blob/master/opentraveldata/optd_por_public.csv

If the data in this repo is out of date then clone it and run `npm run update`.
Please consider creating a pull request with any updates.

# Usage

Find timezone information for JFK:
```
var airportTimezone = require('airport-timezone');
var jfk = airportTimezone.filter(function(airport){
  return airport.code === 'JFK';
})[0];
```

Returns:
```
{
  code: 'JFK',
  timezone: 'America/New_York',
  offset: { gmt: -5, dst: -4 }
}
```
