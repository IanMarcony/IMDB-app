import * as JWT from "jsonwebtoken";//cria o JWT
const authConfig = require("../../../config/auth")//pega o hash md5

const neverExpire=31557600000*99999

export  function generateToken(params={}){
  return  JWT.sign(params,authConfig.secret,{
    expiresIn:neverExpire
  })
}
