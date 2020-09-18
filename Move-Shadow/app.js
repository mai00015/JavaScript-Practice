const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 450; // 100px

function shadow(e){
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;

  if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk /2));
  const yWalk = Math.round((y / height * walk) - (walk /2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 purple,
    ${xWalk * -1}px ${yWalk}px 0 orange,
    ${yWalk}px ${xWalk * -1}px 0 yellow,
    ${yWalk * -1}px ${xWalk}px 0 rgb(95, 85, 189)
  `;
}
hero.addEventListener('mousemove', shadow);
