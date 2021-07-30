const eventList = document.getElementById('eventList')
console.log(eventList)

async function fetchEventsJSON() {
    const response = await fetch('../db/events.json');
    const events = await response.json();
    return events;
}

fetchEventsJSON().then(events => {
    events.forEach((event) => {
        if ( event.timestamp >= Math.floor(Date.now() / 1000)){
            eventList.innerHTML += '<div class="event">' + '<div class="title-line"' + '<a>' + event.title + '</a>' + '<a id="big-date"> ' + event.date + '</a>' + '</div>' +
        '<p>' + event.description + '</p>' +
        '<ul class="event-details">' + '<li>' + event.members + ' membres' + '</li>' + '<li>' + event.time + '</li>' + '<li>' + event.location + '</li>' + '</ul>' + '</div>'
        }
        
    })
});

console.log(Date.now())
console.log(1628838000)