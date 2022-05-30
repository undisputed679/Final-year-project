import bcrypt from 'bcryptjs'

const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true

    },
    {
        name:'Mayank Bhushan',
        email:'mayank@example.com',
        password:bcrypt.hashSync('123456',10),

    },
    {
        name:'Meghna Bardhan',
        email:'meghna@example.com',
        password:bcrypt.hashSync('123456',10),
  
    }
]

export default users