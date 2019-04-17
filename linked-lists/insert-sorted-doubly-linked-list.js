function sortedInsert(head, data) {

    var cur = head
    var newNode = new DoublyLinkedListNode(data)

    if (data < cur.data) {
        head.prev = newNode
        newNode.next = head
        return newNode
    }

    while (cur.next && (data > cur.next.data))
        cur = cur.next

    newNode.next = cur.next
    newNode.prev = cur.next
    cur.next = newNode

    return head
}
