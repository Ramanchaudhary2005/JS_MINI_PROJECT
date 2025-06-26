const searchQuery = window.location.search;
const queryArray = searchQuery.split("=");
const videoId = decodeURI(queryArray[1]);


const iframemele = document.getElementsByTagName('iframe')[0];

iframemele.setAttribute('src',`https://www.youtube.com/embed/${videoId}`);

const val = window.localStorage.getItem("history") ?? [];
const arr = JSON.parse(val);
arr.push(videoId);

const str = JSON.stringify(arr);
window.localStorage.setItem('history',str);