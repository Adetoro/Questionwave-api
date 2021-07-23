const express =  require('express');
const cors = require('cors');
const knex = require('knex');
const { response } = require('express');
const path = require("path");
const PORT = process.env.PORT || 4000;

const app = express();

//REDIRECT HTTP TO HTTPS
app.enable('trust proxy')
app.use((req, res, next) => {
    req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})

// MIDDLEEARE -> ALLOW EXPRESS SERVER READ JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// MIDDLEWARE TO ALLOW ACCESS TO SERVER
app.use(cors());

require('dotenv').config();
const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}/${process.env.PG_DATABASE}`;
const proConfig = process.env.DATABASE_URL //heroku addons

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.NODE_ENV === ("production" || undefined )? proConfig : devConfig,
    ssl: {
      rejectUnauthorized: false
    }
  }
});
console.log('process env ' +process.env.NODE_ENV);

//process.env.NODE_ENV => production or undefined
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));

  // app.get('/', (req, res) => {
  //   res.json("it's working");
  // });
}

// GET LAST LINKID FROM DB  
app.get('/home', (req, res) => {
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
app.post('/home', (req, res) => {
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
app.get('/api/link/:linkId', (req, res) => {
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
app.put('/api/link/:id', (req, res) => {
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
app.get('/api/q/:id', (req, res) => {
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
      res.status(400).json('question details not found')
    }
  })
  .catch(err => res.status(400).json("unable to get question info"))
})

//POST NEW QUESTION
app.post('/api/q/:id', (req, res) => {
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

}) ;


// UPDATE QUESTION UPVOTE 
app.put('/api/q/:id', (req, res) => {
  const { id, question_id, question_upvotes} = req.body;

  db('questiondetails')
  .where({question_id: question_id})
  .update({upvotes: question_upvotes})
  .then(response => {
    res.json("question page server (put): " + response)
  })
  .catch(err => res.status(400).json("unable update upvote"))
});

// ADMIN: GET ALL CREATED LINKS AND TITLES  
app.get('/api/admin/', (req, res) => {
  
  db.select('id','title','linkid','created')
  .from('identify')
  .orderBy('created', 'desc')
  .then(response => {
    if(response){
      res.json(response)
    }
    else{
      res.status(400).json('question details not found')
    }
  })
  .catch(err => res.status(400).json("unable to get question info"))
})

// ADMIN: GET INFO FROM QUESTIONDETAILS 
app.get('/api/admin/table2', (req, res) => {
  
  db.select('linkid')
  .count('linkid')
  .from('questiondetails')
  .whereNot({question: ''})
  .then(response => {
    if(response){
      res.json(response)
    }
    else{
      res.status(400).json('question details not found')
    }
  })
  .catch(err => res.status(400).json("unable to get question info"))
})

//CATCH INVALID URL ENTRIES
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
  console.log("invalid route");
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
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
  