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
            var result = [];
        for (var i = 0; i < list.length; i++) {
            result.push(iterator(list[i]));
        }
        return result;
        },
 
        pluck : function(list, key) {
			return this.map(list, function(item){
				return item[key];
			});
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

		contains : function(list, target) {
            if (Array.isArray(list)) {
                for (var i = 0; i < list.length; i++) {
                    if (target === list[i]) {
                        return true;
                    }
                } return false;
            } else {
                for (var i in list) {
                    if (target === list[i]) {
                        return true;
                    }
                } return false;
            }
        },
        
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




