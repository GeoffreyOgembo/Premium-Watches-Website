// function fetchData()
// fetch('https://watchbase.com/')
// .then(response => {
//   return response.json();
// })
// .then(data => {
//   console.log(data);
// })
body: JSON.stringify()
function fetchData(data){
  const url = ("http://universities.hipolabs.com/search?country=United+Kingdom")
  fetch (url)
  
  .then (res => res.json())
  .then (data => console.log(data))
};

// element.addEventListener("click",fetchData);
const doc= document.getElementById('form-submit')
const f ="fetchwatch"
function fetchWatch() {
  alert ("university");
}
// const even = document.querySelector('data')
// console.log(even)
addEventListener("click", fetchData)
 