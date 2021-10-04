error_msg = "";
valid = true;

function validate() {
    var email_address = document.getElementById("email");
    var phone_number = document.getElementById("phone");
    var x = document.getElementById("subject-txt").value;
    var y = document.getElementById("body-txt").value;

    if (!email_validation(email)) {
        error_msg += "email error!\n";
        valid = false;
    }
    if (!phone_num_validation(phone_number)) {
        error_msg += "phone number error!!\n";
        valid = false;
    }
    if (x == "" || x == null) {
        error_msg += "subject textbox error!!!\n";
        valid = false;
    }
    if (y == "" || y == null) {
        error_msg += "body textarea error!!!\n";
        valid = false;
    }

    if (valid) {
        alert('work')
    } else {
        alert(error_msg);
    }
}

function email_validation(input) {
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(input.value.match(mail_format)) {
    //alert("Valid email address!");
    return true;
    }
    return false;
}

function phone_num_validation(input) {
    var phone_num_format = /^\(?([976])\)?[-. ]?([0-9]{8})$/;
    var phone_num_format1 = /^(\d{8})$/;
    if(input.value.match(phone_num_format) || input.value.match(phone_num_format1)) {
        //alert("Valid phone number!")
        return true;
    }
    return false;   
}


