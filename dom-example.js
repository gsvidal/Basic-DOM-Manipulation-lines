//To manipulate an element inside the DOM, we first need to select it and store a reference to it inside a variable:
//Document.querySelector() is the recommended modern approach, which is convenient because it allows us to select elements using CSS selectors
const link = document.querySelector("a");

//Now we can start to manipulate it using properties and methods available to it(these are defined on interfaces like HTMLAnchorElement in the case of the <a> element, its more general parent interface HTMLElement, and Node-which represents all nodes in a DOM), first of all let's change the text inside the link by updating the value of the Node.textContent property:
link.textContent = "Mozilla Developer Network";

//The same with the url the link a is pointing to
link.href = "https://developer.mozilla.org";

//Creating and placing new nodes:
const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";
sect.appendChild(para);

const text = document.createTextNode(" - the premier source for web development.");
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

sect.appendChild(linkPara);

//Removing elements:
// sect.removeChild(linkPara);
// linkPara.remove();


//Manipulating styles

//Adding inline styles directly into elements ( in the DOM inspector will appear as inline styles in the html)
// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';

//There is another common way to dynamically manipulate styles on your document
para.setAttribute("class", "highlight");
