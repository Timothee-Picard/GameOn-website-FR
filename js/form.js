const form = document.querySelector('#formReserve');

// EVENTS
form.first.addEventListener('change', function() {
    validFirst(this);
});

form.last.addEventListener('change', function() {
    validLast(this);
});

form.email.addEventListener('change', function() {
    validEmail(this);
});

form.quantity.addEventListener('change', function() {
    validQuantity(this);
});

form.location.forEach(choice => 
    choice.addEventListener('change', function() {
        validLocation(this);
    })
);

form.cgu.addEventListener('change', function() {
    validCgu(this);
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validFirst(form.first)
    validLast(form.last)
    validEmail(form.email)
    validQuantity(form.quantity)
    validLocation(form.location)
    validQuantity(form.quantity)

    if(form.first.value == '') {
        let small = form.first.nextElementSibling;
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    }

    if(form.last.value == '') {
        let small = form.last.nextElementSibling;
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    }

    if(form.email.value == '') {
        let small = form.email.nextElementSibling;
        small.innerHTML = 'Veuillez renseigner un email.';
    }

    if(form.quantity.value == '') {
        let small = form.quantity.nextElementSibling;
        small.innerHTML = 'Veuillez entrer une valeur numérique comprise entre 0 et 99.';
    }

});




const validFirst = function(inputFirst) {
    let small = inputFirst.nextElementSibling;
    
    if(inputFirst.value.length < 2 && !inputFirst.value.length == '') {
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
        return false
    }
    else {
        small.innerHTML = '';
        return true
    }
}

const validLast = function(inputLast) {
    let small = inputLast.nextElementSibling;
    
    if(inputLast.value.length < 2 && !inputLast.value.length == '') {
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        return false
    }
    else {
        small.innerHTML = '';
        return true
    }
}

const validEmail = function(inputEmail) {
    let small = inputEmail.nextElementSibling;
    let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}' , 'g');

    if(!emailRegExp.test(inputEmail.value) && !inputEmail.value.length == '' ) {
        small.innerHTML = 'Veuillez entrer un email valide';
        return false
    }
    else {
        small.innerHTML = '';
        return true
    }
}

const validQuantity = function(inputQuantity) {
    let small = inputQuantity.nextElementSibling;

    let emailRegExp = /^[0-9]{1,2}$/;
    if(!emailRegExp.test(inputQuantity.value) && !inputQuantity.value.length == '') {
        small.innerHTML = 'Veuillez entrer une valeur numérique comprise entre 0 et 99';
        return false
    }
    else {
        small.innerHTML = '';
        return true
    }
}

const validLocation = function(inputLocation) {
    let small = document.querySelector('#location-small');
    if(inputLocation.value == '') {
        small.innerHTML = 'Vous devez choisir une option.';
        return false
    }
    else {
        small.innerHTML = ''
        return true
    }
}

const validCgu = function(inputCgu) {
    let small = document.querySelector('#cgu-small');
    //console.log(inputCgu.value)
    small.innerHTML = 'bb';
}