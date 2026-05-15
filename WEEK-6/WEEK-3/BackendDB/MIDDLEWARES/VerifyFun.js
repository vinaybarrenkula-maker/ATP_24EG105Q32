import jwt from 'jsonwebtoken'
const {verify}=jwt
export function verifyToken(req,res,next){

    const token = req.cookies?.token
    console.log(token)

    if(!token){
        return res.status(401).json({message:"please login"})
    }

    try{
        const decodedToken = verify(token,"abcdef")
        req.user = decodedToken
        next()
    }
    catch(err){
        res.status(401).json({message:"Session expired"})
    }

}