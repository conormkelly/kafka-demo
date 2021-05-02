// Configure kafka.js to point to our local kafka instance:

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

// Create a producer
const producer = kafka.producer();


async function main() {
  await producer.connect();

  // Publish messages to the Kafka cluster
  await producer.send({
    topic: 'some-topic',
    messages: [{ value: 'Message from producer' }],
  });

  // The process will wait until we disconnect
  await producer.disconnect();
}

main();
