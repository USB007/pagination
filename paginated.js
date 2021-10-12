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
]

const posts=[
    {id: 1, name:'post1'},
    {id: 2, name:'post2'},
    {id: 3, name:'post3'},
    {id: 4, name:'post4'},
    {id: 5, name:'post5'},
    {id: 6, name:'post6'},
    {id: 7, name:'post7'},
    {id: 8, name:'post8'},
    {id: 9, name:'post9'},
    {id: 10, name:'post10'},
    {id: 11, name:'post11'},
    {id: 12, name:'post12'},
    {id: 13, name:'post13'},
    {id: 14, name:'post14'},
    {id: 15, name:'post15'},
    {id: 16, name:'post16'},
    {id: 17, name:'post17'},
    {id: 18, name:'post18'},
    {id: 19, name:'post19'},
    {id: 20, name:'post20'},
    {id: 21, name:'post21'},
    {id: 22, name:'post22'},
    {id: 23, name:'post23'},
    {id: 24, name:'post24'},
    {id: 25, name:'post25'},
]

app.get('/posts',paginatedResults(posts),(req,res) =>{
res.json(res.paginatedResults)
})


app.get('/users',paginatedResults(users),(req, res) => {
    res.json(res.paginatedResults)  
})

function paginatedResults(model){
    return (req, res, next) =>{
        const page =parseInt(req.query.page)
        const limit=parseInt(req.query.limit)
    
        const startIndex = (page -1) * limit
        const endIndex = page * limit
    
        const results={}
    
        if (endIndex < model.length) { 
        results.next = {
            page: page + 1,
            limit: limit
        }      
    }
        
        if(startIndex > 0){
        results.previous = {
            page: page -1,
            limit: limit
        }
    }
    
        results.results= model.slice(startIndex,endIndex)
       
        res.paginatedResults=results  
        next()
    }

}


app.listen(3000)