// https://leetcode.com/problems/palindrome-linked-list/description/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function isPalindrome(head: ListNode | null): boolean {
    let result: string = "";
    while (head) {
        result = result + String(head.val);
        head = head.next;
    }
    return result.split("").reverse().join("") === result;
};