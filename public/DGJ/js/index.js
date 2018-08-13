var c = document.querySelector('.c') /* canvas element */, 
    w /* canvas width */, h /* canvas height */,
    ctx = c.getContext('2d') /* canvas context */, 
    
    /* previous & current coordinates */
    x0, y0, x, y, 
    t = 0, t_step = 1/20, 
    tmp, 
    
    /* just me being lazy */
    exp = Math.exp, pow = Math.pow, sqrt = Math.sqrt, 
    PI = Math.PI, sin = Math.sin, cos = Math.cos;


/* FUNCTIONS */
/* a random number between min & max */
var rand = function(max, min) {
  var b = (max === 0 || max) ? max : 1, a = min || 0;
  
  return a + (b - a)*Math.random();
};

var trimUnit = function(input_str, unit) {
  return parseInt(input_str.split(unit)[0], 10);
};

var initCanvas = function() {
  var s = getComputedStyle(c);
  
  w = c.width = trimUnit(s.width, 'px');
  h = c.height = trimUnit(s.height, 'px');
};

var wave = function() {
  x0 = -1, y0 = h/2;
  
  ctx.clearRect(0, 0, w, h);
  
  tmp = pow(t, 1.75)/10; /* keep computation out of loop */
  
  for(x = 0; x < w; x = x + 3) {
    y = ( 7*sqrt(x)*sin(x/3/PI + t/3 + sin(x/6 + t)) + 8*sin(t)*cos(x/6 + t/1) +  8*cos(t)*sin(sqrt(x) ) + h/2)/6+18;
    
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x, y);
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#50e3c2';
    ctx.stroke();
    
    x0 = x;
    y0 = y;
  }
  
  
  
  t += t_step;
  
  requestAnimationFrame(wave);
};


/* START THE MADNESS */
setTimeout(function() {
  initCanvas();
  wave();
  
  /* fix looks on resize */
  addEventListener('resize', initCanvas, false);
}, 15);
