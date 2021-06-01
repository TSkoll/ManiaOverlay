export const webSocket = ({ host, port, path, initialTokens }) => {
  return new Promise((resolve) => {
    const ws = new WebSocket(`ws://${host}:${port}${path}`);

    const receive = (onMessage) => {
      ws.onmessage = (event) => onMessage(JSON.parse(event.data));
    };

    const send = (payload) => ws.send(JSON.stringify(payload));

    ws.onopen = () => {
      send(initialTokens);
      resolve({ send, receive });
    };
  });
};
