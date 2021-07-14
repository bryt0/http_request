const express = require ("express")
const {v4:uuidv4} = require('uuid') //to create random id
const Friends = require('../model/FriendList')
const list = require("../model/FriendList.js")



const router = express.Router()

router.get ('/',(req, res)=>{
    res.json (Friends)
});
// router.get('/:id', (req, res)=>{
//     const{id} = req.params;
//     singleFriend = Friends.find((Friends) => Friends.id === number (id))
//     if (!singleFriend){
//         return res
//         .status(404)
//         .json({success:false, message:`no product with ${id}`

//         })

//     }else{
//         return res
//         .status(202)
//         .json({success:true,
//         // message:`no product with ${id}`,
//         data: (singleFriend),
//         })
//     }
// });

router.post ('/',(req,res)=>{
    console.log (req.body)
    let newFriend = {
        id: uuidv4(),
        // id: list.length + 1, or if you 
        name: req.body.name,
        age: req.body.age,
        phone: req.body.phone
    }
    list
    .push(newFriend);
    res
    .json(list)
}); 

router.put('/')

module.exports = router