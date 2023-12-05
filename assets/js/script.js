// Because of similar elements on index and search-results pages -- ids have been specified using either 'index' or 'search'
let searchBtnIndex = document.getElementById('searchBtnIndex');
let searchBtnSearch = document.getElementById('searchBtnSearch');
let backBtn = document.getElementById('backBtn');
let topicTxt = document.getElementById('topicSpan');
let searchTopicIndex = document.getElementById('searchTxtIndex');
let searchTopicSearch = document.getElementById('searchTxtSearch');
let selectFormatIndex = document.getElementById('formatSelectIndex');
let selectFormatSearch = document.getElementById('formatSelectSearch');
let formatType; // this should equal the value chosen by user in the select input


let queryURL = "https://www.loc.gov/{endpoint}/?fo=json"
// above needs work - concatenate using variable (user selected) to structure API query

searchBtnIndex.addEventListener("submit", funciton() {
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
