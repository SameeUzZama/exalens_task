var blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];
var reqs = ["gym", "school", "store"];

function apartmentHunting(blocks, reqs) {
  let minDistance = Infinity;
  let optimalBlockIndex = -1;

  for (let i = 0; i < blocks.length; i++) {
    let maxDistance = 0;
    for (let j = 0; j < reqs.length; j++) {
      let req = reqs[j];
      let distance = findDistanceToReq(blocks, i, req);
      if (distance > maxDistance) {
        maxDistance = distance;
      }
    }
    if (maxDistance < minDistance) {
      minDistance = maxDistance;
      optimalBlockIndex = i;
    }
  }
  return optimalBlockIndex;
}

function findDistanceToReq(blocks, startIndex, req) {
  let left = startIndex - 1;
  let right = startIndex + 1;
  while (left >= 0 || right < blocks.length) {
    if (left >= 0 && blocks[left][req]) {
      return startIndex - left;
    }
    if (right < blocks.length && blocks[right][req]) {
      return right - startIndex;
    }
    left--;
    right++;
  }
  return Infinity;
}

let apartmentHuntingIndex = apartmentHunting(blocks, reqs);
console.log(
  apartmentHuntingIndex,
  "===> at index 3, the farthest you'd have to walk to reach a gym, a school, or a store is 1 block; at any other index, you'd have to walk farther"
);
