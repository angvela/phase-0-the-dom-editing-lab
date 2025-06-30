// Grab the <body> element so we can attach everything there
const body = document.querySelector('body');

// 1️⃣ Add <h1>
const h1 = document.createElement('h1');
h1.textContent = 'My HTML adventure';
body.appendChild(h1);

// 2️⃣ Add <p> with <strong>, <em> and an <a> hyperlink
const p = document.createElement('p');

// Build inner HTML with emphasis and link
p.innerHTML = `
  We're writing <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> markup to display in our 
  <strong>browser</strong>. We're basically telling computers what to do. 
  <em>Neat!</em>
`;
body.appendChild(p);

// 3️⃣ Add <table> with header and body rows
const table = document.createElement('table');

// Header
const thead = document.createElement('thead');
thead.innerHTML = `
  <tr>
    <th>Element name</th>
    <th>Display value</th>
  </tr>
`;
table.appendChild(thead);

// Body
const tbody = document.createElement('tbody');
['h1', 'p', 'strong', 'em'].forEach(tag => {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  td1.textContent = tag;
  td2.textContent = (tag === 'h1' || tag === 'p') ? 'block' : 'inline';
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
});
table.appendChild(tbody);

// Append table to document
body.appendChild(table);
