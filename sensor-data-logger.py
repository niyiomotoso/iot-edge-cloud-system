from netifaces import AF_INET, AF_INET6, AF_LINK, AF_PACKET, AF_BRIDGE
import netifaces
import sys
import Adafruit_DHT
import paho.mqtt.client as mqtt
import json

client = mqtt.Client()
client.connect("192.168.43.135",1883,60)
macaddress = netifaces.ifaddresses('eth0')[netifaces.AF_LINK][0]['addr']
while True:

    humidity, temperature = Adafruit_DHT.read_retry(11, 4)
    data = {"temperature": temperature, "humidity": humidity, "device_id": macaddress}
    data = json.dumps(data)
    client.publish("topic/sensor_data", data);
    print('Temp: {0:0.1f} C  Humidity: {1:0.1f} %'.format(temperature, humidity))
