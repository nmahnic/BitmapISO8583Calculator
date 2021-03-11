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
    table.className = "table table-hover table-sm table-dark"
    let tbody = document.createElement("tbody")
    
    for(let i=0; i<campos.length ;i++){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let textnode1 = document.createTextNode(`Campo: ${campos[i]}`)
        let td2 = document.createElement("td")
        td2.className = "text-md-right"
        let bytesOfLength = fields.find(el => el.field == campos[i] ).bytesOfLength
        let dots = ""
        for(let i = 0 ; i<bytesOfLength ; i++) dots+="."
        let textnode2 = document.createTextNode(`${dots}${fields.find(el => el.field == campos[i] ).length}`)
        let td3 = document.createElement("td")
        let textnode3 = document.createTextNode(`${fields.find(el => el.field == campos[i] ).description}`)
        
        
        td1.appendChild(textnode1)
        td2.appendChild(textnode2)
        td3.appendChild(textnode3)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tbody.appendChild(tr)
        table.appendChild(tbody)
        h3.appendChild(h3Text)
        div.appendChild(h3)
        div.appendChild(table)
        tablaCampos.appendChild(div)
    }
}
