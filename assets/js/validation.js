function submitForm() {
  $("#contact-form").validate();
  var values = $("#contact-form").serializeArray();
  console.log(values);
}