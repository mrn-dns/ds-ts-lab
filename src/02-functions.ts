import { colleagues, friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
    f.age += 1
    return `${f.name} is now ${f.age}` 
}

function allOlder(f: Array<Friend>) : string[] {
    return f.map(friend => {
        friend.age += 1;
        return `${friend.name} is now ${friend.age}`
    })
}

console.log(allOlder(friends))
console.log(older(friends[0]))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));

  function addColleague(
    colleagues: Colleague[],
    name: string,
    department: string,
    email: string
  ): Colleague[] {
    
    const highestExtensionNumber = highestExtension(colleagues);
  
    const newColleague: Colleague = {
      name: name,
      department: department,
      contact: {
        email: email,
        extension: highestExtensionNumber.contact.extension + 1,
      },
    };
  
    colleagues.push(newColleague);

    return colleagues;
  }

  addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
  console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));