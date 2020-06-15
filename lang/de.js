export default (context) => {
    return new Promise(function(resolve){
        resolve({
            topmenu: {
                stats: 'Statistiken',
                create: 'Neues Remembory erstellen'
            },
            editor: {
                name: 'Titel',
                columnCount: 'Spalten',
                type: 'Typ',
                types: {
                    table: 'Tabelle',
                    cards: 'Karten'
                },
                cards: {
                    add: 'Karte hinzufügen',
                    title: 'Frage',
                    content: 'Antwort'
                }
            },
            create: {
                headline: 'Remembory erstellen',
                save: 'Erstellen',
                cancel: 'Abbrechen'
            },
            edit: {
                headline: 'Remembory bearbeiten',
                save: 'Aktualisieren',
                cancel: 'Abbrechen'
            },
            list: {
                table: {
                    name: 'Name',
                    actions: 'Aktionen'
                },
                nothing: {
                    headline: 'Noch kein Remembory erstellt',
                    create: 'Jetzt neues Remembory erstellen'
                },
                delete: {
                    confirm: {
                        title: 'Remembory löschen?',
                        content: 'Willst du dieses Remembory wirklich löschen?',
                        labels: {
                            yes: 'Ja',
                            cancel: 'Abbrechen'
                        }
                    }
                }
            }
        })
    })
}