const express = require('express');
const path = require('path');
const app = express();

const publicPaht = path.resolve(__dirname, './public');
app.use( express.static(publicPaht) );

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('servidor corriendo en el puerto ${port}'));
app.use( express.static("public"));


app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));

});

app.get("/register",(req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get("/login",(req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.post("/login", (req, res) => {
    res.redirect("/");
})

app.post("/register", (req, res) => {
    res.redirect("/");
})