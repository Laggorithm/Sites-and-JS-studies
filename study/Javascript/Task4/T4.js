const form = document.getElementById("movies");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    resultsDiv.innerHTML = "";

    const showName = document.getElementById("query").value;

    fetch(`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error: " + response.status);
            }
            return response.json();
            })
            .then(data => {
                console.log(data);
                const article = document.createElement("article");
                const h2 = document.createElement("h2");
                    h2.classList.add("feature")
                    h2.textContent = data.name;

                    article.appendChild(h2);
                    const img = document.createElement("img");
                    img.src = data.image.medium ?? "https://placehold.co/210x295?text=Not%20Found";
                    article.appendChild (img);
                    for (const genre of data.genres) {
                        const p = document.createElement("p");
                        p.classList.add("feature");
                        p.textContent = genre;
                        article.appendChild(p);


                }   

                resultsDiv.appendChild(article);
            })
            .catch(error => {
                console.error(error);
            });
    });
