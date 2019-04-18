function findMergeNode(headA, headB) {

  let curA = headA, curB = headB

  while (curA !== curB) {

    if (curA.next)
      curA = curA.next
    else
      curA = headB

    if (curB.next)
      curB = curB.next
    else
      curB = headA
  }

  return curA.data
}
