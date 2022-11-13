const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const cors = require('cors');
app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const port = 3001
let num = 110;
const database = {
    users: [{
        id: "101",
        name: "Ali",
        username: "AliHD",
        password: "ali123",
        joined: new Date()
    },
    {
        id: "102",
        name: "Adam",
        username: "AdamL230",
        password: "adamadam",
        joined: new Date()
    },{
        id: "103",
        name: "JayT",
        username: "JayT37",
        password: "justatee37",
        joined: new Date()
    },{
        id: "104",
        name: "Lynklee",
        username: "Lynkleelee",
        password: "tambietnhe",
        joined: new Date()
    },{
        id: "105",
        name: "Camly",
        username: "EmMinhTuyet",
        password: "khongbietbaigi",
        joined: new Date()
    },
    {
        id: "106",
        name: "Bruce Lee",
        username: "BruceLee234",
        password: "ChineseMartialArt",
        joined: new Date()
    }],
    login: [
        {
            id: '773',
            username: 'vtdoan',
            hash: ''
        },
        {
            id: '2343',
            username: 'jimi',
            hash: ''

        }
    ]
}

app.get('/', (req, res) => {
  res.send(database.users)
})

app.post('/signin', (req, res) => {
    const {username, password} = req.body;
    const result = bcrypt.compareSync(password, '$2b$10$9UX6Fx2ScTPdq/yqnYN9N.hhbr2thuuRNcemI4eOLJVu6aHCBXwqe');
    for(const user of database.users){
        if(user.username === username && user.password === password){
            return res.json(user);
        }
    }
    return res.status(404).json('password/username incorrect');
});

app.post('/register', (req, res) => {
    const {name, username, password} = req.body;
    const hash = bcrypt.hashSync(password,10);
    database.users.push({
        id: ++num+"",
        name: name,
        username: username,
        joined: new Date(), 
    });
    res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id',(req,res)=>{
    const {id} = req.params;
    for(const user of database.users){
        if(user.id === id){
            return res.json(user);
        }
    }
    res.json('cannot find user')
})

app.put('/visits', (req, res) => {
    const {id, place_id} = req.body;
    for(const user of database.users){
        if(user.id === id){
            let exist = false;
            let placeArr = user.places;
            for(let i = 0; i < placeArr.length; i++){
                if(placeArr[i].place_id === place_id){
                    placeArr[i].prevVisit = placeArr[i].lastVisit;
                    placeArr[i].numVisits++;
                    placeArr[i].lastVisit = new Date();
                    exist = true;
                    return res.json(placeArr[i]);
                }
            }
            if(!exist){
                let newPlace = {
                    place_id: place_id,
                    lastVisit: new Date(),
                    prevVisit: new Date(),
                    numVisits: 1
                }
                user.places.push(newPlace);
                return res.json(newPlace);
            }
            // return res.json(place);
        }
    }
    res.json('cannot find user')
})

app.listen(port, () => {
  console.log(`App is running on on port ${port}`)
})
