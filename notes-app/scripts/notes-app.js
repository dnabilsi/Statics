'use strict'

let notes = getSavedNotes()

// filter and display filtered notes via input/search

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const noteId = uuidv4()
    const timeStamp = moment().valueOf()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
   })
   saveNotes(notes)

   location.assign(`/notes-app/edit.html#${noteId}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    } 
} )

// const timeStamp2 = moment().valueOf()
// console.log(timeStamp2)
// console.log(moment(timeStamp2).fromNow())














