const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido aqui'
    });


    client.on('enviarMensaje', (data, callback) => {
        //console.log('Servidor:', mensaje);
        
        console.log (data);

        client.broadcast.emit('enviarMensaje', data);


        /* if( mensaje.usuario ) {
            callback({
                resp: 'TODO SALIO BIEN'
            });
        }else{
            callback({
                resp: 'TODO SALIO MAL'
            });
        }*/
    })
});

