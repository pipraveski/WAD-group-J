


// Function to load JSON data and create divs for each item
async function feedLoader(jsonUrl, parentDivId) {
    try {
        // Fetch JSON data from the provided URL
        const response = await fetch(jsonUrl);
        const data = await response.json();
        
        // Get the parent div where child divs will be created
        const parentDiv = document.getElementById(parentDivId);

        if (!parentDiv) {
            console.error(`Parent div with id '${parentDivId}' not found.`);
            return;
        }

        // Loop through each item in the JSON data
        data.posts.forEach((item) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("post");

            let imgElement = document.createElement("img");
            // Set attributes for the img element
            imgElement.src = item.profilePicture;       //profilePicture element from json file
            imgElement.alt = "pfp";
            imgElement.width = "auto";
            imgElement.style.height = "5%";
            imgElement.classList.add("postProf");
            // Append the img element to the target div
            itemDiv.appendChild(imgElement);
        
            let dateElement = document.createElement("a");
            // Set attributes for the img element
            dateElement.classList.add("postDate");
            dateElement.textContent = item.date;       //date element from json file
            // Append the img element to the target div
            itemDiv.appendChild(dateElement);

            let bodyElement = document.createElement("p");
            // Set attributes for the img element
            bodyElement.textContent = item.text;       //text element from json file
            // Append the img element to the target div
            itemDiv.appendChild(bodyElement);

            if (item.image != null) {
                let picElement = document.createElement("img");
                // Set attributes for the img element
                picElement.src = item.image;          //image element from json file
                picElement.alt = item.imageTextDescription;                                 //imageTextDescription
                picElement.classList.add("postImg");                    
                // Append the img element to the target div
                itemDiv.appendChild(picElement);
            }
            

            let br = document.createElement("br");
            itemDiv.appendChild(br);

            let likeElement = document.createElement("img");
            // Set attributes for the img element
            likeElement.src = "res/images/LikeButton.png";           //like button
            likeElement.alt = "like button";                                     
            likeElement.classList.add("likeButton");
            // Append the img element to the target div
            itemDiv.appendChild(likeElement);



        // Append the item div to the parent div
        parentDiv.appendChild(itemDiv);
        });
    } catch (error) {
        console.error("Error loading JSON data:", error);
    }
}

async function feedTester(parentDivId) {
    try {
        // Get the parent div where child divs will be created
        const parentDiv = document.getElementById(parentDivId);

        if (!parentDiv) {
            console.error(`Parent div with id '${parentDivId}' not found.`);
            return;
        }

        // Create a new div element for each item
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("post");

        let imgElement = document.createElement("img");
        // Set attributes for the img element
        imgElement.src = "res/images/defaultProfile.jpg";       //profilePicture element from json file
        imgElement.alt = "pfp";
        imgElement.width = "auto";
        imgElement.style.height = "5%";
        imgElement.classList.add("postProf");
        // Append the img element to the target div
        itemDiv.appendChild(imgElement);
        
        let dateElement = document.createElement("a");
        // Set attributes for the img element
        dateElement.classList.add("postDate");
        dateElement.textContent = "[Tester time]";       //date element from json file
        // Append the img element to the target div
        itemDiv.appendChild(dateElement);

        let bodyElement = document.createElement("p");
        // Set attributes for the img element
        bodyElement.textContent = "this is JS added message";       //text element from json file
        // Append the img element to the target div
        itemDiv.appendChild(bodyElement);

        let picElement = document.createElement("img");
        // Set attributes for the img element
        picElement.src = "res/images/LikeButton.png";           //image element from json file
        picElement.alt = "image";                                 //imageTextDescription
        picElement.classList.add("postImg");                    //TODO: add detector for if image exists
        // Append the img element to the target div
        itemDiv.appendChild(picElement);

        let br = document.createElement("br");
        itemDiv.appendChild(br);

        let likeElement = document.createElement("img");
        // Set attributes for the img element
        likeElement.src = "res/images/LikeButton.png";           //like button
        likeElement.alt = "like button";                                     
        likeElement.classList.add("likeButton");
        // Append the img element to the target div
        itemDiv.appendChild(likeElement);



        // Append the item div to the parent div
        parentDiv.appendChild(itemDiv);
    } catch (error) {
        console.error("Error loading tester:", error);
    }
}

// Run the function as soon as the DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    console.log("need to fix CORS issue before loading feed, fml ");
    console.log("have a tester for now");
    console.log("");
    feedTester('feed');
    //feedLoader('../json/posts.json', 'feed');             //uncomment when issue fixxed
});
