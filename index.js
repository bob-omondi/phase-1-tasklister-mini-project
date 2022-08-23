document.addEventListener('DOMContentLoaded',()=>{
    let form = document.querySelector('form').addEventListener('submit', (e) =>{
        e.preventDefault()
        buildList(e.target.new-task-description.value)
        form.reset()
    })
})
function buildList(tasks){
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    li.textContent = tasks
    li.appendChild(btn)
    console.log(li)
    document.querySelector('#tasks').appendChild(li)
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