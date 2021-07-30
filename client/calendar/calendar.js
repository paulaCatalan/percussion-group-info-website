const eventList = document.getElementById('eventList')
console.log(eventList)

async function fetchEventsJSON() {
    const response = await fetch('../db/events.json');
    const events = await response.json();
    return events;
}

fetchEventsJSON().then(events => {
    events.forEach((event) => {
        eventList.innerHTML += '<div class="event">' + '<h3>' + event.title + '</h3>' +
        '<p>' + event.description + '</p>' +
        '<ul>' + '<li>' + event.members + ' membres' + '</li>' + '<li>' + event.date + '</li>' + '<li>' + event.time + '</li>' + '<li>' + event.location + '</li>' + '</ul>' + '</div>'
    })
});

