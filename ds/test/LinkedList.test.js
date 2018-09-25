const assert = require('assert');
const ll =  require('../linked_lists/LinkedList');

describe('LinkedList', function() {
  describe('#insertFront()', function() {
    it('should be 4, 3, 2, 1, 0', function() {
      const testList = new ll.LinkedList();

      testList.insertFront(0);
      testList.insertFront(1);
      testList.insertFront(2);
      testList.insertFront(3);
      testList.insertFront(4);

      let curLink = testList.head;
      assert.equal(4, curLink.value);
      curLink = curLink.next;
      assert.equal(3, curLink.value);
      curLink = curLink.next;
      assert.equal(2, curLink.value);
      curLink = curLink.next;
      assert.equal(1, curLink.value);
      curLink = curLink.next;
      assert.equal(0, curLink.value);
    })
    it('head and tail should be 0', function() {
      const testList = new ll.LinkedList();

      testList.insertFront(0);
      let curLink = testList.head;
      assert.equal(0, curLink.value);
      curLink = testList.tail;
      assert.equal(0, curLink.value);
    })
  })

  describe('#insertBack()', function() {
    it('should be 0, 1, 2, 3, 4', function() {
      const testList = new ll.LinkedList();

      testList.insertBack(0);
      testList.insertBack(1);
      testList.insertBack(2);
      testList.insertBack(3);
      testList.insertBack(4);

      let curLink = testList.head;
      assert.equal(0, curLink.value);
      curLink = curLink.next;
      assert.equal(1, curLink.value);
      curLink = curLink.next;
      assert.equal(2, curLink.value);
      curLink = curLink.next;
      assert.equal(3, curLink.value);
      curLink = curLink.next;
      assert.equal(4, curLink.value);
    })
    it('head and tail should be 0', function() {
      const testList = new ll.LinkedList();

      testList.insertBack(0);
      let curLink = testList.head;
      assert.equal(0, curLink.value);
      curLink = testList.tail;
      assert.equal(0, curLink.value);
    })
  })

  describe('#remove()', function() {
    it('should do nothing', function() {
      const testList = new ll.LinkedList();

      testList.insertBack(0);
      testList.insertBack(1);
      testList.insertBack(2);
      testList.insertBack(3);
      testList.insertBack(4);

      testList.remove(5);

      let curLink = testList.head;
      assert.equal(0, curLink.value);
      curLink = curLink.next;
      assert.equal(1, curLink.value);
      curLink = curLink.next;
      assert.equal(2, curLink.value);
      curLink = curLink.next;
      assert.equal(3, curLink.value);
      curLink = curLink.next;
      assert.equal(4, curLink.value);
    })
    it('should remove 3', function() {
      const testList = new ll.LinkedList();

      testList.insertBack(0);
      testList.insertBack(1);
      testList.insertBack(2);
      testList.insertBack(3);
      testList.insertBack(4);

      testList.remove(3);

      let curLink = testList.head;
      assert.equal(0, curLink.value);
      curLink = curLink.next;
      assert.equal(1, curLink.value);
      curLink = curLink.next;
      assert.equal(2, curLink.value);
      curLink = curLink.next;
      assert.equal(4, curLink.value);
    })
    it('should only remove one/first instance of 3', function() {
      const testList = new ll.LinkedList();

      testList.insertBack(0);
      testList.insertBack(3);
      testList.insertBack(2);
      testList.insertBack(3);
      testList.insertBack(4);

      testList.remove(3);

      let curLink = testList.head;
      assert.equal(0, curLink.value);
      curLink = curLink.next;
      assert.equal(2, curLink.value);
      curLink = curLink.next;
      assert.equal(3, curLink.value);
      curLink = curLink.next;
      assert.equal(4, curLink.value);
    })
  })

  describe('#contains()', function() {
    it('should return false', function() {
      const testList = new ll.LinkedList();

      testList.insertBack(0);
      testList.insertBack(1);
      testList.insertBack(2);
      testList.insertBack(3);
      testList.insertBack(4);

      let testflag = testList.contains(5);
      assert.equal(testflag, false);
    })
    it('should return true', function() {
      const testList = new ll.LinkedList();

      testList.insertBack(0);
      testList.insertBack(1);
      testList.insertBack(2);
      testList.insertBack(3);
      testList.insertBack(4);

      let testflag = testList.contains(4);
      assert.equal(testflag, true);
      testflag = testList.contains(0);
      assert.equal(testflag, true);
      testflag = testList.contains(2);
      assert.equal(testflag, true);
    })
  })
})
