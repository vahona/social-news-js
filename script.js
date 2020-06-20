// write your code here
console.log('it works!');

// List of link exsist in the web
    const listOfLinks = [{title:"Abuse",
    URL : "//http://adsksklll.com",
    author : "Terry"},
    {title : "Miserry",
    URL : "//http://mylife.com",
    author : "Deborah"},
    {title : "Thief",
    URL : "//http://police.com",
    author : "Bio"},
    {title : "Tricker",
    URL : "//http://sly.com",
    author : "Pio"},
    {title : "Trust 0",
    URL : "//http://trust.com",
    author : "Rao"}]
  

// This shows the menu of the web

const options = `Choose an option
 1: Show links 
 2: Add a link 
 3: Remove a link
 0: Quit`;

 let optionlist = Number(prompt(options));
// Function for structure 


const structureOfEachPage = () => {
  for(let i = 0; i < listOfLinks.length; i++){
    let possiblelinks =
    `Title : ${listOfLinks[i].title}
    URL : ${listOfLinks[i].URL}
    Author : ${listOfLinks[i].author}`;
    alert(possiblelinks);
  }
};
// Function for adding a new links
const addNewLinks = () => {
  const titlelinks = prompt("Give the title of your links");
  const urlOflinks = prompt("Give the url of your links");
  const authorOflinks = prompt("Who is the author of your links");
  let yourLink = {
    title: titlelinks,
    URL: urlOflinks,
    author: authorOflinks,
  };
  if(URL !== https && URL !== http){
    yourLink =(`//https: ${yourLink}`) 
  }
  listOfLinks.push(yourLink);
  return;

};
console.log(addNewLinks);

// Function if you want to quit the page
const Quit = () => {
  
}

// Function of deleting a number

switch (optionlist) {
  case 1:
    structureOfEachPage();
    break;
  case 2:
    addNewLinks();
    break;
  case 3: 
  let removeLink = Number(prompt(`Number of index you want to delete(1 to ${listOfLinks.length})`));
  let linkdeleted = listOfLinks.splice(removeLink , 1);
  alert(`you deleted ${linkdeleted[0].title}`);
    break;
  case 0:
     quit();
 
}
optionlist = Number(prompt(options));






  

