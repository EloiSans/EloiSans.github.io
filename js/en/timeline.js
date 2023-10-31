import data from '../json/en_data.json' assert { type: 'json' };

console.log(data);
window.timeline = new TL.Timeline('timeline-embed', data);
