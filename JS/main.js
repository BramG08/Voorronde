
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Bonsai Inside",
      image: "img/bonsai-inside.jpg",
      description: "Een modern interieurproject met natuurlijke elementen."
    },
    {
        title: "Bonsai Outside",
        image: "img/bonsai-outside.jpg",
        description: "Een tuinontwerp dat rust en harmonie uitstraalt."
    },

    {
      title: "The Hive Outside",
      image: "img/thehive-outside.jpg",
      description: "Strakke lijnen en duurzame materialen in deze villa."
    },
    {
      title: "The Hive Inside",
      image: "img/thehive-inside.jpg",
      description: "Een kantoorconcept met open ruimtes en veel licht."
    },
    {
        title: "Butterfly Outside",
        image: "img/bfly-outside.jpg",
        description: "Een speels en kleurrijk ontwerp voor een gezinswoning."
    },
    {   title: "Butterfly Inside",
        image: "img/bfly-inside.jpg",
        description: "Een interieur vol verrassende details en texturen."
    }
  ];

  const projectsList = document.getElementById("projects-list");
  const mainPhoto = document.getElementById("main-photo");

  projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-thumb" />
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    `;

    projectCard.addEventListener("click", () => {
      mainPhoto.src = project.image;
      mainPhoto.alt = project.title;
    });

    projectsList.appendChild(projectCard);
  });
});
