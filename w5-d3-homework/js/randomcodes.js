window.onload = function () {
    // ===== Random code (from your existing script) =====
    let generatedCode = "";
    function generateCode() {
        const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
        let code = '';
        for (let i = 0; i < 8; i++) {
            code += str.charAt(Math.floor(Math.random() * str.length));
        }
        return code;
    }
    generatedCode = generateCode();
    document.getElementById("codes").textContent = generatedCode;

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
    codebox.addEventListener("input", function () {
        disableButton(codebox.value.trim() !== generatedCode);
    });

    //-- New Input for w4-d3-homwork


    // Info box behavior for textarea
    const descriptionBox = document.getElementById("hear-about");
    const infoBox = document.getElementById("info-box");
    descriptionBox.addEventListener("focus", () => infoBox.style.display = "block");
    descriptionBox.addEventListener("blur", () => {
        if (descriptionBox.value.trim() === "") infoBox.style.display = "none";
    });

    //Dropdown extra input logic
    const selectMenu = document.getElementById("inquiry");
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const input3 = document.getElementById("input3");

    function hideAllInputs() {
        input1.style.display = "none";
        input2.style.display = "none";
        input3.style.display = "none";
    }
    hideAllInputs();

    selectMenu.addEventListener("change", function () {
        hideAllInputs();
        const selectedValue = selectMenu.value;
        if (selectedValue === "option1") input1.style.display = "block";
        else if (selectedValue === "option2") input2.style.display = "block";
        else if (selectedValue === "option3") input3.style.display = "block";
    });
};


//Updated w5-d3-homework, table selection display
$(document).ready(function () {
    // Add selectable class to all td except those with "Not Available"
    $("tbody td").each(function () {
        if ($(this).text().trim() !== "Not Available") {
            $(this).addClass("selectable");
        }
    });

    // When user clicks on a table cell
    $("tbody").on("click", "td.selectable", function () {
        const $cell = $(this);
        const activityName = $cell.text().trim();              // activity
        const colIndex = $cell.index();                        // which column
        const cliffName = $("thead th").eq(colIndex).text();   // cliff name
        const message = `My selected activities to enquire: is ${activityName} in ${cliffName}.`;

        // Highlight selected cell
        $cell.toggleClass("selected");

        if ($cell.hasClass("selected")) {
            $("#displaySelected").css("visibility", "visible").css("margin-top", "2em");
            $("#result").append(`<p>${message}</p>`);
        } else {
            $(`#result p:contains("${message}")`).remove();
            if ($("#result p").length === 0) {
                $("#displaySelected").css("visibility", "hidden").css("margin-top", "0");
            }
        }
    });
});
