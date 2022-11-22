const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors());

const categories = require('./data/course-category.json');

const course = require('./data/course-details.json')

app.get('/', (req, res) => {
  res.send('Ilm Center api is  running!')
})

app.get('/categories', (req, res) => {
  res.send(categories)
})

app.get('/course', (req, res) => {
  res.send(course)
})

app.get('/course/:id', (req,res) =>{
  const id = req.params.id;
  const selectedCourse = course.find(n => n.id ===id);
  res.send(selectedCourse)
})
app.get('/checkout/:id', (req,res) =>{
  const id = req.params.id;
  const selectedCourse = course.find(n => n.id ===id);
  res.send(selectedCourse)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})