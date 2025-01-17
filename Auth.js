//Sets up passport with local authentication strategy, using a person for use





const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Person = require('./models/Person');




passport.use(new LocalStrategy(async(USERNAME,password,done)=>{
    //Authentication login here
    try{
       // console.log('Recieved credential:', USERNAME,password);
        const user = await Person.findOne({username:USERNAME});
        if(!user)
            return done(null, false,{message:'Incorrect username.'});

     const isPasswordMatch =await user.comparePassword(password);

        if(isPasswordMatch){
            return done(null,user);
        }else
        {
            return done(null,false,{message:'Incorrect password'});
        }

    }catch(err){
        return done(err);

    }
}))


module.exports=passport;
















