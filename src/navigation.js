window.addEventListener('hashchange', navigator, false)
window.addEventListener("DOMContentLoaded", navigator, false);

function navigator() {
    console.log({ location })
    if (location.hash.startsWith("#trends")) {
        trendsPage()
    } else if (location.hash.startsWith("#search=")) {
        searchPage()
    } else if (location.hash.startsWith("#movie=")) {
        movieDetailsPage()
    } else if (location.hash.startsWith("#category=")) {
        categoriesPage()
    } else {
        homePage()
    }
    location.hash
}

function homePage() {
    console.log("home");
    getTrendingMoviesPreview();
    getCategegoriesPreview();
}

function categoriesPage() {
    console.log("categories");
}

function movieDetailsPage() {
    console.log("Movies ");
}

function searchPage() {
    console.log("Search ");
}

function trendsPage() {
    console.log("Trend");

}