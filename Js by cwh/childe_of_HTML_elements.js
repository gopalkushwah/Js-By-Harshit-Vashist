// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// const firstdiv = document.getElementById("first_div");
//if inside the html thier is any space between span and div tag it will retrun the nodeName as TEXT
// console.log(firstdiv.firstChild.nodeName);   // it will return SPAN if no space or enter between the span tag and starting of div tag  <div><span>
// console.log(firstdiv.lastChild.nodeName);   // it will return P if no space or enter between the paragraph tag and closing of div tag  </p></div>

// childNodes[0]  ---> it will access all child show it is slow then firstChild
// const secdiv = document.getElementById("sec_div");
// console.log(secdiv.childNodes[0].nodeName); //p
// console.log(secdiv.childNodes[0].nodeType); //1
// console.log(secdiv.childNodes[0].nodeValue); //null

// const secdiv = document.getElementById("sec_div");
// console.log(secdiv.childNodes[secdiv.childNodes.length-1].nodeName); //span
// console.log(secdiv.childNodes[secdiv.childNodes.length-1].nodeType); //1
// console.log(secdiv.childNodes[secdiv.childNodes.length-1].nodeValue); //null

// there is also a method elem.hasChildNodes[] to check whether there are any child nodes
// const secdiv = document.body.childNodes;
// console.log(secdiv);  // return - NodeList


// HOW TO CONVERT A NodeList INTO ARRAY
// const secdiv = document.body.childNodes;
// const arr = Array.from(secdiv);
// console.log(arr); //return - array

// ================================================ nextSibling and previousSibling ====================================
// const firstdiv = document.getElementById("first_div");
// const secdiv = document.getElementById("sec_div");
// console.log(firstdiv.nextSibling);  //RETURN - <div id="sec_div"><p>this is the paragraph tag 2</p><span>this is the span 2</span></div><span>this is the span 2</span></div>
// console.log(secdiv.previousSibling);  //RETURN - <div id="first_div"><p>this is the paragraph tag </p><span>this is the span 2</span></div><span>this is the span </span></div>


// ================================================ parentNode ====================================
// const firstdiv = document.getElementById("first_div");
// console.log(firstdiv.parentNode);  //RETURNS - body
// console.log(firstdiv.parentElement);  //RETURNS - body
// alert(firstdiv.parentNode);  //RETURNS - [object HTMLBodyElement]
// alert(firstdiv.parentElement);  //RETURNS - [object HTMLBodyElement]




