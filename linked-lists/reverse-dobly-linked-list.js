function reverse(head) {
    var cur = head
    var last, todo
    
    if (!cur || !cur.next)
      return cur

    while (cur.next.next) {
        todo = cur.next
        cur.next = cur.prev
        cur.prev = todo
        cur = todo
    }

    last = cur.next
    cur.next = cur.prev
    cur.prev = last
    last.next = cur

    return last
}
