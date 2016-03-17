// var places = [{city: 'Birmingham' , state: 'Alabama'}, {city: 'Austin', state:'Texas'}];
// //var statesList = []; 
// var i = [];
// //       pluck : function(list, key) 
                                        
//         function pluck(places, key) { //key being a term for index in a string object
//         //var i, rv = [];
//             for (i = 0; i < places.length; i++) {
//                 pluck(key, 'state');
//             }
//         return _.mapObject(obj, _.property(key));
            
//         },  
        
        
        
        
        var places = [
            {city: "Birmingham", state: "Alabama"},
            {city: "Ausin", state: "Texas"},
        ];
        
        var stateArray = [];
        
        
        for (var i = 0; i < places.length; i++); {
            //if (iterator(places[i])) {
                stateArray.pluck(places, 'state:');
                
                //expect(library.pluck(places, 'state'))
            //}
            console.log(stateArray);
        
        // function getFullName(item,index) {
        //     var fullname = [item.state];
        //     return fullname; //array in memory holding state name, sending it to function getFullName
        //     places.map(item.state);
        // getFullName();
        // console.log(getFUllName);
        
        }
        
        // function myFunction() { //myFunction called from HTML Button
        //     document.getElementById("demo").innerHTML = places.map(getFullName);
        // }
        
        
        
        
        
        
        
            // READ ME    READ ME     READ ME
            // *map - Returns results of running the iterator over each element.

            // *pluck - Implemented with map, returns an array of extracted values.
            
            // PROBLEM BELOW     PROBLEM BELOW    PROBLEM BELOW
            //     describe('pluck', function() {
            // 	it('should return an array of user-specified extracted values', function() {
            // 	var places = [{city: 'Birmingham' , state: 'Alabama'}, {city: 'Austin', state:'Texas'}];
            
            // SOLUTION SHOULD MATCH BELOW    SHOULD MATCH BELOW SHOULD MATCH BELOW
            // 	expect(library.pluck(places, 'state')).to.eql(['Alabama', 'Texas']);
            // 	});
            // });
                
                // map : function(list, iterator) {
                // var numArray = [];
                
                // for (var i = 0; i < list.length; i++); {
                //     if (iterator(list[i])) {
                //         numArray.map(list[i]);
                //     }
                //     return numArray;
                // }