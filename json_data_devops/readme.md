# Start Server

```
npm install -g json-server
```

```
json-server --watch maturity.json
```

```
http://localhost:3000/questions/500
```

```
http://localhost:3000/questions?grupo=feedback%20cont%C3%ADnuo
```

# Docker

```
docker build -t json-server .
```

```
docker run -p 3000:3000 -d json-server
```
