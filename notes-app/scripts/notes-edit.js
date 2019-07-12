'use strict'

const noteTitleEl = document.querySelector('#note-title')
const noteBodyEl = document.querySelector('#note-body')
const noteRemoveButtonEl = document.querySelector('#remove-note')
const noteUpdatedEl = document.querySelector('#last-updated')

const noteId = location.hash.substring(1)

let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if (!note)
    location.assign('/notes-app/index.html')

noteTitleEl.value = note.title
noteBodyEl.value = note.body
noteUpdatedEl.textContent = generateLastEdited(note.updatedAt)

noteTitleEl.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    noteUpdatedEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

noteBodyEl.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    noteUpdatedEl.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

noteRemoveButtonEl.addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/notes-app/index.html')
} )

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        
        if (!note)
            location.assign('/notes-app/index.html')
           
        noteTitleEl.value = note.title
        noteBodyEl.value = note.body
        noteUpdatedEl.textContent = generateLastEdited(note.updatedAt)
    }
} )









