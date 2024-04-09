
function paragraph(element) {
    const array = element.innerText.split('')
    const special = ['~', '@', '!', '#', '$', '%', '^', '&', '*']
    const exception = [' ', '\n', '.', ',']
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  
    const numArray = []
    array.forEach(char => {
      const num = random(5, 40)
      numArray.push(num)
    })
  
    let completeCount
    let newText
    const timer = setInterval(() => {
      completeCount = 0
      newText = ''
      numArray.forEach((num, i) => {
        if (exception.includes(array[i]) || numArray[i] === 0) {
          newText += array[i]
          completeCount += 1
        } else {
          newText += special[numArray[i] % special.length]
          numArray[i] = --num
        }
      })
  
      element.innerText = newText
      if (completeCount === numArray.length) clearInterval(timer)
    }, 60)
  }
  
  const p = document.querySelector('p')
  paragraph(p)
  const h =document.querySelector('span')
  paragraph(h)


  
      
        
   

 
 