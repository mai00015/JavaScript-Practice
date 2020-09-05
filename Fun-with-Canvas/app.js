const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
// Make the line round
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

// Comment this one to become a normal one
ctx.globalCompositeOperation = 'lighten';
//////

let isDrawing = false;
// Coordinate of X and Y starting and ending
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
  if(!isDrawing) return; // Stop the function from running when they are not moused down

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // Start from
  ctx.moveTo(lastX, lastY);
  // Go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // Update the last mouse position
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if(hue >= 360) hue = 0;
  if(ctx.lineWidth >= 170 || ctx.lineWidth <= 1) direction = !direction;

  if(direction) ctx.lineWidth++;
  else ctx.lineWidth--;
}
canvas.addEventListener('mousedown', (e) =>{
  isDrawing = true; 
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
