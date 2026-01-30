export const SERVICES = {
  API_GATEWAY: 'api-gateway',
  AUTH_SERVICE: 'auth-service',
  USER_SERVICE: 'user-service',
  EVENT_SERVICE: 'event-service',
  TICKET_SERVICE: 'ticket-service',
  PAYMENT_SERVICE: 'payment-service',
  NOTIFICATION_SERVICE: 'notification-service',
};

export const SERVICES_PORT = {
  API_GATEWAY: Number(process.env.API_GATEWAY_PORT) || 3000,
  AUTH_SERVICE: Number(process.env.AUTH_SERVICE_PORT) || 3001,
  USER_SERVICE: Number(process.env.USER_SERVICE_PORT) || 3002,
  EVENT_SERVICE: Number(process.env.EVENT_SERVICE_PORT) || 3003,
  TICKET_SERVICE: Number(process.env.TICKET_SERVICE_PORT) || 3004,
  PAYMENT_SERVICE: Number(process.env.PAYMENT_SERVICE_PORT) || 3005,
  NOTIFICATION_SERVICE: Number(process.env.NOTIFICATION_SERVICE_PORT) || 3006,
};
