function validateEmail(value) {
  var input = document.createElement('input');

  input.type = 'email';
  input.value = value;

  return typeof input.checkValidity == 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
}