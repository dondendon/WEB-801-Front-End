window.onload = function () {
  function generateCode() {
    var code = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    for (var i = 0; i < 8; i++) {
      var charIndex = Math.floor(Math.random() * str.length);
      code += str.charAt(charIndex);
    }
    return code;
  }

  document.getElementById("codes").innerHTML = generateCode();

  function disableButton() {
      document.getElementById("submit").disabled = true;
  }

  disableButton();
};
