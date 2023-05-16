const Compte =require('../Models/Compte.js')

module.exports = async function verify(username, password, done){
    const user = await Compte.findOne({where:{username:username}})
    .then((user)=>{
        if(!user){
            return done(null, false,{message:"No user has that username !"})
        }
        else{
            if(user.password===password) return done(null,user);
            else done(null,false,{message:"Invalid password"});
        }
    })
    .catch(err=>{done(err)});

    return user;

}

