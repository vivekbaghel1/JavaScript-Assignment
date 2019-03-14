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