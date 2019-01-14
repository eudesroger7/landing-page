function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  var re = /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/;
  return re.test(String(phone).toLowerCase());
}

function submitForm() {
  var form = $('#contact-form')[0];
  var name  = form.name, 
      email = form.email,
      phone = form.phone,
      occupation = form.occupation,
      investment_money = form.investment_money,
      city = form.city,
      neighborhood = form.neighborhood,
      message = form.message;

  if(name.value === "") {
    toastr['warning']('O campo nome é obrigatório!');
    return false; 
  }

  if(email.value === "") {
    toastr['warning']('O campo email é obrigatório!');
    return false; 
  } else if(!validateEmail(email.value)) {
    toastr['warning']('Digite um email válido!');
    return false;
  }

  if(phone.value === "") {
    toastr['warning']('O campo telefone é obrigatório!');
    return false; 
  } else if(!validatePhone(phone.value)) {
    toastr['warning']('Digite um telefone válido!');
    return false;
  }
  
  if(occupation.value === "") {
    toastr['warning']('O campo profissão é obrigatório!');
    return false; 
  }

  if(investment_money.value === "") {
    toastr['warning']('O campo Capital para investimento é obrigatório!');
    return false; 
  }

  if(city.value === "") {
    toastr['warning']('O campo cidade é obrigatório!');
    return false; 
  }

  if(neighborhood.value === "") {
    toastr['warning']('O campo bairro é obrigatório!');
    return false; 
  }
  
  if(message.value === "") {
    toastr['warning']('O campo mensagem é obrigatório!');
    return false; 
  }

  var values = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    occupation: occupation.value,
    investment_money: investment_money.value,
    city: city.value,
    neighborhood: neighborhood.value,
    message: message.value
  };

  toastr['success']('Formulário enviado com sucesso!');
};