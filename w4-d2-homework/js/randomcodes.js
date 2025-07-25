window.onload = function () {
    let generatedCode = "";
  
    function generateCode() {
        let code = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
        for (let i = 0; i < 8; i++) {
            code += str.charAt(Math.floor(Math.random() * str.length));
        }
        return code;
    }

    // generate and store the code
    generatedCode = generateCode();
    document.getElementById("codes").innerHTML = generatedCode;

    function disableButton(btnvalue) {
        const submitBtn = document.getElementById("submit");
        submitBtn.disabled = btnvalue;
        submitBtn.style.backgroundColor = btnvalue 
            ? "rgba(73, 119, 209, 0.3)" 
            : "rgba(73, 119, 209, 1)";
        submitBtn.style.color = btnvalue 
            ? "rgba(255, 255, 255, 0.5)" 
            : "rgba(255, 255, 255, 1)";
    }

    disableButton(true);

    const codebox = document.getElementById("codeentered");
    codebox.addEventListener("input", evaluateCode);

    function evaluateCode() {
        const entered = codebox.value.trim();
        if (entered === generatedCode) {
            disableButton(false);
            disableButton(true);
        }
    }
};
