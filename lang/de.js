export default (context) => {
    return new Promise(function(resolve){
        resolve({
            topmenu: {
                stats: 'Statistiken',
                create: 'Neues Remembory erstellen'
            },
            editor: {
                name: 'Titel',
                columnCount: 'Spalten'
            },
            create: {
                headline: 'Remembory erstellen'
            },
            edit: {
                headline: 'Remembory bearbeiten'
            },
            list: {
                table: {
                    name: 'Name',
                    actions: 'Aktionen'
                },
                nothing: {
                    headline: 'Noch kein Remembory erstellt',
                    create: 'Jetzt neues Remembory erstellen'
                }
            }
        })
    })
}