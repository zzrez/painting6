//https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values

//! JSON ARRAY

var homes2 = [
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

let homes = {
    "art": [
        {
            "image": "IMG_2022.jpg",
            "title": "Untitled",
            "painter": "Washington Iza",
            "widthcm": "28.5",
            "heightcm": "34",
            "country": "Ecuador",
            "year": "n/a",
            "technique": "Oil",
            "tags": "iza",
            "sort": "41"
        },
        {
            "image": "IMG_2027.jpg",
            "title": "Untitled",
            "painter": "n/a",
            "widthcm": "114",
            "heightcm": "89",
            "country": "Nicaragua",
            "year": "n/a",
            "technique": "Oil",
            "sort": "78"
        },
        {
            "image": "IMG_2028.jpg",
            "title": "After the ash",
            "painter": "Napoleon Paredes",
            "widthcm": "98.5",
            "heightcm": "79",
            "country": "Ecuador",
            "year": "n/a",
            "technique": "Oil",
            "tags": "paredes",
            "sort": "10"
        },
        {
            "image": "IMG_2033.jpg",
            "title": "Untitled",
            "painter": "Washington Iza",
            "widthcm": "98",
            "heightcm": "118.5",
            "country": "Ecuador",
            "year": "1990",
            "technique": "Oil",
            "tags": "iza",
            "sort": "20"
        },
        {
            "image": "IMG_2039.jpg",
            "title": "Untitled",
            "painter": "Washington Iza",
            "widthcm": "59",
            "heightcm": "68",
            "country": "Ecuador",
            "year": "1989",
            "technique": "Oil",
            "tags": "iza",
            "sort": "26"
        },
        {
            "image": "IMG_2040.jpg",
            "title": "Untitled",
            "painter": "Washington Iza",
            "widthcm": "99",
            "heightcm": "119",
            "country": "Ecuador",
            "year": "1990",
            "technique": "Oil",
            "tags": "iza",
            "sort": "17"
        },
        {
            "image": "IMG_2046.jpg",
            "title": "Untitled",
            "painter": "Rodriguez",
            "widthcm": "61.5",
            "heightcm": "47",
            "country": "Ecuador",
            "year": "1989",
            "technique": "Oil",
            "tags": "primitive",
            "sort": "80"
        },
        {
            "image": "IMG_2049.jpg",
            "title": "Untitled",
            "painter": "Rodriguez",
            "widthcm": "61.5",
            "heightcm": "47",
            "country": "Ecuador",
            "year": "1989",
            "technique": "Oil",
            "tags": "primitive",
            "sort": "81"
        },
        {
            "image": "IMG_2058.jpg",
            "title": "Untitled",
            "painter": "n/a",
            "widthcm": "56",
            "heightcm": "83",
            "country": "Nicaragua",
            "year": "n/a",
            "technique": "Oil",
            "sort": "160"
        },
        {
            "image": "IMG_2063.jpg",
            "title": "Untitled",
            "painter": "n/a",
            "widthcm": "66.5",
            "heightcm": "97.5",
            "country": "Nicaragua",
            "year": "n/a",
            "technique": "Oil",
            "sort": "163"
        },
        {
            "image": "IMG_2070.jpg",
            "title": "Untitled",
            "painter": "Napoleon Paredes",
            "widthcm": "25.5",
            "heightcm": "79.5",
            "country": "Ecuador",
            "year": "1991",
            "technique": "Oil",
            "tags": "paredes",
            "sort": "13"
        },
        {
            "image": "IMG_2071.jpg",
            "title": "Intimacies",
            "painter": "Eduardo Kingman",
            "widthcm": "51.5",
            "heightcm": "60",
            "country": "Ecuador",
            "year": "n/a",
            "technique": "Oil",
            "tags": "kingman",
            "sort": "1"
        }
    ]
}

homes.art.sort(function(a, b) {
  return parseFloat(a.sort) - parseFloat(b.sort);
});


  // objs.sort( compare );

  console.log("Sorted:-" )
  console.log(homes)



//run: node sort3