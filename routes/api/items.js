const express =require('express');
const router =express.Router();

//ITem model
const Item = require('../../models/item');

//@route GEt api/item
//@desc Get all items
//@access Public
 router.get('/',(req,res) =>{
     Item.find()
     .sort({date:-1})
     .then(items=>res.json(items));
 });

 //@route GEt api/item
//@desc Get all items
//@access Public
router.post('/',(req,res) =>{
    const newItem= new Item({
        name:req.body.name
    });

    newItem.save().then(item => res.json(item));
});
//@route post  api/item
//@desc Create a post
//@access Public
router.post('/',(req,res) =>{
    const newItem= new Item({
        name:req.body.name
    });

    newItem.save().then(item => res.json(item));
});

//@route delete  api/item
//@desc Delete a post
//@access Public
router.delete('/:id', (req,res) =>{
    Item.findById(req.params.id)
    .then(item =>item.remove().then(()=> res.json({success:true})))

    .catch(err=> res.status(404).json({ success:false}));
});



module.exports = router;
