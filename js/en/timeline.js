async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
}

// Fetch JSON data and initialize the timeline
fetchData('https://eloisans.github.io/js/json/en_data.json')
    .then(data => {
        console.log(data);
        window.timeline = new TL.Timeline('timeline-embed', data);
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
