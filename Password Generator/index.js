const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordLength = 15
let newPassword = ''
let newPassword2 = ''
let passwordContainer2 = document.getElementById('generated-password-container-2')






document.getElementById('generate-btn').addEventListener('click', function() {
   for (let i = 0; i < 15; i++) {
      const randomNum = Math.floor(Math.random() * characters.length)
      const randomChar = characters[randomNum]
      newPassword += randomChar.toString()
   }
   document.getElementById('generated-password-container-1').innerHTML = newPassword
   newPassword = ''
})


document.getElementById('generate-btn').addEventListener('click', function() {
   for (let j = 0; j < 15; j++) {
      const randomNum = Math.floor(Math.random() * characters.length)
      const randomChar = characters[randomNum]
      newPassword2 += randomChar.toString()
   }
   passwordContainer2.innerHTML = newPassword2
   newPassword2 = ''
})



// passwordContainer2.addEventListener('click', function() {
//       const range = document.createRange();
//         range.selectNode(passwordContainer2);
//         window.getSelection().removeAllRanges();
//         window.getSelection().addRange(range);
//         document.execCommand('copy');
//         window.getSelection().removeAllRanges();
      
// })



