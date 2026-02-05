export const KAFKA_BROKER = process.env.KAFKA_BROKER ?? 'localhost:9092';
export const KAFKA_CLIENT_ID = process.env.KAFKA_CLIENT_ID ?? 'nestjs-kafka';
export const KAFKA_CONSUMER_GROUP =
  process.env.KAFKA_CONSUMER_GROUP ?? 'nestjs-kafka-consumer-group';
export const KAFKA_PRODUCER_GROUP =
  process.env.KAFKA_PRODUCER_GROUP ?? 'nestjs-kafka-producer-group';
export const KAFKA_TOPIC = {
  //Auth Events
  USER_REGISTERED: 'user.registered',
  USER_LOGIN: 'user.login',
  PASSWORD_RESET_REQUESTED: 'user.password.reset.requested',
  PASSWORD_RESET_CONFIRMED: 'user.password.reset.confirmed',

  //Event events
  EVENT_CREATED: 'event.created',
  EVENT_UPDATED: 'event.updated',
  EVENT_PUBLISHED: 'event.published',
  EVENT_CANCELLED: 'event.canceled',

  //Ticket events
  TICKET_PURCHASED: 'ticket.purchased',
  TICKET_CHECKED_IN: 'ticket.checked_in',
  TICKET_CONFIRMED: 'ticket.confirmed',
  TICKET_CANCELLED: 'ticket.cancelled',

  //Payment events
  PAYMENT_COMPLETED: 'payment.completed',
  PAYMENT_FAILED: 'payment.failed',
  PAYMENT_REFUNDED: 'payment.refunded',

  //Notification events
  NOTIFICATION_SENT_EMAIL: 'notification.sent.email',
  NOTIFICATION_SENT_PUSH: 'notification.sent.push',
};
export type KAFKA_TOPIC_TYPE = keyof typeof KAFKA_TOPIC;
