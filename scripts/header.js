const learnMore = document.getElementById("learnMore");
const myModal = document.getElementById("myModal");


function appealInfo() {
    let modalCreated = false

    learnMore.addEventListener("click", function () {
        if (myModal.classList.contains("active") == false){

            myModal.style.display = "flex"

            if (modalCreated === false){
                const div = document.createElement("div");
                const linkNewReleases = document.createElement("a");
                const linkBlogs = document.createElement("a");
                const linkNewsletters = document.createElement("a");
                const linkSocialMedia = document.createElement("a");

                div.id = "modal-content"

                aOptions(linkNewReleases, "New Releases", "https://www.nasa.gov/2025-news-releases/");
                aOptions(linkBlogs, "Blogs", "https://www.nasa.gov/nasa-blogs/");
                aOptions(linkNewsletters, "Newletters", "https://www.nasa.gov/newsletters/");
                aOptions(linkSocialMedia, "Social Media", "https://www.nasa.gov/social-media/");

                div.appendChild(linkNewReleases);
                div.appendChild(linkBlogs);
                div.appendChild(linkNewsletters);
                div.appendChild(linkSocialMedia);

                myModal.appendChild(div)
                modalCreated = true;
            }

            setTimeout(() => {
                 myModal.classList.add("active"); 
            }, 10);
        } else {
            myModal.style.display = "none"
            myModal.classList.remove("active")
        }
    })
}

function aOptions(constName, text, link){
    constName.textContent = text
    constName.setAttribute("href", link)
    constName.classList.add("aOptions");
    constName.setAttribute("target", "_blank");
}

appealInfo()