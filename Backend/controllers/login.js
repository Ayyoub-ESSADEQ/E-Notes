import Compte from '../Models/Compte.js';

export default async function verify(username, password){
    const user = await Compte.findOne({where:{username:username}})
    .then((user,err)=>{
        if(!user){
            return false;
        }
        else{
            if(user.password===password) return true;
            else return false;
        }
    });

    return user;

}

