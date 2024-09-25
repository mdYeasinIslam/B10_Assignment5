function getInputFieldByID(id) {
    const inputField = document.getElementById(id).value
    return parseFloat(inputField)
}
function getElement(id) {
    const element = document.getElementById(id).innerText
    return parseFloat(element)
}