const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
// clearBtn.addEventListener('click', runEvent);

// clearBtn.addEventListener('dblclick', runEvent);
//mouse Down
clearBtn.addEventListener('mousedown', runEvent);
//mouse Up
clearBtn.addEventListener('mouseup', runEvent);

//mouse enter and mouse leave(mouse over and mouse out) same work but mouse over and out work all over the page
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);

//mouse move
card.addEventListener('mousemove', runEvent);


//event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}