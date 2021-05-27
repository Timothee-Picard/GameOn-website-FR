const form = document.querySelector('#formReserve');
// INPUT LIST
const formContent = [
    {
        name: form.first,
        regexp: /^[a-zA-Z][a-zA-Z]+$/,
        message: "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
    },
    {
        name: form.last,
        regexp: /^[a-zA-Z][a-zA-Z]+$/,
        message: "Veuillez entrer 2 caractères ou plus pour le champ du nom."
    },
    {
        name: form.email,
        regexp: new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}' , 'g'),
        message: "Veuillez entrer un email valide."
    },
    {
        name: form.birthdate,
        regexp: /^\d{4}-\d{2}-\d{2}$/,
        message: "Vous devez entrer votre date de naissance au format jj/mm/aaa."
    },
    {
        name: form.quantity,
        regexp: /^[0-9]{1,2}$/,
        message: "Veuillez entrer une valeur numérique comprise entre 0 et 99."
    }
]

// EVENTS
formContent.forEach(input => 
    input.name.addEventListener('change', function(){
        if(!input.regexp.test(input.name.value) && !input.name.value.length == '') {
            displayError(input.name, input.message);
            return false;
        }
        else {
            dellError(input.name)
            return true;
        }
    })
);

form.location.forEach(choice => 
    choice.addEventListener('change', function() {
        validLocation(this);
    })
);

form.cgu.addEventListener('change', function() {
    validCgu(this);
});

// FUNCTION ERROR
const displayError = function(element, message){
    if(element.nextSibling.nextSibling && element.nextSibling.nextSibling.className == "error") {
        element.nextSibling.nextSibling.innerHTML = message
    }
    else {
        let br = document.createElement("br");
        element.after(br);
        let div = document.createElement("div");
        let divContent = document.createTextNode(message);
        div.classList.add("error");
        div.appendChild(divContent)
        br.after(div);
    }
}

const dellError = function(element){
    if(element.nextSibling.nextSibling && element.nextSibling.nextSibling.className == "error"){
        for (var i=0; i < 2; i++) element.nextSibling.remove();
    }
}

// EVENT SUBMIT FORM
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var state = true;
    
    (
        validLocation(form.location) && 
        validCgu(form.cgu)
    ) 
    ? state = true : state = false;

    // VERIFY USER WRITE SOMETHING
    formContent.forEach(function(input){
        if(input.name.value == ''){
            displayError(input.name, "Veuillez renseigner ce champ");
            state = false;
        }
    });

    if(state){
        console.log('SHOW MODAL')
        form.innerHTML = `<h2>Merci d'avoir soumis les détails de votre inscription</h2>
        <input class="btn-submit button" type="submit" value="Fermer" name="submit"/>`
    }
});

// FUNCTIONS VALIDATION

const validLocation = function(inputLocation) {
    // TESTS
    if(inputLocation.value == '') {
        displayError(inputLocation[inputLocation.length-1].nextElementSibling, 'Vous devez choisir une option.');
        return false;
    }
    else {
        dellError(form.location[form.location.length - 1].nextElementSibling)
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
        dellError(inputCgu.nextElementSibling)
        return true;
    }
}