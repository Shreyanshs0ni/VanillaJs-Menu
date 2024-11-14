const menu = [{
    id: 1,
    title: "Samosa",
    category: "north",
    price: 40,
    img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Biryani",
    category: "south",
    price: 300,
    img: "https://plus.unsplash.com/premium_photo-1694141251673-1758913ade48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfDB8MHx8fDA%3D",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Kebabs",
    category: "north",
    price: 150,
    img: "https://images.unsplash.com/photo-1599307767316-776533bb941c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGZvb2R8ZW58MHwwfDB8fHww",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Dosa",
    category: "south",
    price: 80,
    img: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGluZGlhbiUyMGZvb2R8ZW58MHwwfDB8fHww",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Pav Bhaji",
    category: "north",
    price: 120,
    img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGluZGlhbiUyMGZvb2R8ZW58MHwwfDB8fHww",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "Kachori",
    category: "north",
    price: 30,
    img: "https://images.unsplash.com/photo-1616787700988-44c85b2ffcf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGluZGlhbiUyMGZvb2R8ZW58MHwwfDB8fHww",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Dhokla",
    category: "healthy",
    price: 50,
    img: "https://images.unsplash.com/photo-1714799263291-272975db795a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGluZGlhbiUyMGZvb2R8ZW58MHwwfDB8fHww",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Sabudana Khichdi",
    category: "healthy",
    price: 150,
    img: "https://images.unsplash.com/photo-1627035537727-96e5d592bbb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMGZvb2R8ZW58MHwwfDB8fHww",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "Curd Rice",
    category: "healthy",
    price: 90,
    img: "https://images.unsplash.com/photo-1633383718081-22ac93e3db65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGluZGlhbiUyMGZvb2R8ZW58MHwwfDB8fHww",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Sattu",
    category: "drink",
    price: 10,
    img: "https://milesnmeals.com/wp-content/uploads/2018/07/s3-e1531283595699.jpg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const section = document.querySelector(".section-center")
const btnSection = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu)
  displayMenuBtns()
})

function displayMenuItems(menuItems) {
  let displayContent = menuItems.map(function(item) {
    return `
     
      <article class = "menu-item">
        <img src =${item.img} class = "photo" alt = "menu item">
        <div class = "item-info">
        <header>
          <h4>
          ${item.title}
          </h4>
          <h4 class= "price">
          Rs. ${item.price}
          </h4>
        </header>
        <p class="item-text">
        ${item.desc}
        </p>
        
        </div>
      </article>
      
      </div>
      </div>
   `;
  })
  displayContent = displayContent.join("");
  section.innerHTML = displayContent;
}
function displayMenuBtns(){
const categories = menu.reduce(function(values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["all"]);
  const categoryBtns = categories.map(function(category) {
      return ` <button class="filter-btn" data-id = ${category} type = "button">
      ${category}
      </button>`
    })
    .join("");
  btnSection.innerHTML = categoryBtns;
  const filterBtn = document.querySelectorAll(".filter-btn")
  filterBtn.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      })
      if (category === "all")
        displayMenuItems(menu);
      else {
        displayMenuItems(menuCategory);
      }
    })
  })
}
