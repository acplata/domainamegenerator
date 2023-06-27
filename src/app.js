let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let browser = [`.com`,`.us`,`.org`,`.net`]

const parrafo = document.getElementById("domain");

for (let i = 0; i < pronoun.length; i++) { 
  for (let j = 0; j < adj.length; j++) {
      for (let a = 0; a < noun.length; a++) {
          for (let b = 0; b < browser.length; b++) {
              console.log(`${pronoun[i]}${adj[j]}${noun[a]}${browser[b]}`)
             }
         }
     }
  }