/*
 * jQuery subset implementation compliant with CocoonJS runtime restrictions.
 * Based on original jQuery code.
 *
 * MIT license
 *
 * 2014, Eugene Batalov <eabatalov89@gmail.com>
 */

jQuery = {};

$ = jQuery;

(function() {

    var class2type = {};
    var arr = [];
    var concat = arr.concat;
    var indexOf = arr.indexOf;

    jQuery.type = function(obj) {
        if (obj == null) {
            return obj + "";
        }
        // Support: Android < 4.0, iOS < 6 (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[ toString.call(obj) ] || "object" :
            typeof obj;
    };

    jQuery.isArray = function(obj) {
        var length = obj.length,
        type = jQuery.type(obj);

        if (type === "function") {
            return false;
        }

        if (obj.nodeType === 1 && length) {
            return true;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && ( length - 1 ) in obj;
    };

    // arg is for internal usage only
    jQuery.map = function(elems, callback, arg) {
        var value,
            i = 0,
            length = elems.length,
            isArray = jQuery.isArray(elems),
            ret = [];

        // Go through the array, translating each of the items to their new values
        if (isArray) {
            for (; i < length; i++) {
                value = callback(elems[i], i, arg);

                if (value != null) {
                    ret.push(value);
                }
            }

        // Go through every key on the object,
        } else {
            for (i in elems) {
                value = callback(elems[i], i, arg);

                if (value != null) {
                    ret.push(value);
                }
            }
        }

        // Flatten any nested arrays
        return concat.apply([], ret);
    };

    // args is for internal usage only
    jQuery.each = function(obj, callback, args) {
        var value,
            i = 0,
            length = obj.length,
            isArray = jQuery.isArray(obj);

        if (args) {
            if (isArray) {
                for (; i < length; i++) {
                    value = callback.apply(obj[i], args);

                    if (value === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    value = callback.apply(obj[i], args);

                    if (value === false) {
                        break;
                    }
                }
            }

        // A special, fast, case for the most common use of each
        } else {
            if (isArray) {
                for (; i < length; i++) {
                    value = callback.call(obj[i], i, obj[i]);

                    if (value === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    value = callback.call(obj[i], i, obj[i]);

                    if (value === false) {
                        break;
                    }
                }
            }
        }

        return obj;
    };

    jQuery.inArray = function(elem, arr, i) {
        return arr == null ? -1 : indexOf.call(arr, elem, i);
    };

    jQuery.grep = function(elems, callback, invert) {
        var callbackInverse,
            matches = [],
            i = 0,
            length = elems.length,
            callbackExpect = !invert;

        // Go through the array, only saving the items
        // that pass the validator function
        for (; i < length; i++) {
            callbackInverse = !callback(elems[i], i);
            if (callbackInverse !== callbackExpect) {
                matches.push(elems[i]);
            }
        }

        return matches;
    };

    jQuery.getScript = function(scriptURL, callback) {
        /*
         * Cocoonjs can't create new script tags and doesn't support ajax.
         * Requested script should be included using script ta in index.html
         */
        callback("Mocked", "success", { status : 200 });
    };

    jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
        class2type[ "[object " + name + "]" ] = name.toLowerCase();
    });
})();
