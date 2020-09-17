//https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value

var objs = [ 
    { first_nom: 'Lazslo', last_nom: 'Jamf'    , last_nom2:2 },
    { first_nom: 'Pig',    last_nom: 'Bodine'  , last_nom2:3  },
    { first_nom: 'Pirate', last_nom: 'Prentice', last_nom2:1 }
];

function compare( a, b ) {
    if ( a.last_nom < b.last_nom ){
      return -1;
    }
    if ( a.last_nom > b.last_nom ){
      return 1;
    }
    return 0;
  }

  function compare2( a, b ) {
    return a.last_nom2 - b.last_nom2; //ASC
    // return b.last_nom2 - a.last_nom2; //DESC
  }

  
  objs.sort( compare );

  console.log("Sort by last_nom:-" )
  console.log(objs.sort( compare ))
  console.log("\nSort by last_nom2:-" )
  console.log(objs.sort( compare2 ))

//   document.getElementById("whereToPrint").innerHTML = JSON.stringify(lineChartData, null, 4);
//https://stackoverflow.com/questions/14895287/how-to-print-object-array-in-javascript

//run: node sort1