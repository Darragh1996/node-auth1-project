const server = require("./api/server");

const PORT = process.nextTick.PORT || 6000;

server.listen(PORT, () => console.log(`server listening on port: ${PORT}`));
