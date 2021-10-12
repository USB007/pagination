const express = require('express');
const app=express();

const users=[
    {id: 1, name:'user1'},
    {id: 2, name:'user2'},
    {id: 3, name:'user3'},
    {id: 4, name:'user4'},
    {id: 5, name:'user5'},
    {id: 6, name:'user6'},
    {id: 7, name:'user7'},
    {id: 8, name:'user8'},
    {id: 9, name:'user9'},
    {id: 10, name:'user10'},
    {id: 11, name:'user11'},
    {id: 12, name:'user12'},
    {id: 13, name:'user13'},
    {id: 14, name:'user14'},
    {id: 15, name:'user15'},
    {id: 16, name:'user16'},
    {id: 17, name:'user17'},
    {id: 18, name:'user18'},
    {id: 19, name:'user19'},
    {id: 20, name:'user20'},
    {id: 21, name:'user21'},
    {id: 22, name:'user22'},
    {id: 23, name:'user23'},
    {id: 24, name:'user24'},
    {id: 25, name:'user25'},
    {id: 25, name:'user26'}
]

app.get('/users',(req, res) => {
    const page = req.query.page
    const limit=req.query.limit
    const startIndex = (page -1) * limit
    const endIndex = page * limit
    

    const resultUsers = users.slice(startIndex,endIndex)
    
    res.json(resultUsers)
})
app.listen(3000)