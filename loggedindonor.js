// using this array until mock api is available
donors = ['Project A', 'Project B', 'Project C']

// for displaying info about projects that the user supports

donors.forEach(elem => {
    // creat element
    let newDiv = document.createElement('div');
    newDiv.setAttribute("id", "div1")
    
    // create text
    let newContent = document.createTextNode(elem);
    newDiv.appendChild(newContent)
    
    // insert into html
    let currentDiv = document.getElementById("div1")
    document.getElementById('load-project').insertBefore(newDiv, currentDiv)
})

