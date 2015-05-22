## Website Performance Optimization portfolio project

Here are the Steps I toke to optimize and enchance the performance of this portfolio.

### index.html, project-2048.html, project-mobile.html, project-webperf
- CSS files were minified and concatenated before being inlined (I only inlined css in index.hmtl) directly to the of the html file.
- Minified all images usging grunt imgmin
- Made all render blocking scripts async and moved Google Analatyics to the bottom of the page.
- Used Javascript to load google fonts and added it also at the bottom of thepage.


### Main.js
Optimized to resize pizzas in less than 1ms.
 Here are the changes applied to changePizzaSizes()
  - I used getElementsByClassName instead of queryElement.
  - Removed variables (newwidth and dx) outside the loop and assigned them a fixed value.
  - Removed variable outside the loop and assigned them a fixed value.
optimized to have a framerate of 60hz
Here are the changes applied to updatePositions()
 - Precalculated phase variables inside an array to avoid repeating the expansive calculation inside the loop
 - Replaced querySelectorAll  by document.getElementsByClassName to enhance performance.
I also changed the number of pizzas created when the page loads from 200 to autofill the screen depending on it's width.

More Details can be found in the documentation.
