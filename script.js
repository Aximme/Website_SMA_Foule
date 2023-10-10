//JAVASCRIPT POUR CHANGEMENT SENS FLECHE POUR MENU DEROULANT
document.addEventListener("DOMContentLoaded", function () {
    const agentSections = document.querySelectorAll(".agent-section");

    agentSections.forEach(function (section) {
        const dropdown = section.querySelector(".dropdown");
        const arrow = section.querySelector(".arrow");
        const liste = section.querySelector(".liste");

        dropdown.addEventListener("click", () => {
            if (liste.style.display === "none" || liste.style.display === "") {
                liste.style.display = "block";
                arrow.textContent = "⬆️";
            } else {
                liste.style.display = "none";
                arrow.textContent = "⬇️";
            }
        });
    });
});
