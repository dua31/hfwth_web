function Validator(selector) {
    var formElement = document.querySelector(selector);

    // define rules
    var validatorRules = {
        required: function(value) {
            return value ? undefined : `Vui lòng nhập trường này`
        },
        email: function(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return regex.test(value) ? undefined : `Trường này phải là email`
        },
        min: function(value) {
            return function(min) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
            }
        },
        confirm_password: function(value) {
            return function(isConfirmedValue) {
                return value === isConfirmedValue ? `` : `Mật khẩu nhập lại không đúng`
            }
        },
        mixAcc_email: function(value) {
            return value.length > 3 ? undefined : `asas`
        }
    };

    // // handle validate
    function validate(e) {
        var form_message = e.target.parentElement.querySelector(".form-message")
        var errorMessage;
        for (let i = 0; i < formRule[e.target.name].length; i++) {
            if (typeof formRule[e.target.name][i]() === "function") {

                if (e.target.name.toLowerCase() === "password") {
                    errorMessage = formRule[e.target.name][i](e.target.value)(minNumber)
                } else if (e.target.name.toLowerCase() === "password_confirmation") {
                    var passwordExits_Element = formElement.querySelector("input[name=password]")
                    errorMessage = formRule[e.target.name][i](e.target.value)(passwordExits_Element.value)
                }
            } else {
                errorMessage = formRule[e.target.name][i](e.target.value)
            }

            if (errorMessage) { break }
        }

        if (errorMessage) {
            form_message.innerText = errorMessage
            e.target.parentElement.classList.add("invalid")
        } else {
            form_message.innerText = ""
            e.target.parentElement.classList.remove("invalid")
        }
        return !errorMessage
    }

    //  Validate
    if (formElement) {
        var inputElement = formElement.querySelectorAll("input[name][rules]");
        var formRule = {}

        //Save `rule func` of every Input on formRule obj
        for (input of inputElement) {
            var rule = input.getAttribute("rules").split("|")

            for (var i = 0; i < rule.length; i++) {

                if (Array.isArray(formRule[input.name])) {
                    if (rule[i].includes(":")) {
                        formRule[input.name].push(validatorRules[rule[i].split(":")[0]])
                        var minNumber = rule[i].split(":")[1]

                    } else {
                        formRule[input.name].push(validatorRules[rule[i]])
                    }
                } else {
                    formRule[input.name] = [validatorRules[rule[i]]]
                }
            }
            // when blur
            input.onblur = function(e) {
                    validate(e)
                }
                // When oninput
            input.oninput = function(e) {
                var form_message = e.target.parentElement.querySelector(".form-message")

                form_message.innerText = ""
                e.target.parentElement.classList.remove("invalid")
            }
        }

        formElement.onsubmit = function(e) {
            e.preventDefault()
            var inputElement = formElement.querySelectorAll("input[name][rules]");
            let isFormValid = true;
            for (input of inputElement) {
                let isValid = validate({
                    target: input
                })
                if (!isValid) {
                    isFormValid = false;
                }
            }

            var enableInputs = formElement.querySelectorAll("[name]")
            let data = Array.from(enableInputs).reduce(function(value, input) {
                value[input.name] = input.value;
                return value
            }, {})

            if (isFormValid) {
                const modal_layout = $(".modal-layout.login");
                modal_layout.classList.add("close")
            }
        }
    }
}