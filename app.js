const express = require('express');
const path = require('path');
const app = express();

const publicPaht = path.resolve(__dirname, './public');
app.use( express.static(publicPaht) );

const port = ptocess.env.PORT || 3000;
app.listen(port, () => console.log('servidor corriendo en el puerto ${port}'));
app.use (expres.static("public"));

app.listen(3000, () =>{
    console.log("Levantando un servidor con Express")
});

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));

});

app.get("/register",(req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get("/login",(req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
