var mqtt = require('mqtt');
var client  = mqtt.connect('ws://127.0.0.1:8000');
client.on('connect', function () {
	setInterval(function() {
		client.publish('/inbox/crouton-test-client-/deviceInfo', 'get');
		console.log('/inbox/crouton-test-client-/deviceInfo get');
	}, 5000);
});
