const navbarIcon = document.querySelector("#navbar-icon");
navbarIcon.addEventListener("click", function () {
  const navbarGroup = document.querySelector("#navbar-group");
  navbarGroup.classList.toggle("navbar-group--close");
});

const navbarItems = document.querySelectorAll("#navbar-group li");

for (const item of navbarItems) {
  item.addEventListener("click", function () {
    const navbarGroup = document.querySelector("#navbar-group");
    navbarGroup.classList.add("navbar-group--close");
  });
}

const dataFakultas = [
  {
    fakultasName: "Fakultas Teknologi Mineral",
    prodiList: ["Teknik Geologi", "Teknik Geofisika"],
  },
  {
    fakultasName: "Fakultas Teknik Industri",
    prodiList: ["Teknik Informatika", "Teknik Industri", "Sistem  Informasi"],
  },
  {
      fakultasName : "Fakultas Teknik Sipil",
      prodiList: ["Teknik Sipil"]
  }
];

const container = document.querySelector('#fakultasList')
for (const fakultas of dataFakultas) {
    const h3 = document.createElement('h3');
    h3.innerText = fakultas.fakultasName;

    const ul = document.createElement('ul');
    for (const prodi of fakultas.prodiList) {
        const li = document.createElement('li');
        li.innerText = prodi

        ul.appendChild(li)
    }


    container.appendChild(h3); 
    container.appendChild(ul);
}  