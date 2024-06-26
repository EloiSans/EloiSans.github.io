import data from '../json/ca_data.json';

console.log(data);
window.timeline = new TL.Timeline('timeline-embed', data);
