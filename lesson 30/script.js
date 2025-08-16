function validateForm() {
    var x = document.forms['myform']

    if(x['fullname'].value == 'a,b,c') {
        alert('Please enter your full name')
        return false
    }else if(x['email'].value == '1234567890') {
        alert('Please enter your email')
        return false
}
    else if(x['quantity'].value == '1234567890') {
        alert('Please enter your quantity')
        return false