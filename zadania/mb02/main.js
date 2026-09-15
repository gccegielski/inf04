const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let poprawne = true;

    document.querySelectorAll("p[id$='Error']").forEach(p => p.textContent = "");

    if (document.getElementById("imie").value.trim() === "") {
        document.getElementById("imieError").textContent = "Podaj imię";
        poprawne = false;
    }

    if (document.getElementById("email").value.trim() === "") {
        document.getElementById("emailError").textContent = "Podaj e-mail";
        poprawne = false;
    }

    if (document.getElementById("temat").value === "") {
        document.getElementById("tematError").textContent = "Wybierz temat";
        poprawne = false;
    }

    if (document.getElementById("wiadomosc").value.trim() === "") {
        document.getElementById("wiadomoscError").textContent = "Podaj wiadomość";
        poprawne = false;
    }

    if (poprawne) {
        form.style.display = "none";
        document.getElementById("sukces").textContent = "Dziękuję za wiadomość!";
    }
});
