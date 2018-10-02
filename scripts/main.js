const roommates = require('./roommates/render')

const roommatesContainer = document.querySelector('#roommates')
roommates.showAll(roommatesContainer)

const newRoommateButton = document.querySelector('#new-roommate-button')
newRoommateButton.addEventListener('click', (event) => {
  event.preventDefault();
  const sidebar = document.querySelector('#sidebar')
  roommates.showNewForm(sidebar)

  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  })
})
