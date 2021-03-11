const getInputValue = (id) => {
    let frame = document.getElementById(id).value.trim().split(' ')
    let framePH = document.getElementById(id).placeholder.split(' ') 

    let bitmap = getBitmap(frame)
    let bitmapPH = getBitmap(framePH)
    // console.log(fields)
    analizarBitmap(bitmap,bitmapPH)
}

const getBitmap = (frame) => {
    console.log(frame)
    let bitmap = frame.filter((el,i) => {if(i>8 && i<=16) return el})
    console.log(bitmap)
    return bitmap
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

const analizarBitmap = (bitmapS,bitmapPHS) => {
    
    removeAlert()
    console.log(bitmapS)
    console.log(bitmapPHS)

    if(bitmapS.length == 8){
        let nBitmap = bitmapS.map(element => parseInt(element,16))
        
        Alert("Calculo Exitoso!","","alert alert-success alert-dismissible")
        showList(findFieldinBitmap(nBitmap))        
    }else if(bitmapS.length == 0){
        let nBitmap = bitmapPHS.map(element => parseInt(element,16))

        Alert("Calculo Exitoso!","No ha ingresado un bitmap, se analizo el placeHolder","alert alert-warning alert-dismissible")
        showList(findFieldinBitmap(nBitmap))

    }else{
        removeTable()
        Alert("El valor ingresado no corresponde a un Bitmap ISO 8583","","alert alert-danger alert-dismissible")
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