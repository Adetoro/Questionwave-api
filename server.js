const express =  require('express');
const cors = require('cors');
const knex = require('knex');
const { response } = require('express');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '12345',
    database : 'questionwave'
  }
});

db.select('*').from('identify').then(data => {
  console.log(data);
});

const app = express();
const port = 3005;

// ALLOW EXPRESS SERVER READ JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// MIDDLEWARE TO ALLOW ACCESS TO SERVER
app.use(cors())

// GET LAST LINKID FROM DB  
app.get('/', (req, res) => {
  db.from('identify')
  .select('linkid')
  .orderBy('id', 'desc')
  .limit(1)
  .then(response => {
    res.json(Number(Object.values(response[0])))
    console.log(Number(Object.values(response[0])))
  })  
  .catch(err => res.status(400).json("unable get link"))
})                                                                 


//POST NEW LINKID AND TITLE IN TABLES: IDENTIFY & QUESTIONDETAILS
app.post('/', (req, res) => {
  const { linkId, title} = req.body;

  if(!linkId || !title) {
    return res.status(400).json('incorrect form submission'); 
  }

  //USE TRANSACTION TO POST DATA IN TO TABLE "identify" & TABLE "questiondetails"
  db.transaction(function(trx) {
    db('identify').transacting(trx)
    .insert({
      linkid: linkId,
      title: title,
      created: new Date()
      })
      .then(function(resp) {
        const id = resp[0];
        return (id, trx);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
  .then(function(resp) {
    db('questiondetails')
    .returning('linkid')
    .insert({
      linkid: linkId,
      asked_at: new Date()
    })
    .then(response => {
      res.json("Successful post into table 1&2 " + response)
    })

  })
  .catch(err => res.status(400).json('unable to create question link'));

})

// GET LINKID AND TITLE  
app.get('/link/:linkId', (req, res) => {
  let id = req.params.linkId;
  db.from('identify')
  .select('title')
  .where('linkid', id)
  .then(response => {
    if (response[0].title){
      res.json(response[0])
    }
    else {
      throw Error("error!");
    }
  })
  .catch(err => res.status(400).json("unable to get title"))
})

// UPDATE LINKIN TITLE
app.put('/link/:id', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;

  db('identify')
  .where( 'linkid', id )
  .update('title', title )
  .then(response => {
    res.json("from link server (put): " + response)
  })
  .catch(err => res.status(400).json("unable update title"))
})

// GET QUESTION PAGE DETAILS  
app.get('/q/:id', (req, res) => {
  let id = req.params.id;

  db.select('*')
  .from('identify')
  .join('questiondetails', 'identify.linkid', '=', 'questiondetails.linkid')
  .where('identify.linkid', id)
  
  .orderBy([{ column: 'upvotes', order: 'desc' }, { column: 'asked_at' }])
  .then(response => {
    if(response){
      res.json(response)
    }
    else{
      res.status(400).json('Not found')
    }
    
  })
  .catch(err => res.status(400).json("unable to get question info"))
  
})

//POST NEW QUESTION
app.post('/q/:id', (req, res) => {
const { linkId, question} = req.body;

  db('questiondetails')
  .insert({
    linkid: linkId,
    question: question,
    asked_at: new Date()
  })
  .returning('question')
  .then(response => {
    res.json(Object.values(response))
  })
  .catch(err => res.status(400).json("unable to add new question"))

}) 

// UPDATE QUESTIONS PAGE COUNT  
// app.put('/q/:id', (req, res) => {
//   const { id } = req.params.id;
//   const { newQuestion } = req.body;
//   let found = false;
//   database.B.forEach(userLink => {
//     if (userLink.linkId == id) {
//       found = true;
//       database.B.push({
//         questions: newQuestion
//       })
//       userLink.count++
//       return res.json(userLink.count);
//     } 
//   })
//   if (!found) {
//     res.status(400).json('link ID not found');
//   }
// })

// UPDATE QUESTION UPVOTE 
app.put('/q/:id', (req, res) => {
  const { id, question_id, question_upvotes} = req.body;

  db('questiondetails')
  .where({question_id: question_id})
  .update({upvotes: question_upvotes})
  .then(response => {
    res.json("question page server (put): " + response)
  })
  .catch(err => res.status(400).json("unable update upvote"))
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})



// / --> res = this is working
// / --> POST --> event id & title 
// /link/:linkId --> GET --> event id & title
// /link/:linkId --> PUT --> update event title
// /q/:linkId -->  GET --> event info (question count, questions and upvotes)
// /q/:linkId -->  PUT --> update number of questions
// /q/:linkId -->  PUT --> number of upvotes
// /q/:linkId -->  POST --> new question
// /question -->
  