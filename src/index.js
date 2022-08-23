document.addEventListener('DOMContentLoaded',()=>{
  let form = document.querySelector('form').addEventListener('submit', (e) =>{
      e.preventDefault()
      const newItem = document.getElementById("new-task-description").value;
      console.log(newItem);
      buildList(newItem);

  })
})
function buildList(tasks){
  const li = document.createElement('li')
  li.textContent = tasks

  const btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x';
  
  li.appendChild(btn)
  const theList = document.querySelector('#tasks').appendChild(li)
}
function handleDelete(e){
  e.target.parentNode.remove()
}

// document.getElementById("add").onclick = function() {
//     //First things first, we need our text:
//     var text = document.getElementById("idea").value; //.value gets input values

//     //Now construct a quick list element
//     var li = "<li>" + text + "</li>";

//     //Now use appendChild and add it to the list!
//     document.getElementById("list").appendChild(li);