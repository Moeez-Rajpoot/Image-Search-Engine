const input = document.getElementById('search-box');
const searchbtn = document.getElementById('Search-btn');
const display = document.getElementById('display');
const show = document.getElementById('more');
const accesskey = "Ye231JmnrvKeWozHoXo8RToWM51zD2MevZHfTT0qRfI";
let page = 1;
let keyword = "";

async function getimages(){


    let url =  `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&per_page=12&client_id=${accesskey}`;
    let response = await fetch(url);
    let data = await response.json();
    const results = data.results;
    results.map((results)=>{

        const img = document.createElement('img');
        img.src = results.urls.small;
        console.log(results.urls.small);
        const imglink = document.createElement('a');
        imglink.href = results.links.html;
        imglink.appendChild(img);
        imglink.target = "_blank";
        display.appendChild(imglink);

    })
}


searchbtn.addEventListener('click' ,(e)=>{

        display.innerHTML = '';
        page=1;
        keyword = input.value;
        getimages();
        show.style.display="block";

})

input.addEventListener('keypress' ,(e)=>{


    if (e.key === 'Enter') {

        display.innerHTML = '';
        page=1;
        keyword = input.value;
        getimages();
        show.style.display="block";
    }
})

show.addEventListener('click' , ()=>{

    page++;
    getimages();
})