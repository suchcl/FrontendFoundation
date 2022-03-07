$("#ajax").click(function () {
    $.ajax({
        url: "http://localhost:3000",
        success: function (result) {
            console.log(result);
        }
    });
});