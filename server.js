import app from './app.js';

const NODE_ENV = process.env.NODE_ENV||'development';
const PORT = process.env.PORT||8081;

const server = app.listen(PORT,()=>{
    console.log(
        `Server is running in ${NODE_ENV} mode on port ${PORT}`.inverse.green
      );
})

process.on('unhandledRejection',(err)=>{
    console.log(`Server closed due to unhandled rejection ${err}`.red);
    server.close();
    process.exit();
})