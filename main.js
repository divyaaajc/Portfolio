let people = ['divya', 'chris', 'riona', 'cameron'];
let randNum = Math.floor(Math.random() * people.length);
let randPeople = people[randNum];

let pair = function(arr) {
    let result = [];
    let recipients = arr.slice();
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      let sender = arr[i];		
      let recipientIndex = Math.floor(Math.random() * recipients.length);
      while (recipients[recipientIndex] === sender) {
       
        recipientIndex = Math.floor(Math.random() * recipients.length);
      }
      let recipient = recipients.splice(recipientIndex, 1)[0];
      result.push({
        sender: sender,
        receiver: recipient
      });
    }
    return result;
  };
  
  // 
  console.log(pair(people));
  


