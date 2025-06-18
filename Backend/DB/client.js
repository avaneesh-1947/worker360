import mongoose from "mongoose";


const userSchema  = new mongoose.Schema({
    
    name: { type: String},
    username:{type:String , require:true},
    phone:{type:String , require:true},
    email: { type:String},
    password: { type: String },
    location:{type:String}

})
const client = new mongoose.model("Users" , userSchema);
export default client ;