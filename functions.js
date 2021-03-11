const listar = (campos) => {

   // console.log(campos)
    removeTable()

    let tablaCampos = document.getElementById("tablaCampos")
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    let h3Text = document.createTextNode("Campos: ")
    let table = document.createElement("table")
    let tbody = document.createElement("tbody")
    
    console.log(tablaCampos)
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


const calcularBitmap = () => {
    
    close()

    let bitmap = document.getElementById("bitmap").value.trim()
    let bitmapS = bitmap.split(' ')
    let bitmapPHS = document.getElementById("bitmap").placeholder.split(' ')  

    console.log(bitmap)
    console.log(bitmap.length)
    if(bitmapS.length == 8){
        let map = bitmapS.map(element => parseInt(element,16))

        let campos =[]
        campos.push(map.map((ele,i) => fieldsFilter(ele,i)))
        campos = campos.flat(2)

        listar(campos)
        myAlert("Calculo Exitoso!","","alert alert-success alert-dismissible")
    }else if(bitmap.length == 0){
        let map = bitmapPHS.map(element => parseInt(element,16))

        let campos =[]
        campos.push(map.map((ele,i) => fieldsFilter(ele,i)))
        campos = campos.flat(2)

        listar(campos)
        myAlert("Calculo Exitoso!","No ha ingresado un bitmap, se analizo el placeHolder","alert alert-warning alert-dismissible")
    }else{
        removeTable()
        myAlert("El valor ingresado no corresponde a un Bitmap ISO 8583","","alert alert-danger alert-dismissible")
    }
    
}

const fieldsFilter = (byte, i) => {
    let campos = []
    let ind = i*8
    console.log(`hola ${byte} ${ind}`)
    
    if(byte & 0b10000000) campos.push(1+ind)
    if(byte & 0b01000000) campos.push(2+ind)
    if(byte & 0b00100000) campos.push(3+ind)
    if(byte & 0b00010000) campos.push(4+ind)
    if(byte & 0b00001000) campos.push(5+ind)
    if(byte & 0b00000100) campos.push(6+ind)
    if(byte & 0b00000010) campos.push(7+ind)
    if(byte & 0b00000001) campos.push(8+ind)

    console.log(campos)
    return campos
}

const close = () => {
    try{
        document.getElementById("alert").remove()
    }catch{
        null
    }
}

const myAlert = (strongText,text,boxName) => {

    let main = document.getElementById("main")
    
    let alertBox = document.createElement("div")
    let alertButton = document.createElement("button")
    let alertStrong = document.createElement("strong")
    let alertStrongText = document.createTextNode(strongText)
    let alertText = document.createTextNode(` ${text}`)
    let alertButtonText = document.createTextNode("X") 

    alertButton.onclick = function(){close()}
    alertButton.className = "close"
    alertBox.className = boxName
    alertBox.id = "alert"

    alertButton.appendChild(alertButtonText)
    alertBox.appendChild(alertButton)
    alertStrong.appendChild(alertStrongText)
    alertBox.appendChild(alertStrong)
    alertBox.appendChild(alertText)
    main.insertBefore(alertBox, main.firstChild);
}

const removeTable = () => {
    try{
        let tablaCampos = document.getElementById("tablaCampos")
        tablaCampos.removeChild(tablaCampos.childNodes[0])
    }catch{
        null
    }
}