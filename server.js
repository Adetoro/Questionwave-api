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

const database = {
  A: [
    {
      linkId:10001,
      title: 'Title from database',
      created: new Date()
    },
    {
      linkId:10002,
      title: 'Title for 10002',
      created: new Date()
    },
    {
      linkId:10023,
      title: 'Title for 10011',
      created: new Date()
    }
  ],
  B: [
    {
      linkId:10001,
      questions: [
         'Q1 for 10001',  23, 
      ],
      count: 3
    },
    {
      linkId:10002,
      questions: [
        {
          content: 'Q1 for 10002',
          upvotes: 23,  
        } ,
        {
          content: 'Q2 for 10002',
          upvotes: 20,  
        } ,
        {
          content: 'Q3 for 10002',
          upvotes: 13,  
        }
      ],
      count: 4
    },
    {
      linkId:10003,
      questions: [
        {
          content: 'Q1 for 10003',
          upvotes: 23,  
        } ,
         {
          content: 'Q2 for 10003',
          upvotes: 20,  
        } ,
        {
          content: 'Q3 for 10003',
          upvotes: 13,  
        }
      ],
      count: 5
    }
  ]
}

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


//POST NEW LINKID AND TITLE IN TABLE A: IDENTIFY
app.post('/', (req, res) => {
  const { linkId, title } = req.body;
  db.transaction(trx => {
    trx.insert({
        linkid: linkId,
        title: title,
        created: new Date()
      })
      .into('identify')
      .returning('linkid')
      .then(function() {
            return trx('questionDetails')
              .insert({
                linkid: linkId,
                title: title,
              })
              .returning('*')
              .then(linkid => {
                res.json("success")
              })
              .catch(err => res.status(400)
              .json('unable to add to tables'))
      })

  }) 
    .catch(function(error) {
        // it failed
    });

})

// GET LINKID AND TITLE  
app.get('/link/:linkId', (req, res) => {
  var id = req.params.linkId;
  db.from('identify')
  .select('title')
  .where('linkid', id)
  .then(response => {
    res.json(response[0])
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
  db('identify')
  .join('questionDetails', 'identify.linkid', '=', 'questionDetails.linkid')
  .select('*')
  .where('linkid', id)
  .then(response => {
    res.json(response[0])
  })
  .catch(err => res.status(400).json("unable to get question info"))
  let DisplayId
  let DisplayTitle
  let DisplayCount
  let DisplayQuestions
  
  
})

// UPDATE LINKID QUESTIONS COUNT  
app.put('/q/:id', (req, res) => {
  const { id } = req.params;
  const { newQuestion } = req.body;
  let found = false;
  database.B.forEach(userLink => {
    if (userLink.linkId == id) {
      found = true;
      database.B.push({
        questions: newQuestion
      })
      userLink.count++
      return res.json(userLink.count);
    } 
  })
  if (!found) {
    res.status(400).json('link ID not found');
  }
})

// UPDATE QUESTION UPVOTE  



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
  