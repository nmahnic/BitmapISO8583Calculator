const Alert = (strongText,text,boxName) => {

    let main = document.getElementById("main")
    
    let alertBox = document.createElement("div")
    let alertButton = document.createElement("button")
    let alertStrong = document.createElement("strong")
    let alertStrongText = document.createTextNode(strongText)
    let alertText = document.createTextNode(` ${text}`)
    let alertButtonText = document.createTextNode("X") 

    alertButton.onclick = function(){removeAlert()}
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

const removeAlert = () => {
    try{
        document.getElementById("alert").remove()
    }catch{
        null
    }
}
