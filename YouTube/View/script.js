const searchQuery = window.location.search;
const queryArray = searchQuery.split("=");
const videoId = decodeURI(queryArray[1]);


const iframemele = document.getElementsByTagName('iframe')[0];

iframemele.setAttribute('src',`https://www.youtube.com/embed/${videoId}`);