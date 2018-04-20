var fs = require('fs');
var httpism = require('httpism');
var csv = require('csv');

var dataUrl = 'https://github.com/opentraveldata/opentraveldata/raw/master/opentraveldata/optd_por_public.csv';

console.log('Fetching original data file');
httpism.get(dataUrl).then(response => {
  var data = response.body;
  console.log('Data retrieved');
  var csvOptions = {
    delimiter: '^',
    relax: true,
    columns: true
  };
  csv.parse(data, csvOptions, (err, airports) => {
    if (err) {
      console.log('----- Error ----')
      console.log(err)
      console.log('---- /Error ----')
    }
    else {
      airports = airports.map(airport => {
        return {
          code: airport.iata_code,
          countryCode: airport.country_code,
          timezone: airport.timezone,
          offset: {
            gmt: parseInt(airport.gmt_offset),
            dst: parseInt(airport.dst_offset)
          }
        }
      }),

      fs.writeFile('airports.json',
        JSON.stringify(airports, null, 2),
        (error) => {
          if (error) {
            console.log(error);
            return;
          }
          console.log('airports.json updated')
      });
    }
  });
});
