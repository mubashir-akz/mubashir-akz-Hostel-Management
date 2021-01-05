function hello() {
    alert('hello')
}
function validatingCredentials1() {

    let password = document.getElementById('password').value
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    $.ajax({
        data:{
            password:password,
            name:name,
            email:email
        },
        method:'post',
        url:'/hostel/register'
    })
}