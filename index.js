const jsonServer=require('json-server')

const MPserver=jsonServer.create()

const middileware=jsonServer.defaults()
const route=jsonServer.router('db.json')

const PORT=3000 || process.env.PORT

MPserver.use(middileware)
MPserver.use(route)

MPserver.listen(PORT,()=>{
    console.log(`media player server running at ${PORT} and 
        waiting for client request`);
    
})