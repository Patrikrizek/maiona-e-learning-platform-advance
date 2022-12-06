const footer = document.createElement("footer");
const currentYear = new Date().getFullYear();

footer.innerHTML = `
    <footer class="fixed-bottom" >
        <p class="text-center m-3">Copyright: ${currentYear} &copy; All rights reserved.</p>
    </footer >
`;

document.body.appendChild(footer);