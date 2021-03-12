const getInputValue = (id) => {
    let frame = document.getElementById(id).value.trim().split(' ')
    let framePH = document.getElementById(id).placeholder.split(' ') 

    let length = lengthChecker(frame)
    let lengthPH = lengthChecker(framePH)


    if(length == true){
        analizarBitmap(getBitmap(frame),true)
    }else if(!(frame.length != 1  && !length)){

        analizarBitmap(getBitmap(framePH),false)
    }else{
        lengthError()
    }   
}

const lengthError = () => {
    removeTable()
    removeAlert()
    Alert(
        "Mensaje ISO8583 invalido: ",
        "El largo de la trama no coincide con los bytes de largo",
        "alert alert-danger alert-dismissible"
    )
}

const lengthChecker = (frame) => {
    let lengthS = ""
    const lengthArray = frame.filter((el,i) => {if(i<2) return el})
    const length = frame.length - 2
    lengthArray.forEach(el => {lengthS += el});
    const nLength = parseInt(lengthS,16)
    
    return (length == nLength)
}

const getBitmap = (frame) => {
    return frame.filter((el,i) => {if(i>8 && i<=16) return el})
}

const toDo = (text) => {
    removeAlert()
    removeTable()
    Alert(
        `${text}:`,
        "No ha sido implementado aún",
        "alert alert-warning alert-dismissible"
    )
}

const analizarBitmap = (bitmapS,placeHolder) => {
    
    removeAlert()
    console.log(bitmapS)

    let nBitmap = bitmapS.map(element => parseInt(element,16))
    showList(findFieldinBitmap(nBitmap))

    if(placeHolder){
        Alert("Calculo Exitoso!","","alert alert-success alert-dismissible")
                
    }else{
        Alert("Calculo Exitoso!","No ha ingresado un bitmap, se analizo el placeHolder","alert alert-warning alert-dismissible")
    }
    
}

const findFieldinBitmap = (bitmap) => {
    let campos = []
    campos.push(bitmap.map((ele,i) => fieldsFilter(ele,i)))
    campos = campos.flat(2)
    console.log(campos)
    return campos
}

const fieldsFilter = (byte, i) => {
    let campos = []
    let ind = i*8
    
    if(byte & 0b10000000) campos.push(1+ind)
    if(byte & 0b01000000) campos.push(2+ind)
    if(byte & 0b00100000) campos.push(3+ind)
    if(byte & 0b00010000) campos.push(4+ind)
    if(byte & 0b00001000) campos.push(5+ind)
    if(byte & 0b00000100) campos.push(6+ind)
    if(byte & 0b00000010) campos.push(7+ind)
    if(byte & 0b00000001) campos.push(8+ind)

    return campos
}