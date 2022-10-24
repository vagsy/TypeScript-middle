enum Status {
  OFFLINE,
  ONLINE,
  DELETED
} // 0, 1, 2

// enum Status {
//   OFFLINE = 1,
//   ONLINE,
//   DELETED
// } // 1, 2, 3

// enum Status {
//   OFFLINE,
//   ONLINE = 4,
//   DELETED
// } // 0, 4, 5

console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETED);

console.log(Status[0]);

// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2
// };

function getResult(status: number) {
  if (status === Status.OFFLINE) {
    return 'offline';
  } else if (status === Status.ONLINE) {
    return 'online';
  } else if (status === Status.DELETED) {
    return 'deleted';
  }
  return 'error';
}

const result = getResult(Status.OFFLINE);
console.log(result);
