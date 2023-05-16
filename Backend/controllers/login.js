const Compte =require('../Models/Compte.js')

module.exports = async function verify(username, password, done){
    const user = await Compte.findOne({where:{username:username}})
    .then((user)=>{
        if(!user){
            return done(null, false)
        }
        else{
            if(user.password===password) {
                return done(null,user);
            }
            else done(null,false);
        }
    })
    .catch(err=>{done(err)});

    return user;

}

