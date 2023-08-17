const input = document.getElementById('search-box');
const searchbtn = document.getElementById('Search-btn');
const displaydiv = document.getElementById('display');
const show = document.getElementById('more');


const accesskey = "Ye231JmnrvKeWozHoXo8RToWM51zD2MevZHfTT0qRfI";
let page = 1;
let keyword = "";




async function getimages(){


    let url =  `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}`;
    let response = await fetch(url);
    let data = response.json();

    console.log(data);
}


searchbtn.addEventListener('click' ,(e)=>{


    page=1;
    keyword = input.value;
    getimages();
    

})