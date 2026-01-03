/********
 *  Module for handling local storage operations with JSON
 * 
 */


const storageModule = (function() {
    // Check for localStorage availability (optional but good practice)
    function isStorageAvailable() {
        try {
            const x = '__storage_test__';
            localStorage.setItem(x, x);
            localStorage.removeItem(x);
            return true;
        } catch (e) {
            return e instanceof SecurityError && (e.code === 22 || e.code === 1014);
        }
    }

    // Public methods
    return {
        /**
         * Store an object or any value under a specific key.
         * Automatically stringifies the value.
         * @param {string} key
         * @param {any} value
         */
        setItem: function(key, value) {
            if (isStorageAvailable()) {
                // localStorage only accepts strings, so convert objects/arrays to JSON strings.
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                console.error("Local storage is not available.");
            }
        },

        /**
         * Retrieve a value by its key.
         * Automatically parses the stored JSON string back into a JavaScript object/array.
         * @param {string} key
         * @returns {any | null} The retrieved value or null if the key doesn't exist.
         */
        getItem: function(key) {
            if (isStorageAvailable()) {
                const storedValue = localStorage.getItem(key);
                // Parse the JSON string back to its original data type.
                return storedValue ? JSON.parse(storedValue) : null;
            }
            return null;
        },

        /**
         * Remove a specific item by its key.
         * @param {string} key
         */
        removeItem: function(key) {
            if (isStorageAvailable()) {
                localStorage.removeItem(key);
            }
        },

        /**
         * Clear all items from local storage for the current domain.
         */
        clearAll: function() {
            if (isStorageAvailable()) {
                localStorage.clear();
            }
        }
    };
})();

// If using ES Modules, you would export the functions
export { storageModule };
