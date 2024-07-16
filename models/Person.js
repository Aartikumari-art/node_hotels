const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const { isMatch } = require('lodash');

//Define the Person schema

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number

    },
    work:{
        type:String,
        enum:['chef','waiter','manager','engineer','doctor','youTuber','UPSC Aspirants','software','IT engineer'],
        required:true
    },
    mobile:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        require:true,
        unique:true,
        type:String
    },
    password:{
        require:true,
        type:String
    }
});


personSchema.pre('save', async function(next){
    const person = this;//for each data record in person 

    //Hash the password only if it has been modifiedor new
    if(!person.isModified('password')) return next();




    try{
//hash password generation
    const salt = await bcrypt.genSalt(10);

    //hash password
    const hashedPassword = await bcrypt.hash(person.password,salt);


    //override the plain password with the hashed password
    person.password = hashedPassword;




        next();
    }catch(err){
        return next(err);

    }
})

personSchema.methods.comparePassword = async function(candidatePassword){
    try{

        //Use bcrypt to compare the provide password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword,this.password);
        return isMatch;

    }catch(err){
        throw err;
    }
}


//working of comapare function
//aarti---->bdhuehdejbfi4hfub743689
//login---->kumari
//bdhuehdejbfi4hfub743689--->extract salt
//salt+kumari--->hash-->swerbvh568493gfhgjbsmbcnvh dnv





//Create person Model
const Person = mongoose.model('Person',personSchema);
module.exports = Person;
//module.exports = mongoose.model('Person', personSchema);
