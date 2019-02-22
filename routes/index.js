var express = require('express');
var router = express.Router();
let numberOfDigits, flashTime, setFlashes, setNum, answer;
let score = 0;
let numberOfRuns = 0;
let timeBetween;
let randomness;



/* GET home page. */
router.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.post('/settings', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  numberOfDigits = req.query.numberOfDigits;
  flashTime = req.query.flashTime;
  setFlashes = req.query.setFlash;
  setNum = req.query.setNum;
  timeBetween = req.query.timeBetween;
  randomness = req.query.randomness;
  console.log(flashTime);
  console.log(numberOfDigits);
  console.log(setFlashes);
  console.log(setNum);
  res.send('This is the obligatory response');  
})
router.post('/answers/:number', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  answer = req.params.number
  res.send(answer);  
})
router.post('/result/:number', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  score = Number(req.params.number) + score;
  res.send({score: score});
})
router.post('/runs/:number', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  numberOfRuns = Number(req.params.number) + numberOfRuns;
  res.send({score: score});
})
router.get('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send('Hello World! This is working!');
})
router.get('/information', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
    numberOfDigits: numberOfDigits,
    flashTime: flashTime,
    setNum: setNum, 
    setFlashes: setFlashes,
    timeBetween: timeBetween,
    randomness: randomness
  })
})
router.get('/score', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({answer: answer});
})
router.get('/runs', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
    runs: numberOfRuns,
    numberOfSets: setNum
  });
})
router.get('/final', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.send({
    numberOfSets: setNum,
    score: score
  });
  score = 0;
})


module.exports = router;
