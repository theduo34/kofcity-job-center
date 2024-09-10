const localStorageHelper = {
    //eslint-disable-next-line
    setItem: (key: string, value: any) => {
        try{
            localStorage.setItem(key, JSON.stringify(value));
        } catch(e) {
            console.error(e);
        }
    },

    getItem: (key: string) => {
        const item = localStorage.getItem(key)
        if(item) {
            try{
                return item ? JSON.parse(item) : null;
            }
            catch(e) {
                console.error(e);
            }
        }
        return null;
    },

    removeItem: (key: string) => {
       try{
           localStorage.removeItem(key)
       }
       catch(e) {
           console.error(e);
       }
    } ,

    clear: () => {
        localStorageHelper.clear();
    }
}
export default localStorageHelper;