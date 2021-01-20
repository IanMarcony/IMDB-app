import {Request,Response,NextFunction, Express} from "express"
import * as JWT from "jsonwebtoken"
const authConfig = require("../../../config/auth")//pega o hash md5

module.exports = (req:Request, res:Response,next:NextFunction)=>{

  const authHeader = req.headers.authorization

  if(!authHeader)return res.status(401).send({error:"No token provided"}).redirect("/")//Sem Token

  //Formato padrão do JWT: Bearer (hash)

  const parts = authHeader.split(' ')


  if(!(parts.length===2))return res.status(401).send({error:"Token error"}).redirect("/")//Não está no formato correto

  const [scheme,token]=parts

  if(!/^Bearer$/i.test(scheme))return res.status(401).send({error:"Token malformatted"}).redirect("/")//Não possui o 'Bearer'

  try{

    const payload = <any> JWT.verify(token,authConfig.secret)
    req.userId= payload.id

    return  next();

  }catch(err){
    return res.status(401).send({error:"Token Invalid"}).redirect("/")
  }

}
