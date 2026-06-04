import jsIcon from "/javascript.png";
import pyIcon from "/python.png";
import javaIcon from "/java.png";

export const LANGUAGE_CONFIG = {
  javascript: { name: "JavaScript", value: "javascript", icon: jsIcon, monaco: "javascript" },
  python: { name: "Python", value: "python", icon: pyIcon, monaco: "python" },
  java: { name: "Java", value: "java", icon: javaIcon, monaco: "java" },
};

export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Arrays",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers that add up to target. You may assume that each input has exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    },
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0, 1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1, 2]" },
      { input: "nums = [3,3], target = 6", output: "[0, 1]" },
    ],
    constraints: ["2 ≤ nums.length ≤ 10^4", "-10^9 ≤ nums[i] ≤ 10^9", "-10^9 ≤ target ≤ 10^9", "Only one valid answer exists"],
    starterCode: {
      javascript: `function twoSum(nums, target) {\n  // Write your code here\n  \n}\n\n// Test cases\nconsole.log(JSON.stringify(twoSum([2,7,11,15], 9)));\nconsole.log(JSON.stringify(twoSum([3,2,4], 6)));\nconsole.log(JSON.stringify(twoSum([3,3], 6)));`,
      python: `def two_sum(nums, target):\n    # Write your code here\n    pass\n\n# Test cases\nprint(two_sum([2,7,11,15], 9))\nprint(two_sum([3,2,4], 6))\nprint(two_sum([3,3], 6))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(Arrays.toString(s.twoSum(new int[]{2,7,11,15}, 9)));\n        System.out.println(Arrays.toString(s.twoSum(new int[]{3,2,4}, 6)));\n        System.out.println(Arrays.toString(s.twoSum(new int[]{3,3}, 6)));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "palindrome-number": {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    category: "Math",
    description: {
      text: "Given an integer x, return true if x is a palindrome, and false otherwise. An integer is a palindrome when it reads the same forward and backward.",
    },
    examples: [
      { input: "x = 121", output: "true" },
      { input: "x = -121", output: "false" },
      { input: "x = 10", output: "false" },
    ],
    constraints: ["-2^31 ≤ x ≤ 2^31 - 1"],
    starterCode: {
      javascript: `function isPalindrome(x) {\n  // Write your code here\n  \n}\n\n// Test cases\nconsole.log(isPalindrome(121));\nconsole.log(isPalindrome(-121));\nconsole.log(isPalindrome(10));`,
      python: `def is_palindrome(x):\n    # Write your code here\n    pass\n\n# Test cases\nprint(is_palindrome(121))\nprint(is_palindrome(-121))\nprint(is_palindrome(10))`,
      java: `public class Solution {\n    public boolean isPalindrome(int x) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.isPalindrome(121));\n        System.out.println(s.isPalindrome(-121));\n        System.out.println(s.isPalindrome(10));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\nfalse",
      python: "True\nFalse\nFalse",
      java: "true\nfalse\nfalse",
    },
  },

  "roman-to-integer": {
    id: "roman-to-integer",
    title: "Roman to Integer",
    difficulty: "Easy",
    category: "Math",
    description: {
      text: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
    },
    examples: [
      { input: "s = 'III'", output: "3" },
      { input: "s = 'LVIII'", output: "58" },
      { input: "s = 'MCMXCIV'", output: "1994" },
    ],
    constraints: ["1 ≤ s.length ≤ 15", "s contains only the characters (I, V, X, L, C, D, M)"],
    starterCode: {
      javascript: `function romanToInt(s) {\n  // Write your code here\n  \n}\n\n// Test cases\nconsole.log(romanToInt('III'));\nconsole.log(romanToInt('LVIII'));\nconsole.log(romanToInt('MCMXCIV'));`,
      python: `def roman_to_int(s):\n    # Write your code here\n    pass\n\n# Test cases\nprint(roman_to_int('III'))\nprint(roman_to_int('LVIII'))\nprint(roman_to_int('MCMXCIV'))`,
      java: `public class Solution {\n    public int romanToInt(String s) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println(sol.romanToInt("III"));\n        System.out.println(sol.romanToInt("LVIII"));\n        System.out.println(sol.romanToInt("MCMXCIV"));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3\n58\n1994",
      python: "3\n58\n1994",
      java: "3\n58\n1994",
    },
  },

  "longest-common-prefix": {
    id: "longest-common-prefix",
    title: "Longest Common Prefix",
    difficulty: "Easy",
    category: "Strings",
    description: {
      text: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
    },
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""' },
    ],
    constraints: ["1 ≤ strs.length ≤ 200", "0 ≤ strs[i].length ≤ 200", "strs[i] consists of lowercase English letters"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {\n  // Write your code here\n  \n}\n\n// Test cases\nconsole.log(longestCommonPrefix(["flower","flow","flight"]));\nconsole.log(longestCommonPrefix(["dog","racecar","car"]));`,
      python: `def longest_common_prefix(strs):\n    # Write your code here\n    pass\n\n# Test cases\nprint(longest_common_prefix(["flower","flow","flight"]))\nprint(longest_common_prefix(["dog","racecar","car"]))`,
      java: `public class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.longestCommonPrefix(new String[]{"flower","flow","flight"}));\n        System.out.println(s.longestCommonPrefix(new String[]{"dog","racecar","car"}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "fl\n",
      python: "fl\n",
      java: "fl\n",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. A string is valid if: (1) Open brackets must be closed by the same type of brackets, (2) Open brackets must be closed in the correct order.",
    },
    examples: [
      { input: "s = '()'", output: "true" },
      { input: "s = '()[]{}'", output: "true" },
      { input: "s = '(]'", output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10^4", "s consists of parentheses characters only"],
    starterCode: {
      javascript: `function isValid(s) {\n  // Write your code here\n  \n}\n\n// Test cases\nconsole.log(isValid('()'));\nconsole.log(isValid('()[]{}'));\nconsole.log(isValid('(]'));`,
      python: `def is_valid(s):\n    # Write your code here\n    pass\n\n# Test cases\nprint(is_valid('()'))\nprint(is_valid('()[]{}'))\nprint(is_valid('(]'))`,
      java: `public class Solution {\n    public boolean isValid(String s) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println(sol.isValid("()"));\n        System.out.println(sol.isValid("()[]{}"));\n        System.out.println(sol.isValid("(]"));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    description: {
      text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    },
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" },
      { input: "list1 = [], list2 = []", output: "[]" },
      { input: "list1 = [], list2 = [0]", output: "[0]" },
    ],
    constraints: ["0 ≤ number of nodes ≤ 50", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `function ListNode(val, next) {\n  this.val = (val===undefined ? 0 : val);\n  this.next = (next===undefined ? null : next);\n}\n\nfunction mergeTwoLists(list1, list2) {\n  // Write your code here\n  \n}\n\n// Helper to build list\nfunction arrToList(arr) {\n  let dummy = new ListNode();\n  let cur = dummy;\n  for (let v of arr) { cur.next = new ListNode(v); cur = cur.next; }\n  return dummy.next;\n}\nfunction listToArr(head) {\n  let res = [];\n  while (head) { res.push(head.val); head = head.next; }\n  return res;\n}\n\n// Test cases\nconsole.log(JSON.stringify(listToArr(mergeTwoLists(arrToList([1,2,4]), arrToList([1,3,4])))));\nconsole.log(JSON.stringify(listToArr(mergeTwoLists(arrToList([]), arrToList([])))));\nconsole.log(JSON.stringify(listToArr(mergeTwoLists(arrToList([]), arrToList([0])))));`,
      python: `class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef merge_two_lists(list1, list2):\n    # Write your code here\n    pass\n\n# Helper\ndef arr_to_list(arr):\n    dummy = ListNode()\n    cur = dummy\n    for v in arr:\n        cur.next = ListNode(v)\n        cur = cur.next\n    return dummy.next\n\ndef list_to_arr(head):\n    res = []\n    while head:\n        res.append(head.val)\n        head = head.next\n    return res\n\n# Test cases\nprint(list_to_arr(merge_two_lists(arr_to_list([1,2,4]), arr_to_list([1,3,4]))))\nprint(list_to_arr(merge_two_lists(arr_to_list([]), arr_to_list([]))))\nprint(list_to_arr(merge_two_lists(arr_to_list([]), arr_to_list([0]))))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public static class ListNode {\n        int val;\n        ListNode next;\n        ListNode() {}\n        ListNode(int val) { this.val = val; }\n        ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n    }\n\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        // Write your code here\n        \n    }\n\n    static ListNode arrToList(int[] arr) {\n        ListNode dummy = new ListNode();\n        ListNode cur = dummy;\n        for (int v : arr) { cur.next = new ListNode(v); cur = cur.next; }\n        return dummy.next;\n    }\n\n    static String listToStr(ListNode head) {\n        List<Integer> res = new ArrayList<>();\n        while (head != null) { res.add(head.val); head = head.next; }\n        return res.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(listToStr(s.mergeTwoLists(arrToList(new int[]{1,2,4}), arrToList(new int[]{1,3,4}))));\n        System.out.println(listToStr(s.mergeTwoLists(arrToList(new int[]{}), arrToList(new int[]{}))));\n        System.out.println(listToStr(s.mergeTwoLists(arrToList(new int[]{}), arrToList(new int[]{0}))));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]\n[]\n[0]",
      python: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
      java: "[1, 1, 2, 3, 4, 4]\n[]\n[0]",
    },
  },

  "remove-duplicates": {
    id: "remove-duplicates",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    category: "Arrays",
    description: {
      text: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Return the number of unique elements in nums.",
    },
    examples: [
      { input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" },
      { input: "nums = [0,0,1,1,1,2,2,3,3,4]", output: "5, nums = [0,1,2,3,4,_,_,_,_,_]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 3 * 10^4", "-100 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function removeDuplicates(nums) {\n  // Write your code here\n  \n}\n\n// Test cases\nlet nums1 = [1,1,2];\nlet k1 = removeDuplicates(nums1);\nconsole.log(k1, nums1.slice(0, k1));\n\nlet nums2 = [0,0,1,1,1,2,2,3,3,4];\nlet k2 = removeDuplicates(nums2);\nconsole.log(k2, nums2.slice(0, k2));`,
      python: `def remove_duplicates(nums):\n    # Write your code here\n    pass\n\n# Test cases\nnums1 = [1,1,2]\nk1 = remove_duplicates(nums1)\nprint(k1, nums1[:k1])\n\nnums2 = [0,0,1,1,1,2,2,3,3,4]\nk2 = remove_duplicates(nums2)\nprint(k2, nums2[:k2])`,
      java: `import java.util.*;\n\npublic class Solution {\n    public int removeDuplicates(int[] nums) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        int[] nums1 = {1,1,2};\n        int k1 = s.removeDuplicates(nums1);\n        System.out.println(k1 + \" \" + Arrays.toString(Arrays.copyOf(nums1, k1)));\n        \n        int[] nums2 = {0,0,1,1,1,2,2,3,3,4};\n        int k2 = s.removeDuplicates(nums2);\n        System.out.println(k2 + \" \" + Arrays.toString(Arrays.copyOf(nums2, k2)));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2 [1,2]\n5 [0,1,2,3,4]",
      python: "2 [1, 2]\n5 [0, 1, 2, 3, 4]",
      java: "2 [1, 2]\n5 [0, 1, 2, 3, 4]",
    },
  },

  "search-insert-position": {
    id: "search-insert-position",
    title: "Search Insert Position",
    difficulty: "Easy",
    category: "Binary Search",
    description: {
      text: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.",
    },
    examples: [
      { input: "nums = [1,3,5,6], target = 5", output: "2" },
      { input: "nums = [1,3,5,6], target = 2", output: "1" },
      { input: "nums = [1,3,5,6], target = 7", output: "4" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10^4", "-10^4 ≤ nums[i] ≤ 10^4"],
    starterCode: {
      javascript: `function searchInsert(nums, target) {\n  // Write your code here\n  \n}\n\n// Test cases\nconsole.log(searchInsert([1,3,5,6], 5));\nconsole.log(searchInsert([1,3,5,6], 2));\nconsole.log(searchInsert([1,3,5,6], 7));`,
      python: `def search_insert(nums, target):\n    # Write your code here\n    pass\n\n# Test cases\nprint(search_insert([1,3,5,6], 5))\nprint(search_insert([1,3,5,6], 2))\nprint(search_insert([1,3,5,6], 7))`,
      java: `public class Solution {\n    public int searchInsert(int[] nums, int target) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.searchInsert(new int[]{1,3,5,6}, 5));\n        System.out.println(s.searchInsert(new int[]{1,3,5,6}, 2));\n        System.out.println(s.searchInsert(new int[]{1,3,5,6}, 7));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2\n1\n4",
      python: "2\n1\n4",
      java: "2\n1\n4",
    },
  },

  "length-of-last-word": {
    id: "length-of-last-word",
    title: "Length of Last Word",
    difficulty: "Easy",
    category: "Strings",
    description: {
      text: "Given a string s consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.",
    },
    examples: [
      { input: "s = 'Hello World'", output: "5" },
      { input: "s = '   fly me   to   the moon  '", output: "4" },
      { input: "s = 'luffy is still joyboy'", output: "6" },
    ],
    constraints: ["1 ≤ s.length ≤ 10^4", "s consists of English letters and spaces"],
    starterCode: {
      javascript: `function lengthOfLastWord(s) {\n  // Write your code here\n  \n}\n\n// Test cases\nconsole.log(lengthOfLastWord('Hello World'));\nconsole.log(lengthOfLastWord('   fly me   to   the moon  '));\nconsole.log(lengthOfLastWord('luffy is still joyboy'));`,
      python: `def length_of_last_word(s):\n    # Write your code here\n    pass\n\n# Test cases\nprint(length_of_last_word('Hello World'))\nprint(length_of_last_word('   fly me   to   the moon  '))\nprint(length_of_last_word('luffy is still joyboy'))`,
      java: `public class Solution {\n    public int lengthOfLastWord(String s) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println(sol.lengthOfLastWord("Hello World"));\n        System.out.println(sol.lengthOfLastWord("   fly me   to   the moon  "));\n        System.out.println(sol.lengthOfLastWord("luffy is still joyboy"));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "5\n4\n6",
      python: "5\n4\n6",
      java: "5\n4\n6",
    },
  },

  "plus-one": {
    id: "plus-one",
    title: "Plus One",
    difficulty: "Easy",
    category: "Arrays",
    description: {
      text: "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant. Increment the large integer by one and return the resulting array of digits.",
    },
    examples: [
      { input: "digits = [1,2,3]", output: "[1,2,4]" },
      { input: "digits = [4,3,2,1]", output: "[4,3,2,2]" },
      { input: "digits = [9]", output: "[1,0]" },
    ],
    constraints: ["1 ≤ digits.length ≤ 100", "0 ≤ digits[i] ≤ 9"],
    starterCode: {
      javascript: `function plusOne(digits) {\n  // Write your code here\n  \n}\n\n// Test cases\nconsole.log(JSON.stringify(plusOne([1,2,3])));\nconsole.log(JSON.stringify(plusOne([4,3,2,1])));\nconsole.log(JSON.stringify(plusOne([9])));`,
      python: `def plus_one(digits):\n    # Write your code here\n    pass\n\n# Test cases\nprint(plus_one([1,2,3]))\nprint(plus_one([4,3,2,1]))\nprint(plus_one([9]))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public int[] plusOne(int[] digits) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(Arrays.toString(s.plusOne(new int[]{1,2,3})));\n        System.out.println(Arrays.toString(s.plusOne(new int[]{4,3,2,1})));\n        System.out.println(Arrays.toString(s.plusOne(new int[]{9})));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,2,4]\n[4,3,2,2]\n[1,0]",
      python: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
      java: "[1, 2, 4]\n[4, 3, 2, 2]\n[1, 0]",
    },
  },

  "add-two-numbers": {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List",
    description: {
      text: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.",
    },
    examples: [
      { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]" },
      { input: "l1 = [0], l2 = [0]", output: "[0]" },
      { input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]", output: "[8,9,9,9,0,0,0,1]" },
    ],
    constraints: ["Number of nodes in each list is 1-100", "0 ≤ Node.val ≤ 9"],
    starterCode: {
      javascript: `function ListNode(val, next) {\n  this.val = (val===undefined ? 0 : val);\n  this.next = (next===undefined ? null : next);\n}\n\nfunction addTwoNumbers(l1, l2) {\n  // Write your code here\n  \n}\n\n// Helper\nfunction arrToList(arr) {\n  let dummy = new ListNode();\n  let cur = dummy;\n  for (let v of arr) { cur.next = new ListNode(v); cur = cur.next; }\n  return dummy.next;\n}\nfunction listToArr(head) {\n  let res = [];\n  while (head) { res.push(head.val); head = head.next; }\n  return res;\n}\n\nconsole.log(JSON.stringify(listToArr(addTwoNumbers(arrToList([2,4,3]), arrToList([5,6,4])))));\nconsole.log(JSON.stringify(listToArr(addTwoNumbers(arrToList([0]), arrToList([0])))));\nconsole.log(JSON.stringify(listToArr(addTwoNumbers(arrToList([9,9,9,9,9,9,9]), arrToList([9,9,9,9])))));`,
      python: `class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef add_two_numbers(l1, l2):\n    # Write your code here\n    pass\n\n# Helper\ndef arr_to_list(arr):\n    dummy = ListNode()\n    cur = dummy\n    for v in arr:\n        cur.next = ListNode(v)\n        cur = cur.next\n    return dummy.next\n\ndef list_to_arr(head):\n    res = []\n    while head:\n        res.append(head.val)\n        head = head.next\n    return res\n\nprint(list_to_arr(add_two_numbers(arr_to_list([2,4,3]), arr_to_list([5,6,4]))))\nprint(list_to_arr(add_two_numbers(arr_to_list([0]), arr_to_list([0]))))\nprint(list_to_arr(add_two_numbers(arr_to_list([9,9,9,9,9,9,9]), arr_to_list([9,9,9,9]))))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public static class ListNode {\n        int val;\n        ListNode next;\n        ListNode() {}\n        ListNode(int val) { this.val = val; }\n        ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n    }\n\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Write your code here\n        \n    }\n\n    static ListNode arrToList(int[] arr) {\n        ListNode dummy = new ListNode();\n        ListNode cur = dummy;\n        for (int v : arr) { cur.next = new ListNode(v); cur = cur.next; }\n        return dummy.next;\n    }\n\n    static String listToStr(ListNode head) {\n        List<Integer> res = new ArrayList<>();\n        while (head != null) { res.add(head.val); head = head.next; }\n        return res.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(listToStr(s.addTwoNumbers(arrToList(new int[]{2,4,3}), arrToList(new int[]{5,6,4}))));\n        System.out.println(listToStr(s.addTwoNumbers(arrToList(new int[]{0}), arrToList(new int[]{0}))));\n        System.out.println(listToStr(s.addTwoNumbers(arrToList(new int[]{9,9,9,9,9,9,9}), arrToList(new int[]{9,9,9,9}))));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[7,0,8]\n[0]\n[8,9,9,9,0,0,0,1]",
      python: "[7, 0, 8]\n[0]\n[8, 9, 9, 9, 0, 0, 0, 1]",
      java: "[7, 0, 8]\n[0]\n[8, 9, 9, 9, 0, 0, 0, 1]",
    },
  },

  "longest-substring": {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "Sliding Window",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
    },
    examples: [
      { input: "s = 'abcabcbb'", output: "3" },
      { input: "s = 'bbbbb'", output: "1" },
      { input: "s = 'pwwkew'", output: "3" },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10^4", "s consists of English letters, digits, symbols and spaces"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your code here\n  \n}\n\nconsole.log(lengthOfLongestSubstring('abcabcbb'));\nconsole.log(lengthOfLongestSubstring('bbbbb'));\nconsole.log(lengthOfLongestSubstring('pwwkew'));`,
      python: `def length_of_longest_substring(s):\n    # Write your code here\n    pass\n\nprint(length_of_longest_substring('abcabcbb'))\nprint(length_of_longest_substring('bbbbb'))\nprint(length_of_longest_substring('pwwkew'))`,
      java: `public class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println(sol.lengthOfLongestSubstring("abcabcbb"));\n        System.out.println(sol.lengthOfLongestSubstring("bbbbb"));\n        System.out.println(sol.lengthOfLongestSubstring("pwwkew"));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
    },
  },

  "longest-palindromic-substring": {
    id: "longest-palindromic-substring",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    category: "Strings",
    description: {
      text: "Given a string s, return the longest palindromic substring in s.",
    },
    examples: [
      { input: "s = 'babad'", output: '"bab" or "aba"' },
      { input: "s = 'cbbd'", output: '"bb"' },
    ],
    constraints: ["1 ≤ s.length ≤ 1000", "s consists of digits and English letters"],
    starterCode: {
      javascript: `function longestPalindrome(s) {\n  // Write your code here\n  \n}\n\nconsole.log(longestPalindrome('babad'));\nconsole.log(longestPalindrome('cbbd'));`,
      python: `def longest_palindrome(s):\n    # Write your code here\n    pass\n\nprint(longest_palindrome('babad'))\nprint(longest_palindrome('cbbd'))`,
      java: `public class Solution {\n    public String longestPalindrome(String s) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println(sol.longestPalindrome("babad"));\n        System.out.println(sol.longestPalindrome("cbbd"));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "bab\nbb",
      python: "bab\nbb",
      java: "bab\nbb",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Arrays",
    description: {
      text: "Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",
    },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10^5 ≤ nums[i] ≤ 10^5"],
    starterCode: {
      javascript: `function threeSum(nums) {\n  // Write your code here\n  \n}\n\nconsole.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4])));\nconsole.log(JSON.stringify(threeSum([0,1,1])));\nconsole.log(JSON.stringify(threeSum([0,0,0])));`,
      python: `def three_sum(nums):\n    # Write your code here\n    pass\n\nprint(three_sum([-1,0,1,2,-1,-4]))\nprint(three_sum([0,1,1]))\nprint(three_sum([0,0,0]))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.threeSum(new int[]{-1,0,1,2,-1,-4}));\n        System.out.println(s.threeSum(new int[]{0,1,1}));\n        System.out.println(s.threeSum(new int[]{0,0,0}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    },
  },

  "3sum-closest": {
    id: "3sum-closest",
    title: "3Sum Closest",
    difficulty: "Medium",
    category: "Arrays",
    description: {
      text: "Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input has exactly one solution.",
    },
    examples: [
      { input: "nums = [-1,2,1,-4], target = 1", output: "2" },
      { input: "nums = [0,0,0], target = 1", output: "0" },
    ],
    constraints: ["3 ≤ nums.length ≤ 500", "-1000 ≤ nums[i] ≤ 1000", "-10^4 ≤ target ≤ 10^4"],
    starterCode: {
      javascript: `function threeSumClosest(nums, target) {\n  // Write your code here\n  \n}\n\nconsole.log(threeSumClosest([-1,2,1,-4], 1));\nconsole.log(threeSumClosest([0,0,0], 1));`,
      python: `def three_sum_closest(nums, target):\n    # Write your code here\n    pass\n\nprint(three_sum_closest([-1,2,1,-4], 1))\nprint(three_sum_closest([0,0,0], 1))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public int threeSumClosest(int[] nums, int target) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.threeSumClosest(new int[]{-1,2,1,-4}, 1));\n        System.out.println(s.threeSumClosest(new int[]{0,0,0}, 1));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2\n0",
      python: "2\n0",
      java: "2\n0",
    },
  },

  "letter-combinations": {
    id: "letter-combinations",
    title: "Letter Combinations of a Phone Number",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order. The mapping of digits to letters is like telephone buttons.",
    },
    examples: [
      { input: "digits = '23'", output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: "digits = ''", output: "[]" },
      { input: "digits = '2'", output: '["a","b","c"]' },
    ],
    constraints: ["0 ≤ digits.length ≤ 4", "digits[i] is a digit in range '2'-'9'"],
    starterCode: {
      javascript: `function letterCombinations(digits) {\n  // Write your code here\n  \n}\n\nconsole.log(JSON.stringify(letterCombinations('23')));\nconsole.log(JSON.stringify(letterCombinations('')));\nconsole.log(JSON.stringify(letterCombinations('2')));`,
      python: `def letter_combinations(digits):\n    # Write your code here\n    pass\n\nprint(letter_combinations('23'))\nprint(letter_combinations(''))\nprint(letter_combinations('2'))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public List<String> letterCombinations(String digits) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.letterCombinations("23"));\n        System.out.println(s.letterCombinations(""));\n        System.out.println(s.letterCombinations("2"));\n    }\n}`,
    },
    expectedOutput: {
      javascript: '["ad","ae","af","bd","be","bf","cd","ce","cf"]\n[]\n["a","b","c"]',
      python: "['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']\n[]\n['a', 'b', 'c']",
      java: "[ad, ae, af, bd, be, bf, cd, ce, cf]\n[]\n[a, b, c]",
    },
  },

  "remove-nth-node": {
    id: "remove-nth-node",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    category: "Linked List",
    description: {
      text: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    },
    examples: [
      { input: "head = [1,2,3,4,5], n = 2", output: "[1,2,3,5]" },
      { input: "head = [1], n = 1", output: "[]" },
      { input: "head = [1,2], n = 1", output: "[1]" },
    ],
    constraints: ["Number of nodes in list is 1-30", "1 ≤ n ≤ number of nodes"],
    starterCode: {
      javascript: `function ListNode(val, next) {\n  this.val = (val===undefined ? 0 : val);\n  this.next = (next===undefined ? null : next);\n}\n\nfunction removeNthFromEnd(head, n) {\n  // Write your code here\n  \n}\n\n// Helpers\nfunction arrToList(arr) {\n  let dummy = new ListNode(); let cur = dummy;\n  for (let v of arr) { cur.next = new ListNode(v); cur = cur.next; }\n  return dummy.next;\n}\nfunction listToArr(head) {\n  let res = [];\n  while (head) { res.push(head.val); head = head.next; }\n  return res;\n}\n\nconsole.log(JSON.stringify(listToArr(removeNthFromEnd(arrToList([1,2,3,4,5]), 2))));\nconsole.log(JSON.stringify(listToArr(removeNthFromEnd(arrToList([1]), 1))));\nconsole.log(JSON.stringify(listToArr(removeNthFromEnd(arrToList([1,2]), 1))));`,
      python: `class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef remove_nth_from_end(head, n):\n    # Write your code here\n    pass\n\ndef arr_to_list(arr):\n    dummy = ListNode()\n    cur = dummy\n    for v in arr:\n        cur.next = ListNode(v)\n        cur = cur.next\n    return dummy.next\n\ndef list_to_arr(head):\n    res = []\n    while head:\n        res.append(head.val)\n        head = head.next\n    return res\n\nprint(list_to_arr(remove_nth_from_end(arr_to_list([1,2,3,4,5]), 2)))\nprint(list_to_arr(remove_nth_from_end(arr_to_list([1]), 1)))\nprint(list_to_arr(remove_nth_from_end(arr_to_list([1,2]), 1)))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public static class ListNode {\n        int val;\n        ListNode next;\n        ListNode() {}\n        ListNode(int val) { this.val = val; }\n        ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n    }\n\n    public ListNode removeNthFromEnd(ListNode head, int n) {\n        // Write your code here\n        \n    }\n\n    static ListNode arrToList(int[] arr) {\n        ListNode dummy = new ListNode(); ListNode cur = dummy;\n        for (int v : arr) { cur.next = new ListNode(v); cur = cur.next; }\n        return dummy.next;\n    }\n\n    static String listToStr(ListNode head) {\n        List<Integer> res = new ArrayList<>();\n        while (head != null) { res.add(head.val); head = head.next; }\n        return res.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(listToStr(s.removeNthFromEnd(arrToList(new int[]{1,2,3,4,5}), 2)));\n        System.out.println(listToStr(s.removeNthFromEnd(arrToList(new int[]{1}), 1)));\n        System.out.println(listToStr(s.removeNthFromEnd(arrToList(new int[]{1,2}), 1)));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,2,3,5]\n[]\n[1]",
      python: "[1, 2, 3, 5]\n[]\n[1]",
      java: "[1, 2, 3, 5]\n[]\n[1]",
    },
  },

  "generate-parentheses": {
    id: "generate-parentheses",
    title: "Generate Parentheses",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    },
    examples: [
      { input: "n = 3", output: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: "n = 1", output: '["()"]' },
    ],
    constraints: ["1 ≤ n ≤ 8"],
    starterCode: {
      javascript: `function generateParenthesis(n) {\n  // Write your code here\n  \n}\n\nconsole.log(JSON.stringify(generateParenthesis(3)));\nconsole.log(JSON.stringify(generateParenthesis(1)));`,
      python: `def generate_parenthesis(n):\n    # Write your code here\n    pass\n\nprint(generate_parenthesis(3))\nprint(generate_parenthesis(1))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public List<String> generateParenthesis(int n) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.generateParenthesis(3));\n        System.out.println(s.generateParenthesis(1));\n    }\n}`,
    },
    expectedOutput: {
      javascript: '["((()))","(()())","(())()","()(())","()()()"]\n["()"]',
      python: "['((()))', '(()())', '(())()', '()(())', '()()()']\n['()']",
      java: "[((()), (()()), (())(), ()(()), ()()()]\n[()]",
    },
  },

  "next-permutation": {
    id: "next-permutation",
    title: "Next Permutation",
    difficulty: "Medium",
    category: "Arrays",
    description: {
      text: "A permutation of an array of integers is an arrangement of its members into a sequence or linear order. The next permutation of an array of integers is the next lexicographically greater permutation. If such arrangement is not possible, the array must be rearranged as the lowest possible order (sorted ascending).",
    },
    examples: [
      { input: "nums = [1,2,3]", output: "[1,3,2]" },
      { input: "nums = [3,2,1]", output: "[1,2,3]" },
      { input: "nums = [1,1,5]", output: "[1,5,1]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 100", "0 ≤ nums[i] ≤ 100"],
    starterCode: {
      javascript: `function nextPermutation(nums) {\n  // Write your code here\n  \n}\n\n// Test cases\nlet nums1 = [1,2,3]; nextPermutation(nums1); console.log(JSON.stringify(nums1));\nlet nums2 = [3,2,1]; nextPermutation(nums2); console.log(JSON.stringify(nums2));\nlet nums3 = [1,1,5]; nextPermutation(nums3); console.log(JSON.stringify(nums3));`,
      python: `def next_permutation(nums):\n    # Write your code here\n    pass\n\n# Test cases\nnums1 = [1,2,3]; next_permutation(nums1); print(nums1)\nnums2 = [3,2,1]; next_permutation(nums2); print(nums2)\nnums3 = [1,1,5]; next_permutation(nums3); print(nums3)`,
      java: `import java.util.*;\n\npublic class Solution {\n    public void nextPermutation(int[] nums) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        int[] nums1 = {1,2,3}; s.nextPermutation(nums1); System.out.println(Arrays.toString(nums1));\n        int[] nums2 = {3,2,1}; s.nextPermutation(nums2); System.out.println(Arrays.toString(nums2));\n        int[] nums3 = {1,1,5}; s.nextPermutation(nums3); System.out.println(Arrays.toString(nums3));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,3,2]\n[1,2,3]\n[1,5,1]",
      python: "[1, 3, 2]\n[1, 2, 3]\n[1, 5, 1]",
      java: "[1, 3, 2]\n[1, 2, 3]\n[1, 5, 1]",
    },
  },

  "search-rotated-array": {
    id: "search-rotated-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index. Given the array nums after rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
    },
    examples: [
      { input: "nums = [4,5,6,7,0,1,2], target = 0", output: "4" },
      { input: "nums = [4,5,6,7,0,1,2], target = 3", output: "-1" },
      { input: "nums = [1], target = 0", output: "-1" },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10^4 ≤ nums[i] ≤ 10^4"],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your code here\n  \n}\n\nconsole.log(search([4,5,6,7,0,1,2], 0));\nconsole.log(search([4,5,6,7,0,1,2], 3));\nconsole.log(search([1], 0));`,
      python: `def search(nums, target):\n    # Write your code here\n    pass\n\nprint(search([4,5,6,7,0,1,2], 0))\nprint(search([4,5,6,7,0,1,2], 3))\nprint(search([1], 0))`,
      java: `public class Solution {\n    public int search(int[] nums, int target) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.search(new int[]{4,5,6,7,0,1,2}, 0));\n        System.out.println(s.search(new int[]{4,5,6,7,0,1,2}, 3));\n        System.out.println(s.search(new int[]{1}, 0));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "4\n-1\n-1",
      python: "4\n-1\n-1",
      java: "4\n-1\n-1",
    },
  },

  "find-first-last": {
    id: "find-first-last",
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    description: {
      text: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.",
    },
    examples: [
      { input: "nums = [5,7,7,8,8,10], target = 8", output: "[3,4]" },
      { input: "nums = [5,7,7,8,8,10], target = 6", output: "[-1,-1]" },
      { input: "nums = [], target = 0", output: "[-1,-1]" },
    ],
    constraints: ["0 ≤ nums.length ≤ 10^5", "-10^9 ≤ nums[i] ≤ 10^9"],
    starterCode: {
      javascript: `function searchRange(nums, target) {\n  // Write your code here\n  \n}\n\nconsole.log(JSON.stringify(searchRange([5,7,7,8,8,10], 8)));\nconsole.log(JSON.stringify(searchRange([5,7,7,8,8,10], 6)));\nconsole.log(JSON.stringify(searchRange([], 0)));`,
      python: `def search_range(nums, target):\n    # Write your code here\n    pass\n\nprint(search_range([5,7,7,8,8,10], 8))\nprint(search_range([5,7,7,8,8,10], 6))\nprint(search_range([], 0))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(Arrays.toString(s.searchRange(new int[]{5,7,7,8,8,10}, 8)));\n        System.out.println(Arrays.toString(s.searchRange(new int[]{5,7,7,8,8,10}, 6)));\n        System.out.println(Arrays.toString(s.searchRange(new int[]{}, 0)));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[3,4]\n[-1,-1]\n[-1,-1]",
      python: "[3, 4]\n[-1, -1]\n[-1, -1]",
      java: "[3, 4]\n[-1, -1]\n[-1, -1]",
    },
  },

  "valid-sudoku": {
    id: "valid-sudoku",
    title: "Valid Sudoku",
    difficulty: "Medium",
    category: "Matrix",
    description: {
      text: "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the rules: (1) Each row must contain digits 1-9 without repetition, (2) Each column must contain digits 1-9 without repetition, (3) Each of the nine 3x3 sub-boxes must contain digits 1-9 without repetition.",
    },
    examples: [
      { input: "board = valid board", output: "true" },
      { input: "board = invalid board", output: "false" },
    ],
    constraints: ["board.length == 9", "board[i].length == 9"],
    starterCode: {
      javascript: `function isValidSudoku(board) {\n  // Write your code here\n  \n}\n\n// Valid board\nconst validBoard = [\n  ["5","3",".",".","7",".",".",".","."],\n  ["6",".",".","1","9","5",".",".","."],\n  [".","9","8",".",".",".",".","6","."],\n  ["8",".",".",".","6",".",".",".","3"],\n  ["4",".",".","8",".","3",".",".","1"],\n  ["7",".",".",".","2",".",".",".","6"],\n  [".","6",".",".",".",".","2","8","."],\n  [".",".",".","4","1","9",".",".","5"],\n  [".",".",".",".","8",".",".","7","9"]\n];\nconsole.log(isValidSudoku(validBoard));\n\n// Invalid board\nconst invalidBoard = [\n  ["8","3",".",".","7",".",".",".","."],\n  ["6",".",".","1","9","5",".",".","."],\n  [".","9","8",".",".",".",".","6","."],\n  ["8",".",".",".","6",".",".",".","3"],\n  ["4",".",".","8",".","3",".",".","1"],\n  ["7",".",".",".","2",".",".",".","6"],\n  [".","6",".",".",".",".","2","8","."],\n  [".",".",".","4","1","9",".",".","5"],\n  [".",".",".",".","8",".",".","7","9"]\n];\nconsole.log(isValidSudoku(invalidBoard));`,
      python: `def is_valid_sudoku(board):\n    # Write your code here\n    pass\n\n# Valid board\nvalid_board = [\n    ["5","3",".",".","7",".",".",".","."],\n    ["6",".",".","1","9","5",".",".","."],\n    [".","9","8",".",".",".",".","6","."],\n    ["8",".",".",".","6",".",".",".","3"],\n    ["4",".",".","8",".","3",".",".","1"],\n    ["7",".",".",".","2",".",".",".","6"],\n    [".","6",".",".",".",".","2","8","."],\n    [".",".",".","4","1","9",".",".","5"],\n    [".",".",".",".","8",".",".","7","9"]\n]\nprint(is_valid_sudoku(valid_board))\n\n# Invalid board\ninvalid_board = [\n    ["8","3",".",".","7",".",".",".","."],\n    ["6",".",".","1","9","5",".",".","."],\n    [".","9","8",".",".",".",".","6","."],\n    ["8",".",".",".","6",".",".",".","3"],\n    ["4",".",".","8",".","3",".",".","1"],\n    ["7",".",".",".","2",".",".",".","6"],\n    [".","6",".",".",".",".","2","8","."],\n    [".",".",".","4","1","9",".",".","5"],\n    [".",".",".",".","8",".",".","7","9"]\n]\nprint(is_valid_sudoku(invalid_board))`,
      java: `public class Solution {\n    public boolean isValidSudoku(char[][] board) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        char[][] validBoard = {\n            {'5','3','.','.','7','.','.','.','.'},\n            {'6','.','.','1','9','5','.','.','.'},\n            {'.','9','8','.','.','.','.','6','.'},\n            {'8','.','.','.','6','.','.','.','3'},\n            {'4','.','.','8','.','3','.','.','1'},\n            {'7','.','.','.','2','.','.','.','6'},\n            {'.','6','.','.','.','.','2','8','.'},\n            {'.','.','.','4','1','9','.','.','5'},\n            {'.','.','.','.','8','.','.','7','9'}\n        };\n        System.out.println(s.isValidSudoku(validBoard));\n        \n        char[][] invalidBoard = {\n            {'8','3','.','.','7','.','.','.','.'},\n            {'6','.','.','1','9','5','.','.','.'},\n            {'.','9','8','.','.','.','.','6','.'},\n            {'8','.','.','.','6','.','.','.','3'},\n            {'4','.','.','8','.','3','.','.','1'},\n            {'7','.','.','.','2','.','.','.','6'},\n            {'.','6','.','.','.','.','2','8','.'},\n            {'.','.','.','4','1','9','.','.','5'},\n            {'.','.','.','.','8','.','.','7','9'}\n        };\n        System.out.println(s.isValidSudoku(invalidBoard));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
    },
  },

  "combination-sum": {
    id: "combination-sum",
    title: "Combination Sum",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order. The same number may be chosen from candidates an unlimited number of times.",
    },
    examples: [
      { input: "candidates = [2,3,6,7], target = 7", output: "[[2,2,3],[7]]" },
      { input: "candidates = [2,3,5], target = 8", output: "[[2,2,2,2],[2,3,3],[3,5]]" },
      { input: "candidates = [2], target = 1", output: "[]" },
    ],
    constraints: ["1 ≤ candidates.length ≤ 30", "1 ≤ candidates[i] ≤ 200"],
    starterCode: {
      javascript: `function combinationSum(candidates, target) {\n  // Write your code here\n  \n}\n\nconsole.log(JSON.stringify(combinationSum([2,3,6,7], 7)));\nconsole.log(JSON.stringify(combinationSum([2,3,5], 8)));\nconsole.log(JSON.stringify(combinationSum([2], 1)));`,
      python: `def combination_sum(candidates, target):\n    # Write your code here\n    pass\n\nprint(combination_sum([2,3,6,7], 7))\nprint(combination_sum([2,3,5], 8))\nprint(combination_sum([2], 1))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public List<List<Integer>> combinationSum(int[] candidates, int target) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.combinationSum(new int[]{2,3,6,7}, 7));\n        System.out.println(s.combinationSum(new int[]{2,3,5}, 8));\n        System.out.println(s.combinationSum(new int[]{2}, 1));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[2,2,3],[7]]\n[[2,2,2,2],[2,3,3],[3,5]]\n[]",
      python: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]\n[]",
      java: "[[2, 2, 3], [7]]\n[[2, 2, 2, 2], [2, 3, 3], [3, 5]]\n[]",
    },
  },

  "permutations": {
    id: "permutations",
    title: "Permutations",
    difficulty: "Medium",
    category: "Backtracking",
    description: {
      text: "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    },
    examples: [
      { input: "nums = [1,2,3]", output: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]" },
      { input: "nums = [0,1]", output: "[[0,1],[1,0]]" },
      { input: "nums = [1]", output: "[[1]]" },
    ],
    constraints: ["1 ≤ nums.length ≤ 6", "-10 ≤ nums[i] ≤ 10"],
    starterCode: {
      javascript: `function permute(nums) {\n  // Write your code here\n  \n}\n\nconsole.log(JSON.stringify(permute([1,2,3])));\nconsole.log(JSON.stringify(permute([0,1])));\nconsole.log(JSON.stringify(permute([1])));`,
      python: `def permute(nums):\n    # Write your code here\n    pass\n\nprint(permute([1,2,3]))\nprint(permute([0,1]))\nprint(permute([1]))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public List<List<Integer>> permute(int[] nums) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.permute(new int[]{1,2,3}));\n        System.out.println(s.permute(new int[]{0,1}));\n        System.out.println(s.permute(new int[]{1}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n[[0,1],[1,0]]\n[[1]]",
      python: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]\n[[0, 1], [1, 0]]\n[[1]]",
      java: "[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]\n[[0, 1], [1, 0]]\n[[1]]",
    },
  },

  "median-of-two-arrays": {
    id: "median-of-two-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Binary Search",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    },
    examples: [
      { input: "nums1 = [1,3], nums2 = [2]", output: "2.0" },
      { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5" },
    ],
    constraints: ["0 ≤ m,n ≤ 1000", "-10^6 ≤ nums[i] ≤ 10^6"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {\n  // Write your code here\n  \n}\n\nconsole.log(findMedianSortedArrays([1,3], [2]));\nconsole.log(findMedianSortedArrays([1,2], [3,4]));`,
      python: `def find_median_sorted_arrays(nums1, nums2):\n    # Write your code here\n    pass\n\nprint(find_median_sorted_arrays([1,3], [2]))\nprint(find_median_sorted_arrays([1,2], [3,4]))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.findMedianSortedArrays(new int[]{1,3}, new int[]{2}));\n        System.out.println(s.findMedianSortedArrays(new int[]{1,2}, new int[]{3,4}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
    },
  },

  "merge-k-sorted-lists": {
    id: "merge-k-sorted-lists",
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List",
    description: {
      text: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    },
    examples: [
      { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]" },
      { input: "lists = []", output: "[]" },
      { input: "lists = [[]]", output: "[]" },
    ],
    constraints: ["k == lists.length", "0 ≤ k ≤ 10^4", "0 ≤ each list length ≤ 500"],
    starterCode: {
      javascript: `function ListNode(val, next) {\n  this.val = (val===undefined ? 0 : val);\n  this.next = (next===undefined ? null : next);\n}\n\nfunction mergeKLists(lists) {\n  // Write your code here\n  \n}\n\nfunction arrToList(arr) {\n  let dummy = new ListNode(); let cur = dummy;\n  for (let v of arr) { cur.next = new ListNode(v); cur = cur.next; }\n  return dummy.next;\n}\nfunction listToArr(head) {\n  let res = [];\n  while (head) { res.push(head.val); head = head.next; }\n  return res;\n}\n\nconsole.log(JSON.stringify(listToArr(mergeKLists([arrToList([1,4,5]), arrToList([1,3,4]), arrToList([2,6])]))));\nconsole.log(JSON.stringify(listToArr(mergeKLists([]))));\nconsole.log(JSON.stringify(listToArr(mergeKLists([arrToList([])]))));`,
      python: `class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef merge_k_lists(lists):\n    # Write your code here\n    pass\n\ndef arr_to_list(arr):\n    dummy = ListNode()\n    cur = dummy\n    for v in arr:\n        cur.next = ListNode(v)\n        cur = cur.next\n    return dummy.next\n\ndef list_to_arr(head):\n    res = []\n    while head:\n        res.append(head.val)\n        head = head.next\n    return res\n\nprint(list_to_arr(merge_k_lists([arr_to_list([1,4,5]), arr_to_list([1,3,4]), arr_to_list([2,6])])))\nprint(list_to_arr(merge_k_lists([])))\nprint(list_to_arr(merge_k_lists([arr_to_list([])])))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public static class ListNode {\n        int val;\n        ListNode next;\n        ListNode() {}\n        ListNode(int val) { this.val = val; }\n        ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n    }\n\n    public ListNode mergeKLists(ListNode[] lists) {\n        // Write your code here\n        \n    }\n\n    static ListNode arrToList(int[] arr) {\n        ListNode dummy = new ListNode(); ListNode cur = dummy;\n        for (int v : arr) { cur.next = new ListNode(v); cur = cur.next; }\n        return dummy.next;\n    }\n\n    static String listToStr(ListNode head) {\n        List<Integer> res = new ArrayList<>();\n        while (head != null) { res.add(head.val); head = head.next; }\n        return res.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        ListNode[] lists1 = new ListNode[]{arrToList(new int[]{1,4,5}), arrToList(new int[]{1,3,4}), arrToList(new int[]{2,6})};\n        System.out.println(listToStr(s.mergeKLists(lists1)));\n        System.out.println(listToStr(s.mergeKLists(new ListNode[]{})));\n        System.out.println(listToStr(s.mergeKLists(new ListNode[]{arrToList(new int[]{})})));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4,5,6]\n[]\n[]",
      python: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
      java: "[1, 1, 2, 3, 4, 4, 5, 6]\n[]\n[]",
    },
  },

  "reverse-nodes-k-group": {
    id: "reverse-nodes-k-group",
    title: "Reverse Nodes in k-Group",
    difficulty: "Hard",
    category: "Linked List",
    description: {
      text: "Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list. k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as they are.",
    },
    examples: [
      { input: "head = [1,2,3,4,5], k = 2", output: "[2,1,4,3,5]" },
      { input: "head = [1,2,3,4,5], k = 3", output: "[3,2,1,4,5]" },
    ],
    constraints: ["Number of nodes is 1-5000", "1 ≤ k ≤ number of nodes"],
    starterCode: {
      javascript: `function ListNode(val, next) {\n  this.val = (val===undefined ? 0 : val);\n  this.next = (next===undefined ? null : next);\n}\n\nfunction reverseKGroup(head, k) {\n  // Write your code here\n  \n}\n\nfunction arrToList(arr) {\n  let dummy = new ListNode(); let cur = dummy;\n  for (let v of arr) { cur.next = new ListNode(v); cur = cur.next; }\n  return dummy.next;\n}\nfunction listToArr(head) {\n  let res = [];\n  while (head) { res.push(head.val); head = head.next; }\n  return res;\n}\n\nconsole.log(JSON.stringify(listToArr(reverseKGroup(arrToList([1,2,3,4,5]), 2))));\nconsole.log(JSON.stringify(listToArr(reverseKGroup(arrToList([1,2,3,4,5]), 3))));`,
      python: `class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverse_k_group(head, k):\n    # Write your code here\n    pass\n\ndef arr_to_list(arr):\n    dummy = ListNode()\n    cur = dummy\n    for v in arr:\n        cur.next = ListNode(v)\n        cur = cur.next\n    return dummy.next\n\ndef list_to_arr(head):\n    res = []\n    while head:\n        res.append(head.val)\n        head = head.next\n    return res\n\nprint(list_to_arr(reverse_k_group(arr_to_list([1,2,3,4,5]), 2)))\nprint(list_to_arr(reverse_k_group(arr_to_list([1,2,3,4,5]), 3)))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public static class ListNode {\n        int val;\n        ListNode next;\n        ListNode() {}\n        ListNode(int val) { this.val = val; }\n        ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n    }\n\n    public ListNode reverseKGroup(ListNode head, int k) {\n        // Write your code here\n        \n    }\n\n    static ListNode arrToList(int[] arr) {\n        ListNode dummy = new ListNode(); ListNode cur = dummy;\n        for (int v : arr) { cur.next = new ListNode(v); cur = cur.next; }\n        return dummy.next;\n    }\n\n    static String listToStr(ListNode head) {\n        List<Integer> res = new ArrayList<>();\n        while (head != null) { res.add(head.val); head = head.next; }\n        return res.toString();\n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(listToStr(s.reverseKGroup(arrToList(new int[]{1,2,3,4,5}), 2)));\n        System.out.println(listToStr(s.reverseKGroup(arrToList(new int[]{1,2,3,4,5}), 3)));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "[2,1,4,3,5]\n[3,2,1,4,5]",
      python: "[2, 1, 4, 3, 5]\n[3, 2, 1, 4, 5]",
      java: "[2, 1, 4, 3, 5]\n[3, 2, 1, 4, 5]",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Two Pointers",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    },
    examples: [
      { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" },
      { input: "height = [4,2,0,3,2,5]", output: "9" },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10^4", "0 ≤ height[i] ≤ 10^5"],
    starterCode: {
      javascript: `function trap(height) {\n  // Write your code here\n  \n}\n\nconsole.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));\nconsole.log(trap([4,2,0,3,2,5]));`,
      python: `def trap(height):\n    # Write your code here\n    pass\n\nprint(trap([0,1,0,2,1,0,1,3,2,1,2,1]))\nprint(trap([4,2,0,3,2,5]))`,
      java: `public class Solution {\n    public int trap(int[] height) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1}));\n        System.out.println(s.trap(new int[]{4,2,0,3,2,5}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
    },
  },

  "n-queens": {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    category: "Backtracking",
    description: {
      text: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Given an integer n, return all distinct solutions. Each solution contains a distinct board configuration of the queens' placement, where 'Q' and '.' indicate a queen and an empty space respectively.",
    },
    examples: [
      { input: "n = 4", output: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]' },
      { input: "n = 1", output: '[["Q"]]' },
    ],
    constraints: ["1 ≤ n ≤ 9"],
    starterCode: {
      javascript: `function solveNQueens(n) {\n  // Write your code here\n  \n}\n\nconsole.log(JSON.stringify(solveNQueens(4)));\nconsole.log(JSON.stringify(solveNQueens(1)));`,
      python: `def solve_n_queens(n):\n    # Write your code here\n    pass\n\nprint(solve_n_queens(4))\nprint(solve_n_queens(1))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public List<List<String>> solveNQueens(int n) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.solveNQueens(4));\n        System.out.println(s.solveNQueens(1));\n    }\n}`,
    },
    expectedOutput: {
      javascript: '[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]\n[["Q"]]',
      python: "[[['.', 'Q', '.', '.'], ['.', '.', '.', 'Q'], ['Q', '.', '.', '.'], ['.', '.', 'Q', '.']], [['.', '.', 'Q', '.'], ['Q', '.', '.', '.'], ['.', '.', '.', 'Q'], ['.', 'Q', '.', '.']]]\n[['Q']]",
      java: "[[.Q.., ...Q, Q..., ..Q.], [..Q., Q..., ...Q, .Q..]]\n[[Q]]",
    },
  },

  "wildcard-matching": {
    id: "wildcard-matching",
    title: "Wildcard Matching",
    difficulty: "Hard",
    category: "Dynamic Programming",
    description: {
      text: "Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*' where '?' matches any single character and '*' matches any sequence of characters (including the empty sequence). The matching should cover the entire input string (not partial).",
    },
    examples: [
      { input: "s = 'aa', p = 'a'", output: "false" },
      { input: "s = 'aa', p = '*'", output: "true" },
      { input: "s = 'cb', p = '?a'", output: "false" },
    ],
    constraints: ["0 ≤ s.length, p.length ≤ 2000", "s contains only lowercase English letters", "p contains only lowercase English letters, '?' or '*'"],
    starterCode: {
      javascript: `function isMatch(s, p) {\n  // Write your code here\n  \n}\n\nconsole.log(isMatch('aa', 'a'));\nconsole.log(isMatch('aa', '*'));\nconsole.log(isMatch('cb', '?a'));`,
      python: `def is_match(s, p):\n    # Write your code here\n    pass\n\nprint(is_match('aa', 'a'))\nprint(is_match('aa', '*'))\nprint(is_match('cb', '?a'))`,
      java: `public class Solution {\n    public boolean isMatch(String s, String p) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println(sol.isMatch("aa", "a"));\n        System.out.println(sol.isMatch("aa", "*"));\n        System.out.println(sol.isMatch("cb", "?a"));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "false\ntrue\nfalse",
      python: "False\nTrue\nFalse",
      java: "false\ntrue\nfalse",
    },
  },

  "largest-rectangle": {
    id: "largest-rectangle",
    title: "Largest Rectangle in Histogram",
    difficulty: "Hard",
    category: "Stack",
    description: {
      text: "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    },
    examples: [
      { input: "heights = [2,1,5,6,2,3]", output: "10" },
      { input: "heights = [2,4]", output: "4" },
    ],
    constraints: ["1 ≤ heights.length ≤ 10^5", "0 ≤ heights[i] ≤ 10^4"],
    starterCode: {
      javascript: `function largestRectangleArea(heights) {\n  // Write your code here\n  \n}\n\nconsole.log(largestRectangleArea([2,1,5,6,2,3]));\nconsole.log(largestRectangleArea([2,4]));`,
      python: `def largest_rectangle_area(heights):\n    # Write your code here\n    pass\n\nprint(largest_rectangle_area([2,1,5,6,2,3]))\nprint(largest_rectangle_area([2,4]))`,
      java: `public class Solution {\n    public int largestRectangleArea(int[] heights) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.largestRectangleArea(new int[]{2,1,5,6,2,3}));\n        System.out.println(s.largestRectangleArea(new int[]{2,4}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "10\n4",
      python: "10\n4",
      java: "10\n4",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    },
    examples: [
      { input: "n = 2", output: "2" },
      { input: "n = 3", output: "3" },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {\n  // Write your code here\n  \n}\n\nconsole.log(climbStairs(2));\nconsole.log(climbStairs(3));\nconsole.log(climbStairs(5));`,
      python: `def climb_stairs(n):\n    # Write your code here\n    pass\n\nprint(climb_stairs(2))\nprint(climb_stairs(3))\nprint(climb_stairs(5))`,
      java: `public class Solution {\n    public int climbStairs(int n) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.climbStairs(2));\n        System.out.println(s.climbStairs(3));\n        System.out.println(s.climbStairs(5));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
    },
  },

  "best-time-to-buy-sell-stock": {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Arrays",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve. If no profit can be made, return 0.",
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5" },
      { input: "prices = [7,6,4,3,1]", output: "0" },
    ],
    constraints: ["1 ≤ prices.length ≤ 10^5", "0 ≤ prices[i] ≤ 10^4"],
    starterCode: {
      javascript: `function maxProfit(prices) {\n  // Write your code here\n  \n}\n\nconsole.log(maxProfit([7,1,5,3,6,4]));\nconsole.log(maxProfit([7,6,4,3,1]));`,
      python: `def max_profit(prices):\n    # Write your code here\n    pass\n\nprint(max_profit([7,1,5,3,6,4]))\nprint(max_profit([7,6,4,3,1]))`,
      java: `public class Solution {\n    public int maxProfit(int[] prices) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.maxProfit(new int[]{7,1,5,3,6,4}));\n        System.out.println(s.maxProfit(new int[]{7,6,4,3,1}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Arrays",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10^5", "-10^4 ≤ nums[i] ≤ 10^4"],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Write your code here\n  \n}\n\nconsole.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));\nconsole.log(maxSubArray([1]));\nconsole.log(maxSubArray([5,4,-1,7,8]));`,
      python: `def max_sub_array(nums):\n    # Write your code here\n    pass\n\nprint(max_sub_array([-2,1,-3,4,-1,2,1,-5,4]))\nprint(max_sub_array([1]))\nprint(max_sub_array([5,4,-1,7,8]))`,
      java: `public class Solution {\n    public int maxSubArray(int[] nums) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4}));\n        System.out.println(s.maxSubArray(new int[]{1}));\n        System.out.println(s.maxSubArray(new int[]{5,4,-1,7,8}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Two Pointers",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container that contains the most water. Return the maximum amount of water a container can store.",
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10^5", "0 ≤ height[i] ≤ 10^4"],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Write your code here\n  \n}\n\nconsole.log(maxArea([1,8,6,2,5,4,8,3,7]));\nconsole.log(maxArea([1,1]));`,
      python: `def max_area(height):\n    # Write your code here\n    pass\n\nprint(max_area([1,8,6,2,5,4,8,3,7]))\nprint(max_area([1,1]))`,
      java: `public class Solution {\n    public int maxArea(int[] height) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution s = new Solution();\n        System.out.println(s.maxArea(new int[]{1,8,6,2,5,4,8,3,7}));\n        System.out.println(s.maxArea(new int[]{1,1}));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "word-break": {
    id: "word-break",
    title: "Word Break",
    difficulty: "Medium",
    category: "Dynamic Programming",
    description: {
      text: "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words. Note that the same word in the dictionary may be reused multiple times in the segmentation.",
    },
    examples: [
      { input: "s = 'leetcode', wordDict = ['leet','code']", output: "true" },
      { input: "s = 'applepenapple', wordDict = ['apple','pen']", output: "true" },
      { input: "s = 'catsandog', wordDict = ['cats','dog','sand','and','cat']", output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 300", "1 ≤ wordDict.length ≤ 1000", "1 ≤ wordDict[i].length ≤ 20"],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {\n  // Write your code here\n  \n}\n\nconsole.log(wordBreak('leetcode', ['leet','code']));\nconsole.log(wordBreak('applepenapple', ['apple','pen']));\nconsole.log(wordBreak('catsandog', ['cats','dog','sand','and','cat']));`,
      python: `def word_break(s, word_dict):\n    # Write your code here\n    pass\n\nprint(word_break('leetcode', ['leet','code']))\nprint(word_break('applepenapple', ['apple','pen']))\nprint(word_break('catsandog', ['cats','dog','sand','and','cat']))`,
      java: `import java.util.*;\n\npublic class Solution {\n    public boolean wordBreak(String s, List<String> wordDict) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Solution sol = new Solution();\n        System.out.println(sol.wordBreak(\"leetcode\", Arrays.asList(\"leet\",\"code\")));\n        System.out.println(sol.wordBreak(\"applepenapple\", Arrays.asList(\"apple\",\"pen\")));\n        System.out.println(sol.wordBreak(\"catsandog\", Arrays.asList(\"cats\",\"dog\",\"sand\",\"and\",\"cat\")));\n    }\n}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },
};
