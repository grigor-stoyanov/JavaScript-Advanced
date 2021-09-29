function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick)
   
   function onClick(ev) {
      document.getElementsByClassName('checkout')[0].addEventListener('click', checkout)
      if (ev.target.classList.contains('add-product') && ev.target.tagName == 'BUTTON') {
         const product = ev.target.parentNode.parentNode
         const name = product.querySelector('.product-title').textContent
         const price = product.querySelector('.product-line-price').textContent
         const cart = []
         cart.push({ name, price })
         const output = document.querySelector('textarea')
         output.value += `Added ${name} for ${price} to te cart.\n`
      }
      function checkout() {
         const products = new Set()
         cart.forEach(element => {
            products.add(element.name)
         })
         const totalPrice = cart.reduce((t, c) => t + c.price, 0)
         output.value += `You bought ${[...products.keys()].join(', ')} for ${totalPrice.toFixed(2)}`
      }
   }
   
}