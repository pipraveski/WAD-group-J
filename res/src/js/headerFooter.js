class specialheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="heightCenter navtext">
            <a href="./index.html" class="nav">Home</a>
            <a> | </a>
            <a href="./addPage.html"class="nav">addPost</a>
        </div>
        <img src="res/images/defaultProfile.jpg" alt="pfp" class = "headerProf">
        `
    }   
}
class specialfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <p>copyright LOLOLOL</p>
        `
    }
}
customElements.define('special-header',specialheader)
customElements.define('special-footer',specialfooter)