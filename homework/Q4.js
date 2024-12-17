// asel + bhaa halabi 
// קוד אשר מקבל מספר ידוע של קבצים מראש ולוקח מכל קובץ כמות שורות לפני הרצף משמע קובץ ראשון שורה אחת וכך האלה 
const fs = require('fs'); // Import Node.js core module
const path = require('path');
const dirPath = path.join(__dirname, '/text');

let temp = "";// string for output

for (let i = 1; i < 11; i++)
  {
  const textIn = fs.readFileSync(`${dirPath}/${i}.txt`, 'utf-8');
  const arr = textIn.split('\n');

  let n = 0;

  i > arr.length ? n = arr.length : n = i;
  
      for (let j = 0; j < n; j++){
          temp += arr[j] + "\r";
          console.log(temp);
          }
  }
fs.writeFileSync(`${dirPath}/output.txt`,temp);
