# Module MQTT

## `agent/connected`

```js
{
  agent: {
    uuid, // auto-generate
    username, // define per config
    name, // define by config
    hostname, // get environment SO
    pid, // get of process
  }
}
```

## `agent/disconnected`

```js
{
  agent: {
    agent: {
      uuid
    }
  }
}
```

## `agent/message`

```js
{
  agent,
  metrics: [
    {
      type,
      value
    }
  ],
  timestamp, //
}
```
