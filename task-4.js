
const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    const userInfo = {
        email: elements.email.value,
        password: elements.password.value,
    }
    console.log(userInfo);
    form.reset();

    // if (userInfo == "") {
    //             alert ( "All form fields must be filled in" );
                
    //     }
function validate_form (){
    valid = true;

        if ( document.form.email.password.value == "" )
        {
                alert ( "All form fields must be filled in" );
                valid = false;
        }

        return valid;
}
        
}

