const roommates = require('./roommates/render')
const data = require('./roommates/data')

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
    // const username = document.querySelector('#username');
    // console.log(username.value);

    // const = { username, avatar, faction, street, suite, city, inputZip } = event.target

    const newRoomie = {
      "username": event.target.username.value,
      "avatar": event.target.avatar.value,
      "faction": event.target.faction.value,
      "address": {
      "street": event.target.street.value,
      "suite": event.target.suite.value,
      "city": event.target.city.value,
        "zipcode": event.target.inputZip.value
        }
    }

    data.unshift(newRoomie); // push new roomie object into the data
    roommates.showAll(roommatesContainer) // rerun showAll method to display new roomie
  })
})
