import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Please provide an email'],
    },

    username: {
        type: String,
        unique: [true, 'Username already exists'],
        required: [true, 'Please provide a username'],
        match: [/^[a-zA-Z0-9]+$/, 'Username should contain letters and numbers only'],
    },

    image: {
        type: String,
        default: '/public/assets/images/logo.svg',
    }
})

const User = models.User || model('User', UserSchema);

export default User;