const screenWidth = window.screen.width

let slider = document.querySelector('.slider'),
   innerSlider = document.querySelector('.slider-inner'),
   prassed = false,
   startx,
   x;

if (screenWidth > 768) {
   slider.addEventListener('mousedown', (e) => {
      prassed = true
      startx = e.offsetX - innerSlider.offsetLeft
      slider.style.cursor = 'grabbing'
   })
   slider.addEventListener('mouseenter', () => {
      slider.style.cursor = 'grab'
   })
   slider.addEventListener('mouseleave', () => {
      slider.style.cursor = 'default'
   })
   slider.addEventListener('mouseup', () => {
      slider.style.cursor = 'grab'
   })
   window.addEventListener('mouseup', () => {
      prassed = false
   })
   slider.addEventListener('mousemove', (e) => {
      if (!prassed) {
         return
      };
      e.preventDefault()
      x = e.offsetX

      innerSlider.style.left = `${x - startx}px`

      checkboundary()
   })

   function checkboundary() {
      let outer = slider.getBoundingClientRect()
      let inner = innerSlider.getBoundingClientRect()

      if (parseInt(innerSlider.style.left) > 0) {
         innerSlider.style.left = '0px'
      } else if (inner.right < outer.right) {
         innerSlider.style.left = `-${inner.width - outer.width}px`
      }
   }
} else {
   slider.style.overflow = 'scroll hidden'
}
