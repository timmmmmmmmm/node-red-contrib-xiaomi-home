module.exports = function(RED) {
//    use strict;

    var Hub = require("node-xiaomi-smart-home").Hub;
    let hub = new Hub();
    hub.listen();

    function xiaomiListener(config) {
        RED.nodes.createNode(this,config);
        var node = this;

		//Clean up procedure before re-deploy
		node.on('close', function(removed, doneFunction) {
			hub.stop();
			hub = null;
			if (typeof doneFunction === 'function')
				doneFunction();
			RED.log.info("node-red-contrib-xiaomi-home closing done...");
		});

		hub.on('data.th', function (sid, temperature, humidity) {
			var msg = {};
			msg.title = 'th';
			msg.payload = {
				"event": "th",
				"sid": sid,
				"temperature": temperature,
				"humidity": humidity
			};
			node.send(msg);
		});

		hub.on('data.button', function (sid, type) {
			var msg = {};
			msg.title = 'button';
			msg.payload = {
				"event": "button",
				"sid": sid,
				"type": type
			};
			node.send(msg);
		});

		hub.on('data.motion', function (sid, motion) {
			var msg = {};
			msg.title = 'motion';
			msg.payload = {
				"event": "motion",
				"sid": sid,
				"type": motion
			};
			node.send(msg);
		});

		hub.on('data.magnet', function (sid, closed) {
			var msg = {};
			msg.title = 'magnet';
			msg.payload = {
				"event": "magnet",
				"sid": sid,
				"closed": closed
			};
			node.send(msg);
		});

		hub.on('data.plug', function (sid, on) {
			var msg = {};
			msg.title = 'plug';
			msg.payload = {
				"event": "plug",
				"sid": sid,
				"on": on
			};
			node.send(msg);
		});

    }
    RED.nodes.registerType("xiaomi-home",xiaomiListener);

}