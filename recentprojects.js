const recentprojects = [
  {
    title: "Closet Organizer & Outfit Suggestion App",
    img: "assets/img/project-blog-logo.jpg",
    description: "An online closet app to manage outfits.",
    accomplishments: [
      "Tools: React, Django, Firebase, Python",
      "Helps users simplify outfit planning",
      "Upload clothing pictures, save outfits",
      "Filter by tags, color, or weather"
    ]
  },
  {
    title: "Library Database",
    img: "assets/img/project-library-logo.png",
    description: "Database for storing information on books and clients.",
    accomplishments: [
      "Tools: SQL",
      "Designed and implemented a book database"
    ]
  },
  {
    title: "Geographical Mapping System",
    img: "assets/img/project-quizup-logo-1.png",
    description: "A geographical mapping application in C++.",
    accomplishments: [
      "Utilizes the StreetsDatabase API, OSMDatabase API and Git for seamless integration.",
      "Uses Dijkstra and A* algorithms",
      "Smooth graphical interface with EZGL and GTK"
    ]
  },
  {
    title: "Bounzy Game",
    img: "assets/img/project-music-player.png",
    description: "A game based on the popular game 'Bounzy'.",
    accomplishments: [
      "Created in C for the DE1-SOC board",
      "Integrated hardware controls for smooth gameplay"
    ]
  }
];

let index = 0;
const projectcard = 1; // show 1 at a time

function loadProjects() {
  const container = document.getElementById("recent-projects");
  const nextProjects = recentprojects.slice(index, index + projectcard);

  nextProjects.forEach(project => {
    const projectHTML = `
      <div class="col s12 m6 l4">
        <div class="card medium">
          <div class="card-image">
            <img src="${project.img}" alt="${project.title}" style="height: 100%; width: 100%", class = "activator" />
          </div>
          <div class="card-content">
            <span class="card-title activator teal-text hoverline">${project.title}<i
                    class="mdi-navigation-more-vert right"></i></span>
            <p>${project.description}</p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
            <ul>
              ${project.accomplishments.map(item => `<li>${item}</li>`).join("")}
            </ul>
            
          </div>
        </div>
      </div>
    `;
    container.innerHTML += projectHTML;
  });

  index += projectcard;

  // Hide button if all projects are displayed
  if (index >= projects.length) {
    document.getElementById("loadbutton").style.display = "none";
  }
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  document.getElementById("loadbutton").addEventListener("click", loadProjects);
});

