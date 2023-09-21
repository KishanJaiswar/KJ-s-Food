var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", e => {
    e.preventDefault();
    fetch(form.action, {
        method: "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        Response => Response.json()
    ).then((html) => {
        //if you any to open any page after submitting the form
        //window.open("Thanks.html", "_blank");

    });
    //to reset the form after submitting
    form.reset();
});