$(document).ready(function () {
    $("#taxForm").submit(function (event) {
        event.preventDefault();
        var income = parseFloat($("#income").val());
        var extraincome = parseFloat($("#extraincome").val());
        var age = $("#age").val();
        var deductions = parseFloat($("#deductions").val());

        // Clear previous errors
        $(".error-icon").hide();

        // Validate input fields
        var isValid = true;
        if (isNaN(income) || income <= 0) {
            $("#incomeErrorIcon").show();
            $("#incomeErrorTooltip").show();
            isValid = false;
        }
        if (isNaN(extraincome) || extraincome < 0) {
            $("#extraincomeErrorIcon").show();
            $("#extraincomeErrorTooltip").show();
            isValid = false;
        }
        if (isNaN(deductions) || deductions < 0) {
            $("#deductionsErrorIcon").show();
            $("#deductionsErrorTooltip").show();
            isValid = false;
        }
        if (age === "") {
            $("#ageErrorIcon").show();
            $("#ageErrorTooltip").show();
            isValid = false;
        }

        if (isValid) {
            // Calculate tax
            var totalIncome = income + extraincome - deductions;
            var tax = 0;
            if (totalIncome > 800000) {
                if (age === "<40") {
                    tax = 0.3 * (totalIncome - 800000);
                } else if (age === ">=40&<60") {
                    tax = 0.4 * (totalIncome - 800000);
                } else if (age === ">=60") {
                    tax = 0.1 * (totalIncome - 800000);
                }
            }

            // Display result in modal
            displayModal(tax);
        }
    });

    // Close modal
    $(".close").click(function () {
        $("#modal").hide();
    });

    $(window).click(function (event) {
        if (event.target == $("#modal")[0]) {
            $("#modal").hide();
        }
    });
});

function displayModal(tax) {
    var modalResult = $("#modalResult");
    modalResult.html("Tax: ₹" + tax.toFixed(2) + " Lakhs");
    $("#modal").show();
}

// tooltip content hovering effect code
$(document).ready(function () {
    $('.question-mark').on('mouseover', function () {
        $(this).next('.tooltip-content').show();
    }).on('mouseout', function () {
        $(this).next('.tooltip-content').hide();
    });
});


$(document).ready(function () {
    $('#income').on('input', function () {
        var inputValue = $(this).val();
        if (isNaN(inputValue)) {
            $('#incomeErrorIcon').show();
            $('#incomeErrorTooltip').text('Please enter numbers only');
        } else {
            $('#incomeErrorIcon').hide();
            $('#incomeErrorTooltip').text('');
        }
    });
});


$(document).ready(function () {
    $('#extraincome').on('input', function () {
        var inputValue = $(this).val();
        if (isNaN(inputValue)) {
            $('#extraincomeErrorIcon').show();
            $('#extraincomeErrorTooltip').text('Please enter numbers only');
        } else {
            $('#extraincomeErrorIcon').hide();
            $('#extraincomeErrorTooltip').text('');
        }
    });
});


$(document).ready(function () {
    $('#deductions').on('input', function () {
        var inputValue = $(this).val();
        if (isNaN(inputValue)) {
            $('#deductionsErrorIcon').show();
            $('#deductionsErrorTooltip').text('Please enter numbers only');
        } else {
            $('#deductionsErrorIcon').hide();
            $('#deductionsErrorTooltip').text('');
        }
    });
});
