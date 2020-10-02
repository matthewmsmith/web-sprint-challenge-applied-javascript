// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.



const cardsContainer = document.querySelector('.cards-container')

axios.get(`https://lambda-times-api.herokuapp.com/articles`).then(resp => {
  Object.keys(resp.data.articles).forEach(item => {
    resp.data.articles[item].forEach(articleItem => {
    cardsContainer.appendChild(articleCards(articleItem))
    })
})
}).catch(err => {
  console.log(`Encountered an error ${err}`);
}) 

  let articleCards = (article) => {

  const cardDiv = document.createElement('div');
  const headLineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const span = document.createElement('span');

  cardDiv.classList.add('card');
  headLineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');

  headLineDiv.textContent = `${article.headline}`;
  image.src = `${article.authorPhoto}`;
  span.textContent = `By ${article.authorName}`;

  cardDiv.appendChild(headLineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainer);
  imgContainer.appendChild(image);
 
  cardDiv.addEventListener('click', ()  => {
    console.log(headLineDiv.textContent)
  })



  return cardDiv;
}

