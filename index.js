const addButton = document.getElementById("addButton");
const container=document.querySelector('.container');

addButton.onclick=function(e){
  e.preventDefault();
  const addHeader=document.getElementById('addHeader');
  const addText=document.getElementById('addText');
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: addHeader.value,
      body: addText.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then((data)=>{
    const header=document.createElement('h3');
    const text=document.createElement('p');
    header.classList.add('headerItem');
    text.classList.add('textItem');
    container.appendChild(header);
    container.appendChild(text);
    header.textContent=data.title;
    text.textContent=data.body;
  })
  .catch(error=>console.log(error));
  addHeader.value='';
  addText.value=''
}
