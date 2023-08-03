import data from './json/data.json' assert { type: 'json' };

console.log(data);
window.timeline = new TL.Timeline('timeline-embed', data);
