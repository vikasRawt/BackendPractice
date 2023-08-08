  const User = require('../models/userModelschema')
  
  exports.home =(req,res)=>{
    res.send("heloo guys")
   }

   exports.createUser = async(req,res)=>{
    //extract info
    try {
        const {name,email}=req.body
const userExists = user.findOne({email})
        if(userExists){
            throw Error("user already exists")
        }

       const user=  await User.create({
            name,
            email
        })

        res.status(200).json({
            success: true,
            message:"user created successfully",user
        })
    } catch (error) {
        console.log("error");
        res.status(400).json({
            success: false,
            message:error.message
        })
    }
   }

   // to get data from db::--

   exports.getUser = async(req,res)=>{
   try {
   const users = await User.find({})
 
    res.status(200).json({
    success: true,
    message: `got the details successfully`
})
} catch (error) {
        console.log("error");
        res.status(400).json({
            success: false,
            message:error.message
 })
 }
}

exports.deleteUser = async (req,res)=>{
    try {
    const userId = req.prams.id //used for taking data by url and not body 
    const user = await User.findByIdAndDelete(userId)
res.status(200).json({
    success: true,
    message:"user deleted successfully"
})
} catch (error) {
        console.log("error");
        res.status(400).json({
            success: false,
            message:error.message
    })
}
}

exports.updateUser = async (res,req)=>{
    try {
        const user = await User.findByIdAndUpdate(req.prams.id, req.body)

        res.status(200).json({
            success:true,
            message:"updated successfuly"
        })
    } catch (error) {
        console.log("error");
        res.status(400).json({
            success: false,
            message:error.message
    })
    }
}