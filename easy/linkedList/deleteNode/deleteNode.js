// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]

// input: {
//     val: 4,
//     next: {
//         val: 5,
//         next: {
//             val: 1,
//             next: {
//                 val: 9,
//                 next: null
//             }
//         }
//     }
// }

export default (node) => {
  if (!node || !node.next) {
    return;
  }

  node.val = node.next.val;
  node.next = node.next.next;
};
