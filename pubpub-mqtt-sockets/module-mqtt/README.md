# Module MQTT

```
-t => topic
-h => host
-m => message
mqtt pub -t 'module' -h 'localhost' -m '{"test":"test"}'

mqtt pub -t 'agent/message' -m '{"agent": {"uuid": "yyy", "name": "name", "username": "username", "pid": 10, "hostname": "myLocalPC"}, "metrics": [{"type": "memory", "value": "1001"}, {"type": "temp", "value": "33"}]}'
```

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
