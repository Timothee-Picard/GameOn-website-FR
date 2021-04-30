const form = document.querySelector('#formReserve');

// EVENTS INPUT
form.first.addEventListener('change', function() {
    validFirst(this);
});

form.last.addEventListener('change', function() {
    validLast(this);
});

form.email.addEventListener('change', function() {
    validEmail(this);
});

form.birthdate.addEventListener('change', function() {
    validBirthdate(this);
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

// EVENT SUBMIT FORM
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let state = true;
    
    (
        validFirst(form.first) && 
        validLast(form.last) && 
        validEmail(form.email) && 
        validBirthdate(form.birthdate) && 
        validQuantity(form.quantity) && 
        validLocation(form.location) && 
        validQuantity(form.quantity) && 
        validCgu(form.cgu)
    ) 
    ? state = true : state = false;

    // VERIFY USER WRITE SOMETHING
    if(form.first.value == '') {
        let small = form.first.nextElementSibling;
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
        state = false;
    }

    if(form.last.value == '') {
        let small = form.last.nextElementSibling;
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        state = false;
    }

    if(form.email.value == '') {
        let small = form.email.nextElementSibling;
        small.innerHTML = 'Veuillez renseigner un email.';
        state = false;
    }

    if(form.birthdate.value == '') {
        let small = form.birthdate.nextElementSibling;
        small.innerHTML = 'Vous devez entrer votre date de naissance.';
        state = false;
    }

    if(form.quantity.value == '') {
        let small = form.quantity.nextElementSibling;
        small.innerHTML = 'Veuillez entrer une valeur numérique comprise entre 0 et 99.';
        state = false;
    }

    if(state){
        //SUBMIT FORM
        console.log('SHOW MODAL')

    }
});


// FUNCTIONS VALIDATION
const validFirst = function(inputFirst) {
    // LOCAL VAR
    let small = inputFirst.nextElementSibling;
    let firstRegExp = /^[a-zA-Z][a-zA-Z]+$/;

    // TESTS
    if(!firstRegExp.test(inputFirst.value) && !inputFirst.value.length == '') {
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
        return false;
    }
    else {
        small.innerHTML = '';
        return true;
    }
}

const validLast = function(inputLast) {
    // LOCAL VAR
    let small = inputLast.nextElementSibling;
    let lastRegExp = /^[a-zA-Z][a-zA-Z]+$/;
    
    // TESTS
    if(!lastRegExp.test(inputLast.value) && !inputLast.value.length == '') {
        small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.';
        return false;
    }
    else {
        small.innerHTML = '';
        return true;
    }
}

const validEmail = function(inputEmail) {
    // LOCAL VAR
    let small = inputEmail.nextElementSibling;
    let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}' , 'g');

    // TESTS
    if(!emailRegExp.test(inputEmail.value) && !inputEmail.value.length == '' ) {
        small.innerHTML = 'Veuillez entrer un email valide.';
        return false;
    }
    else {
        small.innerHTML = '';
        return true;
    }
}

const validBirthdate = function(inputBirthdate) {
    // LOCAL VAR
    let small = inputBirthdate.nextElementSibling;
    let birthdateRegExp = /^\d{4}-\d{2}-\d{2}$/;

    // TESTS
    if(!birthdateRegExp.test(inputBirthdate.value) && !inputBirthdate.value.length == '') {
        small.innerHTML = 'Vous devez entrer votre date de naissance.';
        return false;
    }
    else {
        small.innerHTML = '';
        return true;
    }
}

const validQuantity = function(inputQuantity) {
    // LOCAL VAR
    let small = inputQuantity.nextElementSibling;
    let emailRegExp = /^[0-9]{1,2}$/;

    // TESTS
    if(!emailRegExp.test(inputQuantity.value) && !inputQuantity.value.length == '') {
        small.innerHTML = 'Veuillez entrer une valeur numérique comprise entre 0 et 99.';
        return false;
    }
    else {
        small.innerHTML = '';
        return true;
    }
}

const validLocation = function(inputLocation) {
    // LOCAL VAR
    let small = document.querySelector('#location-small');

    // TESTS
    if(inputLocation.value == '') {
        small.innerHTML = 'Vous devez choisir une option.';
        return false;
    }
    else {
        small.innerHTML = '';
        return true;
    }
}

const validCgu = function(inputCgu) {
    // LOCAL VAR
    let small = document.querySelector('#cgu-small');

    // TESTS
    if(!inputCgu.checked){
        small.innerHTML = 'Vous devez vérifier que vous acceptez les termes et conditions.';
        return false;
    }
    else{
        small.innerHTML = '';
        return true;
    }
}