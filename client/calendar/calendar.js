
async function fetchEventsJSON() {
    const response = await fetch('../db/events.json');
    const events = await response.json();
    return events;
}

fetchEventsJSON().then(events => {
    console.log(events)
});

