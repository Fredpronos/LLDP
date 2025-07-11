document.addEventListener("DOMContentLoaded", () => {
  const joueurs = [
    { nom: "JoueurA", points: 500 },
    { nom: "JoueurB", points: 300 },
    { nom: "JoueurC", points: 150 },
    { nom: "JoueurD", points: 150 },
    { nom: "JoueurE", points: 50 },
    { nom: "JoueurF", points: 50 },
    { nom: "JoueurG", points: 10 },
    { nom: "JoueurH", points: 10 },
    { nom: "JoueurI", points: 10 },
    { nom: "JoueurJ", points: 10 },
    { nom: "JoueurZ", points: 5 },
  ];

  joueurs.sort((a, b) => b.points - a.points);

  const tbody = document.getElementById("classement");

  joueurs.forEach((joueur, index) => {
    const row = document.createElement("tr");
    if (index < 100) row.classList.add("qualifie");

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${joueur.nom}</td>
      <td>${joueur.points}</td>
    `;
    tbody.appendChild(row);
  });
});
