var library = (function(){
	return {
		// Utility --- Complete Functions Below
		identity : function(val) {
           return val;
        },

		// Collections --- Complete Functions Below
		each : function(list, iterator) {
            if (Array.isArray(list)) {
                 for (var i = 0; i < list.length; i++) {
                     iterator(list[i], i, list);
                 }
            } else {
                for (var key in list) { // key becomes string, not a number.
                    iterator(list[key], key, list); //have to use brackets if variable?
                }
            }
        },
        
		filter : function(list, test) {
        var numArray = [];

        for (var i = 0; i < list.length; i++) {
                if (test(list[i])) {
                    numArray.push(list[i]);
                } 
        }
        return numArray;
        },
        
		reject : function(list, test) {
        var numArray = [];

        for (var i = 0; i < list.length; i++) {
                if (!test(list[i])) {
                    numArray.push(list[i]);
                } 
        }
        return numArray;
        },

		map : function(list, iterator) {
      
        var doubles = list.map(function(num) {
        return num / 2;
        });
        return doubles;

        },
        
		pluck : function(list, key) {
          
		},
                
		reduce : function(list, iterator, accumulator) {
            if (accumulator === undefined) {
                accumulator = list[0];
            }
            this.each(list, function (item)  {
                accumulator = iterator(accumulator,item);
            });
            return accumulator;
        },

		every : function(list, iterator) {
           if (iterator === undefined) {
               iterator = this.identity;
           } 
           for (var i = 0; i < list.length; i++) {
                if (iterator(list[i]) == false){
                    return false;
                }
            } 
            return true;
        },

		some : function(list, iterator) {
            if (iterator === undefined) {
                iterator = this.identity;
            }
            for (var i = 0; i < list.length; i++) {
                if (iterator(list[i])) {
                    return true;
                }
            }
            return false;
        },

		contains : function(list, target) {},
        



	// describe('contains', function() {
	// 	it('should return false if value specified is not found', function() {
	// 	expect(library.contains([1,2,3], 4)).to.equal(false);
	// 	});

	// 	it('should work on objects', function() {
	// 	expect(library.contains({a: 1, b: 2, c: 3}, 2)).to.equal(true);
	// 	});

	// 	it('should return true if value found', function() {
	// 	expect(library.contains([1,2,3], 2)).to.equal(true);
	// 	});
	// });




		// Advanced Collections --- Complete Functions Below
		shuffle : function(array) {},

		invoke : function(list, methodName, args) {},

		sortBy : function(list, iterator) {},

		// Objects --- Complete Functions Below
		extend : function(obj) {},

		defaults : function(obj) {},

		// Arrays --- Complete Functions Below
		first : function(array, n) {
			return n === undefined ? array[0] : array.slice(0, n);
		},

		last : function(array, n) {},

		indexOf : function(array, target){},

		uniq : function(array) {},

		// Advanced Arrays --- Complete Functions Below
		zip : function() {},

		flatten : function(nestedArray, result) {},

		intersection : function() {},

		difference : function(array) {},

		// Functions --- Complete Functions Below
		once : function(func) {},

		memoize : function(func) {},

		delay : function(func, wait) {}
	}
})();




