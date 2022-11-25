import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Maha Anwer',
        password: bcrypt.hashSync('11223344', 10),
        phone: '03334567809',
        email: 'ma@gmail.com',
        isAdmin: true
    },
    {
        name: 'Laiba Arshad',
        password: bcrypt.hashSync('11223344', 10),
        phone: '03334567809',
        email: 'la@gmail.com',
        isAdmin: false
    },
    {
        name: 'Ayesha Rizwan',
        password: bcrypt.hashSync('11223344', 10),
        phone: '03334567809',
        email: 'ar@gmail.com',
        isAdmin: false
    }
]

export default users