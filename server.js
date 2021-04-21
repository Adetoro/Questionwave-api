const express =  require('express');
const cors = require('cors');

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
      title: 'Title for 10001',
      created: new Date()
    },
    {
      linkId:10002,
      title: 'Title for 10002',
      created: new Date()
    },
    {
      linkId:10003,
      title: 'Title for 10003',
      created: new Date()
    }
  ],
  B: [
    {
      linkId:10001,
      questions: {
        1: 'Q1 for 10001',
        2: 'Q2 for 10001',
        3: 'Q3 for 10001',
      } ,
      upvotes: {
        1: 27,
        2: 22,
        3: 3,
      },
      count: 3
    },
    {
      linkId:10002,
      questions: {
        1: 'Q1 for 10002',
        2: 'Q2 for 10002',
        3: 'Q3 for 10002',
        4: 'Q4 for 10002',
      } ,
      upvotes: {
        1: 17,
        2: 12,
        3: 23,
      },
      count: 4
    },
    {
      linkId:10003,
      questions: {
        1: 'Q1 for 10003',
        2: 'Q2 for 10003',
        3: 'Q3 for 10003',
        4: 'Q4 for 10003',
        5: 'Q5 for 10003',
      } ,
      upvotes: {
        1: 37,
        2: 32,
        3: 43,
      },
      count: 5
    }
  ]
}

app.get('/', (req, res) => {
  res.send(database.A)
})

//POST NEW LINKID AND TITLE IN TABLE A, ADD LINKID TO TABLE B
app.post('/', (req, res) => {
  if (req.body.linkId){
    const { linkId, title } = req.body;
    database.B.push({
      linkId: linkId,
      question: {
      } ,
      upvotes: {
      },
      count: 0
    })
    &&
    database.A.push({
      linkId: linkId,
      title: title,
      created: new Date()
    })
    res.json([database.A[database.A.length-1] , database.B[database.A.length-1]])
  } else {
    res.status(400).json('error with linkId');
  }   
})

// GET LINKID AND TITLE  
app.get('/link/:linkId', (req, res) => {
  var id = req.params.linkId;
  database.A.forEach(userLink => {
    if (userLink.linkId == id) {
      found = true;
      return res.json('Get Title from db: ' 
      + database.A [0].linkId +" " + database.A [0].title);
    } 
  })
  if (!found) {
    res.status(400).json('link ID not found ' + id);
  }
})
// UPDATE LINKIN TITLE
app.put('/link/:id', (req, res) => {
  const { id } = req.body;
  const { title } = req.body;
  let found = false;
  database.A.forEach(userLink => {
    if (userLink.linkId == id) {
      found = true;
      return res.json(`PUT request from Link page (return updated title): ${title}`);
    }   
})
if (!found) {
  res.status(400).json('Title cannot be updated');
}
})

// GET LINKID QUESTION PAGE DETAILS 
app.get('/q/:id', (req, res) => {
  var id = req.params.linkId;
  database.B.forEach(userLink => {
    if (userLink.linkId == id) {
      found = true;
      return res.json('Get question page by linkId: ' 
      + database.B[0].linkId +" " + database.A[0].title
      +" " + database.B[0].questions+" " + database.B[0].upvotes+" " + database.B[0].count);
    } 
  })
  if (!found) {
    res.status(400).json('link ID not found ' + id);
  }
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
  