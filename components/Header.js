// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//

//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const Header = () => {
  // CREATE ELEMENTS, CLASSNAMES AND TEXTCONTENT
  const divHeader = document.createElement("div");
  divHeader.classList.add("header");

  const spanDate = document.createElement("span");
  spanDate.classList.add("date");
  spanDate.textContent = "March 28, 2020";

  const h1 = document.createElement("h1");
  h1.textContent = "Lambda Times";

  const spanTemp = document.createElement("span");
  spanTemp.classList.add("temp");
  spanTemp.textContent = 98;

  // APPEND CHILDREN
  divHeader.appendChild(spanDate);
  divHeader.appendChild(h1);
  divHeader.appendChild(spanTemp);

  return divHeader;
};
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());
