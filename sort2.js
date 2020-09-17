//https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values

//! JSON ARRAY

var homes = [
    {
        "h_id": "3",
        "city": "Dallas",
        "state": "TX",
        "zip": "75201",
        "price": "162500"
    }, {
        "h_id": "4",
        "city": "Bevery Hills",
        "state": "CA",
        "zip": "90210",
        "price": "319250"
    }, {
        "h_id": "5",
        "city": "New York",
        "state": "NY",
        "zip": "00010",
        "price": "962500"
    }
];

homes.sort(function(a, b) {
  return parseFloat(a.price) - parseFloat(b.price);
});


  // objs.sort( compare );

  console.log("Sorted:-" )
  console.log(homes)


//   document.getElementById("whereToPrint").innerHTML = JSON.stringify(lineChartData, null, 4);
//https://stackoverflow.com/questions/14895287/how-to-print-object-array-in-javascript

//run: node sort2