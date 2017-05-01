# node-red-contrib-xiaomi-home
A Node-red node to expose the messages sent by the Xiaomi Smart Home accesoires sold under the Mijia brand. This is a Node-red integration of [the Node.js module developed by quibusus](https://github.com/quibusus/node-xiaomi-smart-home)

![Xiaomi smart-home devices](https://raw.githubusercontent.com/timmmmmmmmm/node-red-contrib-xiaomi-home/master/xiaomi.jpg)

This module can be used to receive data from the following sensors:
* Temperature/humidity sensor
* Magnet switch
* Button
* Motion sensor
* State change of smart power plug

# Credit
This code is based on works of:
* [Karol Danko](https://github.com/quibusus/node-xiaomi-smart-home)
* [Jonathan Schemoul, HackSpark.fr](https://github.com/jon1012/mihome)

# Preperation
You need to [enable LAN mode in the gateway unit](https://www.domoticz.com/wiki/Xiaomi_Gateway_(Aqara)#Adding_the_Xiaomi_Gateway_to_Domoticz) to be able to receive the data packages on your LAN. Don't bother the MAC/IP addresses and passwords, you won't need them.

There's no further configuration required on the Node.js/Node-red side.

# Usage
In the current version there's only one Xiaomi Smart Home node to expose all the Xiaomi events found on the network. The node outputs a msg.payload object with the event (type of sensor), sid (unique identifier of that unit) and the type or on state (the action).

For now you have to add sid filtering manually after this node.

![Example of the Node's output](https://raw.githubusercontent.com/timmmmmmmmm/node-red-contrib-xiaomi-home/master/node-red-xiaomi-screenshot.png)