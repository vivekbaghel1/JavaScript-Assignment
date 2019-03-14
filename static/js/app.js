// YOUR CODE HERE!

// from data.js
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

//Reset the input field values upon refresh. 

d3.select("#datetime").node().value = "";
d3.select("#city").node().value = "";
d3.select("#state").node().value = "";
d3.select("#shape").node().value = "";
d3.select("#country").node().value = "";

// Load table data from the data.js file.
data.forEach((ufoData) => {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  


// Taking date input from user and retieving the relevant data

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  d3.selectAll("td").remove();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputDate = inputElement.property("value");

  //Get the value property value Input City
  var inputCity = d3.select("#city").property("value");

  //Get the value property value Input State
  var inputState = d3.select("#state").property("value");

  //Get the value property value Input Country
  var inputCountry = d3.select("#country").property("value");

  //Get the value property value Input Shape
  var inputShape = d3.select("#shape").property("value");

  console.log(inputDate);
  console.log(inputCity);
  console.log(inputState);
  console.log(inputShape);
  

  //var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate && ufoFilter.city === inputCity);

  console.log(filterData);

   //Filter Data on Date, City, State, Country and Shape columns..
   // Filter by any column, all columns possible or any combination of columns possible.

   if (inputCountry){
      if (inputDate){
          if (inputCity){
              if (inputState){
                  if (inputShape){
                      var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.datetime === inputDate && ufoFilter.city === inputCity && ufoFilter.state === inputState && ufoFilter.shape === inputShape);
                  }
                  else {
                      var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.datetime === inputDate && ufoFilter.city === inputCity && ufoFilter.state === inputState);
                  }
              }
              else if (inputShape){
                  var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.datetime === inputDate && ufoFilter.city === inputCity && ufoFilter.shape === inputShape);
              }
              else{
                  var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.datetime === inputDate && ufoFilter.city === inputCity);
              }
          }
          else if (inputState){
              if (inputShape){
                  var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.datetime === inputDate && ufoFilter.state === inputState && ufoFilter.shape === inputShape);
              }
              else {
                  var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.datetime === inputDate && ufoFilter.state === inputState);
              }
          }
          else if (inputShape){
              var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.datetime === inputDate && ufoFilter.shape === inputShape);
          }
          else {
              var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.datetime === inputDate);
          }
      }
      else if (inputCity){
          if (inputState){
              if (inputShape){
                  var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.city === inputCity && ufoFilter.state === inputState && ufoFilter.shape === inputShape);
              }
              else {
                  var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.city === inputCity && ufoFilter.state === inputState);
              }
          }
          else if (inputShape){
              var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.city === inputCity && ufoFilter.shape === inputShape);
          }
          else {
              var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.city === inputCity);
          }
      }
      else if (inputState){
          if (inputShape){
              var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.state === inputState && ufoFilter.shape === inputShape);
          }
          else {
              var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.state === inputState);
          }
      }
      else if (inputShape){
          var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry && ufoFilter.shape === inputShape);
      }
      else {
          var filterData = data.filter(ufoFilter=> ufoFilter.country === inputCountry);
      }    
  }
  else if (inputDate) {
   if (inputCity){
       if (inputState){
           if (inputShape){
               var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate && ufoFilter.city === inputCity && ufoFilter.state === inputState && ufoFilter.shape === inputShape);
           }
           else {
               var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate && ufoFilter.city === inputCity && ufoFilter.state === inputState);
           }
       }
       else if (inputShape){
           var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate && ufoFilter.city === inputCity && ufoFilter.shape === inputShape);
       }
       else {
           var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate && ufoFilter.city === inputCity);
       }
   }
   else if(inputState){
       if (inputShape){
           var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate && ufoFilter.state === inputState && ufoFilter.shape === inputShape);
       }
       else {
           var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate && ufoFilter.state === inputState);
       }
   }
   else if(inputShape){
       var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate && ufoFilter.shape === inputShape);
   }
   else {
       var filterData = data.filter(ufoFilter=> ufoFilter.datetime === inputDate);
   }
}
else if (inputCity){
   if (inputState){
       if (inputShape){
           var filterData = data.filter(ufoFilter=> ufoFilter.city === inputCity && ufoFilter.state === inputState && ufoFilter.shape === inputShape );
       }
       else{
           var filterData = data.filter(ufoFilter=> ufoFilter.city === inputCity && ufoFilter.state === inputState );
       }
   }
   else if (inputShape){
       var filterData = data.filter(ufoFilter=> ufoFilter.city === inputCity && ufoFilter.shape === inputShape );
   }
   else{
       var filterData = data.filter(ufoFilter=> ufoFilter.city === inputCity );
   }
}
else if (inputState){
   if (inputShape){
       var filterData = data.filter(ufoFilter=> ufoFilter.state === inputState && ufoFilter.shape === inputShape );
   }
   else {
       var filterData = data.filter(ufoFilter=> ufoFilter.state === inputState);
   }
}
else if (inputShape){
   var filterData = data.filter(ufoFilter=> ufoFilter.shape === inputShape );
}
else {
   var filterData = data.map(ufoFilter=> ufoFilter);
};



  // Displaying filtered data

  filterData.forEach((filData) => {
    var row = tbody.append("tr");
    Object.entries(filData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});

