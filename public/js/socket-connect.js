var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('diconnect', function() {
    console.log('Perdimos coneccion con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Andres',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server:', resp);
});

socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor', mensaje);
});