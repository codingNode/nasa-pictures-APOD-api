const cardContainer = document.querySelector('.images-container');
const savedConfirm = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');
const resultNav = document.getElementById('resultsNav');
const favNav = document.getElementById('FavoritesNav');


const apiKey = 'DEMO_KEY';
const count = 10;
const apiUrl =`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultArr = [];
let favList = {};

function showContent()
{
    window.scrollTo({top:0, behavior: 'instant'});
    loader.classList.add('hidden')
}

async function getNasaAPOD()
{
    loader.classList.remove('hidden');
    try{
        const response = await fetch(apiUrl);
        resultArr = await response.json();
        updateDOM('results');
    }
    catch(err)
    {
        console.log(err);
    }
}

function saveFav(itemUrl)
{

    resultArr.forEach((item)=>{

        if(item.url === itemUrl && !favList[itemUrl])
        {
            favList[itemUrl] = item;
            savedConfirm.hidden = false;

            setTimeout(()=>{
                savedConfirm.hidden = true;
            }, 2000)
        }
    
    })

    localStorage.setItem('favorites', JSON.stringify(favList));
}

function removeFav(itemUrl)
{
    if(favList[itemUrl])
    {
        delete favList[itemUrl];
        localStorage.setItem('favorites', JSON.stringify(favList));
    }
    updateDOM('favorites');
}

function createCard(page)
{   
        const currentList = page === 'results' ? resultArr : Object.values(favList);

        currentList.forEach((item)=>{
        
        const card = document.createElement('div')
        card.classList.add('card');

        // link and Img
        const link = document.createElement('a');
        link.href = item.url;
        link.title = 'View Full Image';
        link.target ='_blank';

        const Img = document.createElement('img');
        Img.src = item.url;
        Img.alt = 'NASA Images';
        Img.loading = 'lazy';
        Img.classList.add('card-img-top');

        link.appendChild(Img)

        // card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
            // title
            const title = document.createElement('h5');
            title.classList.add('card-title');
            title.textContent = item.title;

            // Fav button/text
            const fav = document.createElement('p');
            const favIcon = document.createElement('i');
            fav.classList.add('clickable');
            if(page === 'results')
            {
                fav.textContent = 'Add to Favourites ';
                fav.setAttribute('onclick',`saveFav('${item.url}')`);
            }
            else
            {
                fav.textContent = 'Remove Favourites ';
                favIcon.classList.add('fa-solid', 'fa-heart');
                fav.setAttribute('onclick',`removeFav('${item.url}')`);
            }
            
            fav.appendChild(favIcon);

            // card text
            const text = document.createElement('p');
            text.classList.add('card-text');
            text.textContent = item.explanation;

            // footer
            const footer = document.createElement('small');
            footer.classList.add('text-muted');

            const date = document.createElement('strong');
            date.textContent = `${item.date} | `;

            const copyrightIcon = document.createElement('i');
            copyrightIcon.classList.add('fa-regular', 'fa-copyright');

            const copyright = document.createElement('span');
            copyright.textContent = item.copyright ? `  ${item.copyright}` : ` unknown`;
            copyright.style.fontFamily = 'Verdana'
            copyrightIcon.appendChild(copyright)

            footer.append(date,copyrightIcon);
        cardBody.append(title,fav,text,footer);
        card.append(link,cardBody)
        cardContainer.appendChild(card);
    })

}

function updateDOM(page)
{
    
    if(page === 'favorites' && localStorage.getItem('favorites'))
    {
        favList = JSON.parse(localStorage.getItem('favorites'))
        resultNav.classList.add('hidden');
        favNav.classList.remove('hidden');
    }
    if(page === 'results')
    {
        resultNav.classList.remove('hidden');
        favNav.classList.add('hidden'); 
    }
    cardContainer.textContent = '';
    createCard(page); 
    showContent();
}

getNasaAPOD();