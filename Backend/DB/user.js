import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);
<<<<<<< HEAD

export default User;
=======
export default User;
>>>>>>> 4c01de6652b0b881f2500b5740e78c1b499e4f23
