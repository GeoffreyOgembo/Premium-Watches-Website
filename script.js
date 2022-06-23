// function fetchData()
// fetch('https://watchbase.com/')
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// })
function fetchData(){
  fetch("https://www.watchbase.com")
  .then(res=>res.json())
  .then(data =>console.log(data))
}

// element.addEventListener("click",fetchData);
const doc= document.getElementById('form-submit')

function fetchWatch() {
  alert ("watch");
}
// const even = document.querySelector('data')
// console.log(even)
addEventListener("click", fetchData)