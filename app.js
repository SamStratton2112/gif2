// Attemp 1

const formBtn = document.querySelector('#btn');
formBtn.addEventListener('click', async function(e){
    e.preventDefault();
    let searchW= document.querySelector('#gifSrch');
    getGif(searchW);
    searchW='';
})

async function getGif(searchWord) {
    const results = await axios.get('https://api.giphy.com/v1/gifs/search',
        { params: { q: searchWord, api_key: 'PW91LGmcQlI4A6CcSONIG9J9l6JAO91B' } });
        console.log(results);
    let gifAmount = results.data.data.length;
    let num = (Math.floor(Math.random() * gifAmount));
    let gifAtIndx = results.data.data[num]
    console.log(gifAtIndx, num, gifAmount)
    createDiv(gifAtIndx);
    }

function createDiv(indx){
    const newGif= document.createElement('div');
    const img = document.createElement('img');
    let url = indx.url;
    img.setAttribute('src', url)
    newGif.appendChild(img);
    $('newGif').addClass('gif')
    $('#section').append(newGif)
}

$('#clearBtn').on('click', function (){
    $('.gif').remove();
})

// // Attempt 2
// const formBtn = document.querySelector('#btn');
// formBtn.addEventListener('click', async function(e){
//     e.preventDefault();
//     let searchW= document.querySelector('#gifSrch');
//     getGif(searchW);
//     searchW='';
// })


// async function getGif(searchWord){
//     const results= await axios.get('https://api.giphy.com/v1/gifs/search', 
//         {params: {q: searchWord, api_key:'PW91LGmcQlI4A6CcSONIG9J9l6JAO91B'}});
//         console.log(results);
//     let gifAmount = results.data.length;
//     let num = (Math.floor(Math.random* gifAmount));
//     let gifSrc = results.data[num]
//     const newGif= document.createElement('div');
//     const img = document.createElement('img');
//     let url = gifSrc.url;
//     img.setAttribute('src', url)
//     newGif.appendChild(img);
//     $('newGif').addClass('gif')
//     $('#section').append(newGif)
// }


// $('#clearBtn').on('click', function (){
//     $('.gif').remove();
// })

// I think I've got it but I need help getting to the URL. As of now 
// Change UL/LI to section and div 
