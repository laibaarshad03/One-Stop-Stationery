import jwt from 'jsonwebtoken'

// json token
// consists of token, payload, signature
const generateToken=(id)=>{
    //return payload
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}
export default generateToken