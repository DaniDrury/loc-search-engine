// Because of similar elements on index and search-results pages -- ids have been specified using either 'index' or 'search'
let searchBtnIndex = document.getElementById('searchBtnIndex');
let searchBtnSearch = document.getElementById('searchBtnSearch');
let backBtn = document.getElementById('backBtn');
let topicTxt = document.getElementById('topicSpan');  // this needs the search topic value input into it so it will display in search-results.html <h2> element
// I'm also currently using this variable for the queryURL (topicTXT)
let searchTopicIndex = document.getElementById('searchTxtIndex');
let searchTopicSearch = document.getElementById('searchTxtSearch');
let selectFormatIndex = document.getElementById('formatSelectIndex');
let selectFormatSearch = document.getElementById('formatSelectSearch');
let searchResultsCont = document.getElementById('searchResults'); // container element within which dynamically created search result cards should be added
let formatType = 'search'; // default value for URL - this will get replaced if user selects a format option from dropdown


let queryURL = "https://www.loc.gov/" + formatType + "/?q=" + topicTxt + "&fo=json"
// uses var topicTxt for URL -- make sure to set this with searchTopicIndex or searchTopicSearch value prior to running fetch

searchBtnIndex.addEventListener("submit", function() {
    // user selected input (searchTopicIndex & selectFormatIndex) saved in variables
    // document.location changed to search results page
    // send fetch query to loc API then format responses and create card elements to dispaly results?
});

searchBtnSearch.addEventListener("submit", function() {
    // same as index but without the document.location switch
});

backBtn.addEventListener("submit", function() {
    // send user back to index.html
});
