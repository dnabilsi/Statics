const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Italy'
}, {
  title: 'Habbits to work on',
  body: 'Eat less, Exercise more'
}, {
  title: 'Bedroom revamp',
  body: 'Change sheets'
}]

// DOM - Docmuent Object Model

// Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query all and remove

const ps = document.querySelectorAll('p')



ps.forEach(function (p) {
  p.textContent = '*******'
  // console.log(p.textContent)
  // p.remove()
})

// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)