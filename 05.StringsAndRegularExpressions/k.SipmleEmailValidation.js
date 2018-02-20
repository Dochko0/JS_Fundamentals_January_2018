function mailValidation(mail) {
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/
    if (regex.test(mail)){
        console.log('Valid');
    }else{
        console.log('Invalid');
    }
}
mailValidation('valid@email.bg')