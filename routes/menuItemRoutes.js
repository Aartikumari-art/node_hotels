const express=require('express');
const router = express.Router();
const MenuItem=require('./../models/MenuItem');

//POST method to add a new Item
router.post('/',async(req,res)=>{
    try{
        const data=req.body; newMenu=new MenuItem(data);
        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);

    } catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})

    }
    
})

//GET method to get menu items

router.get('/',async(req,res)=>{
    try{
        const data=await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server Error'})
    }
})

router.get('/:taste', async (req,res)=>{
    try{
        const taste=req.params.taste;
        if(taste=='Sweet'|| taste=='Sour'||taste=='Spicy'||taste=='tasty'){
            const response=await MenuItem.find({taste:taste});
            console.log('response fetched');
            res.status(200).json(response);

        }else{
            res.status(404).json({erro:'Invalid work type'})
        }

    }
    catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server Error'})
    }
})





router.put('/:id',async (req,res)=>{
    try{
      const menuId=req.params.id;
      const updateMenuData =req.body;
      const response=await MenuItem.findByIdAndUpdate(menuId,updateMenuData,{
        new:true,
        runValidator:true,
      })

      if(!response){
        return res.status(404).json({error:'Menu not found'});
    }

    console.log('Item updated');
    res.status(200).json(response);



    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server Error'})


    }
})



router.delete('/:id',async (req,res)=>{
    try{
        const menuId=req.params.id;
        

        const response = await MenuItem.findByIdAndDelete(menuId);


        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('data deleted');
        res.status(200).json({message:'Item deleted successfully'});

    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server Error'})
    }
})








module.exports=router;