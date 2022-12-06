const navBar = document.createElement("nav");
navBar.classList.add("container-fluid", "m-2", "nav");

navBar.innerHTML = `
    <a class="nav-link" href="/index.html">Introduction</a>
    <a class="nav-link" href="/lesson-01/lesson-01.html">Lesson 01</a>
    <a class="nav-link" href="/lesson-02/lesson-02.html">Lesson 02</a>
`;

document.body.appendChild(navBar);