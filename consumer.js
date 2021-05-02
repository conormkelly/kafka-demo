// Configure kafka.js to point to our local kafka instance:
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

// Create a consumer
const consumer = kafka.consumer({ groupId: 'test-group' });


async function main() {
  await consumer.connect();

  // This is the same topic as producer.js:
  await consumer.subscribe({ topic: 'some-topic' });

  // Handler function that will be executed when a message comes in
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
        // message.value is a buffer (binary).
        // Here, we are just sending plaintext messages but we can also use JSON or AVRO.
        // https://kafka.js.org/docs/introduction#message-formats
      });
    },
  });
}

main();
