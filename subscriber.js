var mqtt = require('mqtt')
var client  = mqtt.connect('ws://127.0.0.1:8000')

client.on('connect', function () {
    client.subscribe('/outbox/crouton-test-client-/deviceInfo')
})

client.on('message', function (topic, message) {
	context = message.toString();
	console.log(context)
})
