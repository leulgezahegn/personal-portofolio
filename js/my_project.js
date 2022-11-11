
var see_more_content = document.querySelector('#see-more-content');
var isSeeMoreDisplay;
function show_see_more() {
    if(isSeeMoreDisplay == true) {
        see_more_content.style.display = "grid";
        return isSeeMoreDisplay = false;
    }
    else {
        see_more_content.style.display = "none";
        return isSeeMoreDisplay = true;
    }

}


