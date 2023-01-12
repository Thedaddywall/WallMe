self.addEventListener('install', (event) => {
    //agregar a cache archivos
    console.info('[SW] Agregando archivos al caché ...');

    const wu = new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const adicionandoMisArchivos = '';
                const adicionarVariablesDinamicas = '';
                console.warn('[SW]: Se instalo correctamente...');
                resolve();
            }, 1000) //1seg
            self.skipeWaiting();
        } catch (error) {
            reject(error.message);
        }
    })
    
    event.WaitUntil(wu);
});
self.addEventListener('activate', async (event) => {
    //eliminar caches anteriores
    console.info('[SW] Archivos guardados correctamente ...');
    //event.waitUntil(clients.claim());
});
self.addEventListener('fetch', (event) => {
    console.info('[SW] Instalando ...');
    //console.log(event.request.url);
});

self.addEventListener('fetch', (event) => {
    console.log('------------------------------------');
    console.log(event);
    console.log('------------------------------------');
});

self.addEventListener('push', (event) => {
    console.error(event);
});