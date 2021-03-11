const getInputValue = () => {
    let bitmap = document.getElementById("bitmap").value.trim()

    console.log(fields)
    analizarBitmap(bitmap)
}


const analizarBitmap = (bitmap) => {
    
    removeAlert()

    let bitmapS = bitmap.split(' ')
    let bitmapPHS = document.getElementById("bitmap").placeholder.split(' ')  

    if(bitmapS.length == 8){
        let nBitmap = bitmapS.map(element => parseInt(element,16))

        showList(findFieldinBitmap(nBitmap))

        Alert("Calculo Exitoso!","","alert alert-success alert-dismissible")
    }else if(bitmap.length == 0){
        let nBitmap = bitmapPHS.map(element => parseInt(element,16))

        showList(findFieldinBitmap(nBitmap))

        Alert("Calculo Exitoso!","No ha ingresado un bitmap, se analizo el placeHolder","alert alert-warning alert-dismissible")
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