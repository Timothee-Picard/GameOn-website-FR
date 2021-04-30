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
        displayError(form.first, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.')
        state = false;
    }

    if(form.last.value == '') {
        displayError(form.last, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.')
        state = false;
    }

    if(form.email.value == '') {
        displayError(form.email, 'Veuillez renseigner un email.')
        state = false;
    }

    if(form.birthdate.value == '') {
        displayError(form.birthdate, 'Vous devez entrer votre date de naissance.')
        state = false;
    }

    if(form.quantity.value == '') {
        displayError(form.quantity, 'Veuillez entrer une valeur numérique comprise entre 0 et 99.')
        state = false;
    }

    if(state){
        //SUBMIT FORM
        console.log('SHOW MODAL')

    }
});

// FUNCTION ERROR
const displayError = function(element, message){
    let br = document.createElement("br");
    element.after(br);

    let div = document.createElement("div");
    let divContent = document.createTextNode(message);
    div.classList.add("error");
    div.appendChild(divContent)
    br.after(div);
}

// FUNCTIONS VALIDATION
const validFirst = function(inputFirst) {
    // LOCAL VAR
    let firstRegExp = /^[a-zA-Z][a-zA-Z]+$/;

    // TESTS
    if(!firstRegExp.test(inputFirst.value) && !inputFirst.value.length == '') {
        displayError(inputFirst, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
        return false;
    }
    else {
        return true;
    }
}

const validLast = function(inputLast) {
    // LOCAL VAR
    let lastRegExp = /^[a-zA-Z][a-zA-Z]+$/;
    
    // TESTS
    if(!lastRegExp.test(inputLast.value) && !inputLast.value.length == '') {
        displayError(inputLast, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
        return false;
    }
    else {
        return true;
    }
}

const validEmail = function(inputEmail) {
    // LOCAL VAR
    let emailRegExp = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}' , 'g');

    // TESTS
    if(!emailRegExp.test(inputEmail.value) && !inputEmail.value.length == '' ) {
        displayError(inputEmail, 'Veuillez entrer un email valide.')
        return false;
    }
    else {
        return true;
    }
}

const validBirthdate = function(inputBirthdate) {
    // LOCAL VAR
    let birthdateRegExp = /^\d{4}-\d{2}-\d{2}$/;

    // TESTS
    if(!birthdateRegExp.test(inputBirthdate.value) && !inputBirthdate.value.length == '') {
        displayError(inputLast, 'Vous devez entrer votre date de naissance.')
        return false;
    }
    else {
        return true;
    }
}

const validQuantity = function(inputQuantity) {
    // LOCAL VAR
    let emailRegExp = /^[0-9]{1,2}$/;

    // TESTS
    if(!emailRegExp.test(inputQuantity.value) && !inputQuantity.value.length == '') {
        displayError(inputQuantity,'Veuillez entrer une valeur numérique comprise entre 0 et 99.');
        return false;
    }
    else {
        return true;
    }
}

const validLocation = function(inputLocation) {
    // TESTS
    if(inputLocation.value == '') {
        displayError(inputLocation[inputLocation.length-1].nextElementSibling, 'Vous devez choisir une option.');
        return false;
    }
    else {
        return true;
    }
}

const validCgu = function(inputCgu) {
    // TESTS
    if(!inputCgu.checked){
        displayError(inputCgu.nextElementSibling, 'Vous devez vérifier que vous acceptez les termes et conditions.')
        return false;
    }
    else{
        return true;
    }
}