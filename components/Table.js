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
    let h3Text = document.createTextNode("Bitmap: ")
    let table = document.createElement("table")
    table.className = "table table-hover table-sm table-dark"
    let tbody = document.createElement("tbody")
    
    for(let i=0; i<campos.length ;i++){
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        let textnode1 = document.createTextNode(`Campo: ${campos[i]}`)
        let td2 = document.createElement("td")
        let bytesOfLength = fields.find(el => el.field == campos[i] ).bytesOfLength
        let dots = ""
        if(bytesOfLength !=0){for(let i = 0 ; i<=bytesOfLength ; i++) dots+="."}
        let textnode21 = document.createTextNode(`Largo: `)
        let textnode22 = document.createTextNode(` ${dots}${fields.find(el => el.field == campos[i] ).length}`)
        let td3 = document.createElement("td")
        let textnode3 = document.createTextNode(`Character: ${fields.find(el => el.field == campos[i] ).characterType.toUpperCase()}`)
        let td4 = document.createElement("td")
        let textnode4 = document.createTextNode(`${fields.find(el => el.field == campos[i] ).description}`)
        
        
        td1.appendChild(textnode1)
        td2.appendChild(textnode21)
        td2.appendChild(textnode22)
        td3.appendChild(textnode3)
        td4.appendChild(textnode4)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tbody.appendChild(tr)
        table.appendChild(tbody)
        h3.appendChild(h3Text)
        div.appendChild(h3)
        div.appendChild(table)
        tablaCampos.appendChild(div)
    }
}
