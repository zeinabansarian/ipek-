let searchBtnH = document.querySelector(".searchBtnH");
let searchContainer = document.querySelector(".searchContainer");
let closeSearch = document.querySelector(".closeSearch");
let searchFlag = true;
searchBtnH.addEventListener("click" , function (params) {
    if (searchFlag) {
        searchContainer.classList.add("activeSearchContainer")
        searchFlag= !searchFlag
    }
    else{
        
        searchContainer.classList.remove("activeSearchContainer")
        searchFlag= !searchFlag
    }
})

closeSearch.addEventListener("click" , function (params) {
    if (searchFlag) {
        searchContainer.classList.add("activeSearchContainer")
        searchFlag= !searchFlag
    }
    else{
        
        searchContainer.classList.remove("activeSearchContainer")
        searchFlag= !searchFlag
    }
})
