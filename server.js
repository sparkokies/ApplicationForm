const app = require("./src/app");
const port = 3400;

app.listen(port, ()=>{
    console.log("http://localhost:"+port);
});
