import Server from './server.js';

const PORT = process.env.PORT||8081;

const server = new Server(PORT);
server.run(PORT);

process.on('unhandledRejection',(err)=>{
    console.log(`Server closed due to unhandled rejection ${err}`.red);
    server.stop();
    process.exit();
})