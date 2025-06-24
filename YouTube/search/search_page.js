const searchQuery = window.location.search;
// console.log(searchQuery);

const queryArray = searchQuery.split("=");
const searchText = queryArray[1];
console.log("Search Text:",decodeURI(searchText));

