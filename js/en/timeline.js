import data from '../json/en_data.json';

console.log(data);
window.timeline = new TL.Timeline('timeline-embed', data);
