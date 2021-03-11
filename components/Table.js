const removeTable = () => {
    try{
        let tablaCampos = document.getElementById("tablaCampos")
        tablaCampos.removeChild(tablaCampos.childNodes[0])
    }catch{
        null
    }
}

const showList = (campos) => {

    removeTable()

    let tablaCampos = document.getElementById("tablaCampos")
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    let h3Text = document.createTextNode("Campos: ")
    let table = document.createElement("table")
    let tbody = document.createElement("tbody")
    
    for(let i=0; i<campos.length ;i++){
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        let textnode = document.createTextNode(`Campo: ${campos[i]}`)

        td.appendChild(textnode)
        tr.appendChild(td)
        tbody.appendChild(tr)
        table.appendChild(tbody)
        h3.appendChild(h3Text)
        div.appendChild(h3)
        div.appendChild(table)
        tablaCampos.appendChild(div)
    }
}
