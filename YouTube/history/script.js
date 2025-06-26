const val = window.localStorage.getItem("history")
// console.log(val);

const arr = JSON.parse(val);
console.log(arr);

const rootele = document.getElementById("root");
arr.reverse().forEach((videoId)=>{
    const newDiv = document.createElement('div');
    newDiv.innerHTML=`
    <iframe width="560" height="315" src="https://youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    rootele.append(newDiv)
})