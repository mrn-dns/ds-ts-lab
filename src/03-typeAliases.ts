import { friends } from "./01-basics";
import {
  Administrator,
  Buddy,
  BuddyList,
  ColleagueV2,
  Friend,
} from "./myTypes";

const colleague1: ColleagueV2 = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: ColleagueV2 = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: ColleagueV2 = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

function makeBuddyList(
  name: string,
  buddies: Buddy[],
  admin?: Administrator
): BuddyList {
  return {
    name,
    members: buddies,
    administrator: admin,
  } as BuddyList;
  // The as operator above casts an object to a specific type.
}
// Tests for makeBuddyList
const myFootballBuddies = makeBuddyList(
  "Football team",
  [colleague1, friends[0], colleague2],
  colleague1
);

const myBandBuddies = makeBuddyList(
  "Band name",
  [colleague1, friends[1]]
  // No administrator
);

console.log(myFootballBuddies);
console.log(myBandBuddies);
//--------------------------------------
function findBuddyContact(list: BuddyList, name: string): string | undefined {
  for (const buddy of list.members) {
    if (buddy.name === name) {
      if ("phone" in buddy) {
        return buddy.phone;
      } else {
        return buddy.contact.email;
      }
    }
    return undefined;
  }
}
// Test for findBuddyContact.
console.log(
  "Contact buddy at: ",
  findBuddyContact(myFootballBuddies, "Ralph Graham")
);

function getBuddyListFriends(list: BuddyList): Friend[] {
  const friendsList = [];
  for (const buddy of list.members) {
    if ("phone" in buddy) friendsList.push(buddy as Friend);
  }
  return friendsList;
}

console.log("FRIENDS IN BUDDIES LIST:", getBuddyListFriends(myFootballBuddies));
