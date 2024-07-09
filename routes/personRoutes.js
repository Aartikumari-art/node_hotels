const express=require('express');
const router = express.Router();
const Person=require('./../models/Person');




//POST route to add person

router.post('/',async(req,res) =>{
    try{
        const data= req.body//Assumin the request body contains the person data

        //Create a new person Documents using mongoose model
        const newPerson=new Person(data);

        //save the new person to the database
        const resposne=await newPerson.save();
        console.log('data saved')
        res.status(200).json(resposne);

    }
    catch(err){
           console.log(err);
           res.status(500).json({error:"Internal server error"});
    }
})


//get method to get the person

router.get('/',async(req,res)=>{
    try{
        const data= await Person.find();
        console.log('data fetched')
        res.status(200).json(data);

    }catch(err){
        console.log(err);
           res.status(500).json({error:"Internal server error"});

    }
})



//Paramaterized call of person
router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;//Extract the work type from URL parameter
    if(workType == 'chef' || workType=='manager'|| workType=='waiter'|| workType=='IT engineer'){
        const response = await Person.find({work:workType});
        console.log('response fetched');
        res.status(200).json(response);

        
    }else{
        res.status(404).json({erro:'Invalid work type'})
    }
    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server Error'})
    }
})

//PUT method for Updating the data


router.put('/:id',async (req,res)=>{
    try{
        const personId = req.params.id//Extract the id from url parameter

        const updatePersonData=req.body;
        const response=await Person.findByIdAndUpdate(personId,updatePersonData,{
            new:true,//return the updated documents
            runValidator:true,
        })


        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);


    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server Error'})

    }
})

//DELETE method

router.delete('/:id',async (req,res)=>{
    try{
        const personId = req.params.id//Extract the id from url parameter
        //Assuming we have a person model
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('data deleted');
        res.status(200).json({message:'person deleted successfully'});




    }catch(err){
        console.log(err)
        res.status(500).json({error:'Internal server Error'})
    }
})










module.exports=router;