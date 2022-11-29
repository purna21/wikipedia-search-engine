// *** Api *** //
// let url = `https://apis.ccbp.in/wiki-search?search=Rahul`;


let searchInputEl = document.getElementById('search-field');
let searchBtnEl = document.getElementById('search-btn');


// ** 3rd step, create and append title element dynamically ** //
function createAndAppendResult(search_result) {
    let { title, link, description } = search_result;
    let resultContainerEl = document.querySelector('.result-container');

    // ** create and append title element dynamically ** //
    let headingEl = document.createElement('h1');
    headingEl.classList.add('result-title');
    let anchorEl = document.createElement('a');
    anchorEl.setAttribute('href', `${link}`);
    anchorEl.setAttribute('target', '_blank');
    anchorEl.textContent = title;

    headingEl.appendChild(anchorEl);
    resultContainerEl.appendChild(headingEl);


    // ** create and append link (anchor) element dynamically ** //
    let linkEl = document.createElement('a');
    linkEl.classList.add('result-link');
    linkEl.textContent = link;
    resultContainerEl.appendChild(linkEl);


    // ** create and append description (para) element dynamically ** //
    let descriptionEL = document.createElement('p');
    descriptionEL.classList.add('result-desc');
    descriptionEL.textContent = description;
    resultContainerEl.appendChild(descriptionEL);

}



// *** 2nd step, grabs all search results and send each result to another func as parameter
function displayResults(search_results) {

    for (let search_result of search_results) {
        createAndAppendResult(search_result);
    }
    // console.log(search_result)

}


// *** 1st step, fetches the api 
function searchWikipedia() {
    let searchInputValue = searchInputEl.value;
    let url = `https://apis.ccbp.in/wiki-search?search=${searchInputValue}`;
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let { search_results } = data;
            searchInputEl.value = '' // clears input field once, data fetched.
            displayResults(search_results);
        })
}

searchBtnEl.addEventListener('click', searchWikipedia);