const port = (process.env.PORT || 5000);//sets a port given by the system or 3000 as a default value
const app = require("../app");

app.listen(port,()=>{
    console.log("Server running at port: 5000"); //runs the server on a port picked by the system, the default is 3000
})
