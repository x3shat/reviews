// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Susan Smith',
      job: 'Web Developer',
      img: 'assets/person1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'Anna Johnson',
      job: 'Web Designer',
      img: 'assets/person2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'Peter Jones',
      job: 'Intern',
      img: 'assets/person3.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'Bill Anderson',
      job: 'the boss',
      img: 'assets/person4.jpg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
 

const img=document.querySelector(".person-img");
const author=document.querySelector(".person-name");
const job=document.querySelector(".person-job");
const info=document.querySelector(".person-info");

const prev=document.querySelector(".btn-prev");
const next=document.querySelector(".btn-next");

// set starting item
let currentItem = 0;
const length= reviews.length;

// show person based on item index
function showPerson(index) {
  const item = reviews[index];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson(currentItem);
});

//previous 
prev.addEventListener('click', function () {
  if(currentItem===0){
    currentItem=length-1;
  } else {
    currentItem-=1;
  }
  // alternatively currentItem = (currentItem - 1 + length) % length;
 showPerson(currentItem);
});

//next 
next.addEventListener('click', function () {
  if(currentItem===length-1){
    currentItem=0;
  } else {
    currentItem+=1;
  }
  // alternatively currentItem = (currentItem + 1) % length;
  showPerson(currentItem);
});


