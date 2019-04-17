function insertNodeAtPosition(head, data, position) {
  var cur = head
  var newNode = new SinglyLinkedListNode(data)

  for (let i = 0 i < position-1 i++)
    if (cur.next)
      cur = cur.next

  newNode.next = cur.next
  cur.next     = newNode

  return head
}
