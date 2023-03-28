const getInputById = (id) => {
    const inputField = document.getElementById(id)
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}
// ***** setItem and removeItem is (send and delete) name using in localStorage *****

document.getElementById('btn-send-name').addEventListener('click', function () {
    const sendName = getInputById('name-field')
    localStorage.setItem('name', sendName)
})
document.getElementById('btn-delete-name').addEventListener('click', function () {
    const deleteName = getInputById('name-field')
    localStorage.removeItem('name', deleteName);
})

// ***** setItem and removeItem is (send and delete) email using in localStorage *****

document.getElementById('btn-send-email').addEventListener('click', function () {
    const sendEmail = getInputById('email-field')
    localStorage.setItem('email', sendEmail)
})
document.getElementById('btn-delete-email').addEventListener('click', function () {
    const deleteEmail = getInputById('email-field')
    localStorage.removeItem('email', deleteEmail);
})

// ***** setItem and removeItem is (send and delete) message using in localStorage *****
document.getElementById('btn-send-message').addEventListener('click', function () {
    const sendMessage = getInputById('message-field')
    localStorage.setItem('message', sendMessage)
})
document.getElementById('btn-delete-message').addEventListener('click', function () {
    const deleteEmail = getInputById('message-field')
    localStorage.removeItem('message', deleteEmail);
})
// locale storage is All clear 
document.getElementById('btn-reset').addEventListener('click', function () {
    localStorage.clear()
})