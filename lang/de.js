export default (context) => {
    return new Promise(function(resolve){
        resolve({
            topmenu: {
                stats: 'Statistiken'
            },
            editor: {
                name: 'Titel',
                columnCount: 'Spalten'
            },
            edit: {
                headline: 'Remembory bearbeiten'
            }
        })
    })
}