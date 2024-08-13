/**
 * Steps
 * 1. Setup base websocket subscription via chatId parameter
 * 2. Sort `data` via timestamp against network performance latency / connection conflict
 * 3. Watch for connection drops with websocket subscription:
 *    a. create connection attempt loop when disconnected or via refresh control
 *    a. display alertError + constant state styling when disconnected
 *    b. display alertSuccess + revert state styling when reconnected
 *    c. prevent messages from sending in `ChatForm` when disconnected
 * 
 */