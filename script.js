const GITHUB_REPOS = "https://api.github.com/users/kimpabooy/repos";

// Lägger till en händelsehanterare när hela dokumentet (HTML-dokumentet) lästs in.
document.addEventListener("DOMContentLoaded", function() {

//Ladda in arbetsplatser från JSON-fil
fetch("tidigare_arbete.json")
.then(response => response.json())
.then(data => {
    console.log(data)
    const container = document.querySelector(".grid-container");
    container.innerHTML = ""; // tömmer containern.
    data.forEach(job => {
        const article = document.createElement("article");
        const img = document.createElement("img");
        const p = document.createElement("p");
        
        // job = object i json-filen
        img.src = job.image;
        img.alt = `Image of ${job.company}'s logo`;
        p.classList.add("grid_text");
        p.textContent = job.description;
        container.appendChild(article);
        article.appendChild(img);
        article.appendChild(p);
    });
})
.catch(error => console.error("Fel vid hämtning av data:", error));


//Easteregg man ska knappa in.
let sequence = "";
const easterEggCode = "1337";
document.addEventListener("keydown", function (event) {
    sequence += event.key; // Lyssnar efter sekvensen "easterEggCode".
    console.log(sequence);
    if (sequence.includes(easterEggCode)) {
        showEasterEgg();
        sequence = ""; // Återställ sekvensen
    }
});

function showEasterEgg() {
    alert("Grattis! Du är nu en riktig hacker! 🕶️💻");
}

//Gömda Easteregg man ska trycka på.
const easter = document.getElementById("easterEgg");
easter.addEventListener("click", function() {
    document.querySelector("body").style.backgroundImage = "url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3pnNmVmanJpZml6NDFwbmgxZXhkdTJrZmRjYnU0ZWN1NHNkNGZ6ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fmkYSBlJt3XjNF6p9c/giphy.gif)";
})

//////////////////////////////////////////////////////////////////////////////////////////////////

//     //Hämtar mina GitHub-projekt.
//     const githubRepo = document.getElementById("wrapper");
//     githubRepo.innerHTML = "<p>Laddar projekt...</p>";
//     fetch(GITHUB_REPOS)
//     .then(response => response.json())
//     .then(repos => {
//         githubRepo.innerHTML = "";
//         console.log(repos);
//         repos.forEach(repo => {
//             githubRepo.innerHTML += `
//             <li>
//             <a class="button_open_modal_popup">${repo.name}</a>
//             <a class="button" href="${repo.html_url}" target="_blank">
//             ${repo.name}
//             </a>
//             <p>${repo.description || "Ingen beskrivning tillgänglig."}</p>
//             </li>
//             `;
//         });
//     })
//     .catch(error => {
//         githubRepo.innerHTML = "<p>Kunde inte ladda projekt.</p>";
//         console.error("Fel vid hämtning av GitHub-projekt:", error);
//     });
// });

// Github API call to get my public repositories
const githubRepo = document.getElementById("wrapper");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeButton = document.querySelector(".close-button");

// Adding a small loading indication if network is slow.
githubRepo.innerHTML = "<p>Laddar projekt...</p>";

fetch(GITHUB_REPOS)
    .then(response => response.json())
    .then(repos => {
        githubRepo.innerHTML = ""; // Rensa laddningsmeddelandet
        const ul = document.createElement("ul");
        ul.className = "handle_list_button";

        repos.forEach(repo => {
            const li = document.createElement("li");

            // button for modal
            const modalButton = document.createElement("button");
            modalButton.className = "button_open_modal_popup";
            modalButton.textContent = repo.name;
            
            // Show loading if button is clicked
            modalButton.addEventListener("click", () => {
                
                // Shows fake loadingscreen.
                modalTitle.textContent = "Laddar...";
                modalDescription.textContent = "Vänligen vänta, vi hämtar information...";
                modalLink.href = "#";
                modal.style.display = "block";
                
                setTimeout(() => {
                    modalTitle.textContent = repo.name;
                    modalDescription.textContent = repo.description || "Ingen beskrivning tillgänglig.";
                    modalLink.href = repo.html_url;
                }, 2000); // delay (ms)
            });

            li.appendChild(modalButton);
            ul.appendChild(li);
        });

        githubRepo.appendChild(ul);
    })
    .catch(error => {
        githubRepo.innerHTML = "<p>Kunde inte ladda projekt.</p>";
        console.error("Fel vid hämtning av GitHub-projekt:", error);
    });

// Stäng modalen när man klickar på X-knappen
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Alternativ stängning klicka utanför modulen för att stänga
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
});




/////////////////////////////////////////////////////////////////////////////////

// <button popovertarget="mydiv" popovertargetaction="show">${repo.name}</button>
    
    const hackerGif = document.getElementById("hacker");
    hackerGif.addEventListener("click", function(){
        document.querySelector("body").style.backgroundImage = "url(images/abstrakt-bakgrund.jpg)";
    });

    // // // 1. Ladda in arbetsplatser från JSON fil test
    //     fetch("tidigare_arbete.json")
    //         .then(response => response.json())
//         .then(data => {
    //             const container = document.querySelector(".grid-container");
    //             container.innerHTML = ""; // Rensa nuvarande innehåll
    //             data.forEach(job => {
        //                 container.innerHTML += `
        //                     <article>
        //                         <img class="job-logo" src="${job.image}" alt="Logo for ${job.company}">
        //                         <p class="grid_text">${job.description}</p>
        //                     </article>
        //                 `;
        //             });
//         })
//         .catch(error => console.error("Fel vid hämtning av jobbdata:", error));

////////////////////////////////////////////////////////////////////////////////