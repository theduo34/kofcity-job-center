const LocalStorageHelper = {
    localStorage: window.localStorage,

    /**
     * Clears the local storage by removing all items.
     *
     * @return {void} This function does not return a value.
     */
    clear(): void {
        this.localStorage.clear();
    },

    /**
     * Removes an item with the specified key from the local storage.
     *
     * @param {string} key - The key of the item to be removed.
     * @return {void} This function does not return a value.
     */
    removeItem(key: string): void {
        try {
            this.localStorage.removeItem(key);
        } catch (error) {
            // Handle or log the error, if needed
        }
    },

    /**
     * Clears all items from the local storage.
     *
     * @return {void} This function does not return a value.
     */
    clearAllItems(): void {
        this.localStorage.clear();
    },

    /**
     * Sets a value in the local storage with the specified key.
     *
     * @param {string} key - The key to set the value for.
     * @param {T} value - The value to be stored.
     * @return {void} This function does not return a value.
     */
    set<T>(key: string, value: T): void {
        try {
            this.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Handle or log the error, if needed
        }
    },

    /**
     * Retrieves a value from the local storage with the specified key.
     *
     * @param {string} key - The key to retrieve the value for.
     * @return {T | null} The value stored in the local storage, or null if not found.
     */
    get<T>(key: string): T | null {
        const value = this.localStorage.getItem(key);
        if (value) {
            try {
                return JSON.parse(value) as T;
            } catch (error) {
                console.error(`Error parsing JSON for key "${key}":`, error);
                return null;
            }
        }
        return null;
    }
};

export default LocalStorageHelper;
