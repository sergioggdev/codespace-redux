const ping = { type: "PING", payload: {} };
const pong = { type: "PONG", payload: {} };

export const getPing = data => ({
  type: "PING",
  payload: data
});

export const getPong = data => ({
  type: "PONG",
  payload: data
});
