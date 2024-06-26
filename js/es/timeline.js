import data from '../json/es_data.json';

console.log(data);
window.timeline = new TL.Timeline('timeline-embed', data);
