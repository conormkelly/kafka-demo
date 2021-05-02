# Kafka on Node.js

## Quickstart

### Pre-reqs

- [Install Docker + Docker Compose](https://docs.docker.com/compose/install/)

### Steps

1. Start Kafka + [Zookeeper](#resources) containers in the background:

   ```sh
   npm run kafka:start
   # or: docker-compose up -d
   ```

2. Spin up a consumer.

   Run the below command:

   ```sh
   npm run consumer
   ```

   This will wait for messages from the producer.  
   Note that there is a built-in logger by default.

   We can [customize the logger](https://kafka.js.org/docs/custom-logger) - e.g. to use Winston instead.

3. Open a separate / new terminal and spin up a producer.

   ```sh
   npm run producer
   ```

   This script will send a message to the topic, then exit.

4. Check the terminal output for the running `consumer` process:

   You should see the message logged like so:

   ```txt
   { partition: 0, offset: '0', value: 'Message from producer' }
   ```

   If you re-run the producer script (`npm run producer`) several times,
   you will notice that the offset value increases in the `consumer` log.

5. Stop the kafka container:

   ```sh
   npm run kafka:stop
   # or: docker-compose down
   ```

   You will notice connection retry logs in the `consumer` console if it is still running.

## Resources

- What is Zookeeper?  
  <https://dattell.com/data-architecture-blog/what-is-zookeeper-how-does-it-support-kafka/>

  Note: The Zookeeper dependency is in the process of being removed in the latest versions of Kafka.  
  See: <https://www.confluent.io/blog/kafka-2-8-0-features-and-improvements-with-early-access-to-kip-500/>

- Kafka.js docs:  
  <https://kafka.js.org/docs/introduction>

- Info about Kafka consumers and consumer groups:  
  <https://www.oreilly.com/library/view/kafka-the-definitive/9781491936153/ch04.html>  
  (Check out the first section: `Consumers and Consumer Groups`)
