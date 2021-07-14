const express = require ('express');
const app =  express ();
const PORT = 2022;
// const list = require("./model/FriendList.js")
// const {v4:uuidv4} = require('uuid') //to create random id
const friendRoute = require("./api/friendsRoutes.js");
// const productRoute = require ("./api/productRoute.js");
app.use (express.json());

app.use("/api/users", friendRoute);
// app.use("/api/product", productRoute)




app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}`))