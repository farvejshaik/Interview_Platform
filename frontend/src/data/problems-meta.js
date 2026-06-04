export const PROBLEM_COMPANIES = {
  "two-sum": ["Amazon", "Google", "Apple", "Microsoft", "Adobe"],
  "palindrome-number": ["Apple", "Adobe", "Yahoo"],
  "roman-to-integer": ["Amazon", "Microsoft", "Facebook", "Bloomberg"],
  "longest-common-prefix": ["Amazon", "Google", "Adobe"],
  "valid-parentheses": ["Amazon", "Microsoft", "Facebook", "Bloomberg"],
  "merge-two-sorted-lists": ["Amazon", "Microsoft", "Adobe", "Apple"],
  "remove-duplicates": ["Facebook", "Microsoft", "Bloomberg"],
  "search-insert-position": ["Google", "Amazon", "Apple"],
  "length-of-last-word": ["Apple", "Google", "Adobe"],
  "plus-one": ["Google", "Amazon", "Microsoft"],
  "add-two-numbers": ["Amazon", "Microsoft", "Google", "Apple"],
  "longest-substring": ["Amazon", "Google", "Microsoft", "Facebook"],
  "longest-palindromic-substring": ["Amazon", "Google", "Microsoft", "Adobe"],
  "3sum": ["Amazon", "Google", "Facebook", "Adobe", "Apple"],
  "3sum-closest": ["Amazon", "Google", "Bloomberg"],
  "letter-combinations": ["Amazon", "Apple", "Microsoft"],
  "remove-nth-node": ["Amazon", "Google", "Microsoft", "Facebook"],
  "generate-parentheses": ["Amazon", "Microsoft", "Google", "Facebook"],
  "next-permutation": ["Amazon", "Google", "Microsoft", "Goldman Sachs"],
  "search-rotated-array": ["Amazon", "Microsoft", "Facebook", "Bloomberg"],
  "find-first-last": ["Amazon", "Google", "Facebook", "LinkedIn"],
  "valid-sudoku": ["Amazon", "Apple", "Microsoft", "Google"],
  "combination-sum": ["Amazon", "Adobe", "Microsoft", "Uber"],
  "permutations": ["Amazon", "Google", "Facebook", "Microsoft"],
  "median-of-two-arrays": ["Amazon", "Google", "Microsoft", "Apple"],
  "merge-k-sorted-lists": ["Amazon", "Microsoft", "Facebook", "Google"],
  "reverse-nodes-k-group": ["Amazon", "Microsoft", "Google", "Adobe"],
  "trapping-rain-water": ["Amazon", "Google", "Microsoft", "Facebook"],
  "n-queens": ["Amazon", "Apple", "Adobe", "Google"],
  "wildcard-matching": ["Amazon", "Google", "Microsoft", "Facebook"],
  "largest-rectangle": ["Amazon", "Google", "Microsoft", "Bloomberg"],
  "climbing-stairs": ["Amazon", "Google", "Microsoft", "Adobe"],
  "best-time-to-buy-sell-stock": ["Amazon", "Google", "Microsoft", "Facebook", "Bloomberg"],
  "maximum-subarray": ["Amazon", "Google", "Microsoft", "Adobe", "LinkedIn"],
  "container-with-most-water": ["Amazon", "Google", "Microsoft", "Facebook"],
  "word-break": ["Amazon", "Google", "Microsoft", "Facebook", "Apple"],
};

export const PROBLEM_HINTS = {
  "two-sum": [
    "Try using a hash map to store numbers you've already seen along with their indices.",
    "For each number, check if target minus that number exists in the hash map.",
    "The hash map approach gives O(n) time by trading space for speed."
  ],
  "palindrome-number": [
    "Consider reversing only half of the number instead of the whole thing.",
    "You can extract digits from the end and build a reversed number simultaneously.",
    "Handle negative numbers and numbers ending with 0 (except 0 itself) as edge cases."
  ],
  "roman-to-integer": [
    "Map each Roman symbol to its value and process the string from left to right.",
    "If a smaller value appears before a larger value, subtract it; otherwise add it.",
    "For example, 'IV' = 4 (5-1) while 'VI' = 6 (5+1)."
  ],
  "longest-common-prefix": [
    "Start with the first string as the initial prefix, then compare with each subsequent string.",
    "For each string, shorten the prefix until it matches the beginning of that string.",
    "If the prefix becomes empty at any point, return an empty string."
  ],
  "valid-parentheses": [
    "Use a stack data structure to track opening brackets.",
    "When you see a closing bracket, check if it matches the most recent opening bracket.",
    "The string is valid only if the stack is empty at the end."
  ],
  "merge-two-sorted-lists": [
    "Use a dummy head node to simplify the merging logic.",
    "Compare the current nodes of both lists and attach the smaller one to the result.",
    "When one list is exhausted, attach the remainder of the other list."
  ],
  "remove-duplicates": [
    "Use two pointers: a slow pointer for the position to overwrite and a fast pointer to scan.",
    "Since the array is sorted, duplicates are adjacent — skip them with the fast pointer.",
    "Return the slow pointer index as the count of unique elements."
  ],
  "search-insert-position": [
    "The array is sorted, so binary search is the natural approach.",
    "Track left and right boundaries and narrow down based on comparison with target.",
    "If target is not found, the left pointer will be at the correct insertion position."
  ],
  "length-of-last-word": [
    "Trim trailing spaces first, then work backwards from the end.",
    "Count characters until you hit a space or the start of the string.",
    "A simple loop from the end avoids having to split the string."
  ],
  "plus-one": [
    "Start from the rightmost digit and work leftwards.",
    "If a digit is less than 9, increment it and return immediately.",
    "If you finish the loop, all digits were 9 — prepend a 1 to the result."
  ],
  "add-two-numbers": [
    "Traverse both linked lists simultaneously, tracking a carry value.",
    "Sum the two current node values plus carry, create a new node with sum % 10, and update carry = Math.floor(sum / 10).",
    "After the loop, if carry remains, add one more node with value 1."
  ],
  "longest-substring": [
    "Use a sliding window with two pointers and a hash map to track character positions.",
    "Expand the right pointer and if you see a repeated character, move the left pointer past its previous occurrence.",
    "The window size (right - left) at each step gives the current substring length."
  ],
  "longest-palindromic-substring": [
    "Every palindrome is centered at either one character (odd length) or between two characters (even length).",
    "Expand outward from each possible center and track the longest palindrome found.",
    "The expand-around-center approach runs in O(n^2) time."
  ],
  "3sum": [
    "Sort the array first to enable the two-pointer technique.",
    "Fix one element, then use two pointers (left and right) to find pairs that sum to the negative of the fixed element.",
    "Skip duplicate values to avoid duplicate triplets in the result."
  ],
  "3sum-closest": [
    "Sort the array and use a similar approach to 3Sum but track the closest sum instead of exact matches.",
    "For each fixed element, use two pointers and update the closest sum if the current sum is nearer to target.",
    "If an exact match is found, return it immediately."
  ],
  "letter-combinations": [
    "Use a backtracking/DFS approach with a mapping from digits to letters.",
    "Build combinations character by character, recursing for each subsequent digit.",
    "The base case is when the current combination length equals the digits length."
  ],
  "remove-nth-node": [
    "Use two pointers with a dummy node at the start.",
    "Move the first pointer n+1 steps ahead, then move both pointers together.",
    "When the first pointer reaches the end, the second pointer is just before the node to remove."
  ],
  "generate-parentheses": [
    "Use backtracking and track counts of open and close parentheses used so far.",
    "You can add an open paren if open < n, and a close paren if close < open.",
    "When both counts equal n, add the current combination to the result."
  ],
  "next-permutation": [
    "Find the first decreasing element from the right (the pivot).",
    "If no pivot exists, the array is in descending order — reverse it.",
    "Otherwise, swap the pivot with the next larger element to its right, then reverse the suffix."
  ],
  "search-rotated-array": [
    "Use modified binary search — one half of the array will always be sorted.",
    "Determine which half is sorted by comparing nums[left] with nums[mid].",
    "Check if the target lies in the sorted half to decide which side to search next."
  ],
  "find-first-last": [
    "Use binary search twice: once for the leftmost occurrence and once for the rightmost.",
    "For the leftmost, move right pointer when nums[mid] >= target; for the rightmost, move left pointer when nums[mid] <= target.",
    "If target is not found by the first binary search, return [-1, -1] immediately."
  ],
  "valid-sudoku": [
    "Use hash sets for each row, column, and 3x3 box to track seen digits.",
    "Iterate through each cell — skip empty cells ('.') and check against the corresponding row, col, and box sets.",
    "A cell at (i, j) belongs to box index Math.floor(i/3) * 3 + Math.floor(j/3)."
  ],
  "combination-sum": [
    "Sort candidates first to enable pruning during backtracking.",
    "At each step, you can either include the current candidate or skip it, subtracting its value from the remaining target.",
    "The same element can be reused, so recurse with the same index after including it."
  ],
  "permutations": [
    "Use backtracking by swapping elements in place to avoid extra space.",
    "At each recursive level, swap each remaining element into the current position.",
    "The base case is when the current position reaches the end of the array."
  ],
  "median-of-two-arrays": [
    "The required O(log(m+n)) complexity points to binary search.",
    "Binary search on the smaller array to find a partition that splits both arrays into equal halves.",
    "Ensure all elements in the left partition are ≤ all elements in the right partition."
  ],
  "merge-k-sorted-lists": [
    "Use a min-heap (priority queue) to always extract the smallest among all k list heads.",
    "Push all list heads into the heap, then repeatedly extract the minimum and add its next node.",
    "Alternatively, use divide-and-conquer: merge pairs of lists recursively."
  ],
  "reverse-nodes-k-group": [
    "First check if there are at least k nodes remaining before reversing.",
    "Reverse k nodes iteratively, keeping track of the previous, current, and next pointers.",
    "Connect the reversed segment back to the main list using a dummy node technique."
  ],
  "trapping-rain-water": [
    "The amount of water above a position is determined by the minimum of the max heights to its left and right.",
    "Use two pointers from both ends, tracking the max height seen so far from each side.",
    "At each step, process the side with the smaller max height."
  ],
  "n-queens": [
    "Use backtracking and place queens row by row.",
    "Track columns and diagonals (both main and anti-diagonals) that are under attack.",
    "A cell (r, c) is on the main diagonal with key (r-c) and anti-diagonal with key (r+c)."
  ],
  "wildcard-matching": [
    "Use dynamic programming with a 2D table where dp[i][j] indicates if s[0..i] matches p[0..j].",
    "'?' matches any single character, '*' matches any sequence — including empty.",
    "For '*', dp[i][j] = dp[i][j-1] (empty match) || dp[i-1][j] (match one more character)."
  ],
  "largest-rectangle": [
    "Use a monotonic stack to track increasing bar heights along with their indices.",
    "When a shorter bar is encountered, pop from the stack and calculate area using the popped height and the width between the new top and the current index.",
    "After processing all bars, handle remaining bars in the stack with the end of the array as the right boundary."
  ],
  "climbing-stairs": [
    "This is essentially the Fibonacci sequence — the number of ways to reach step n is the sum of ways to reach steps n-1 and n-2.",
    "Start with base cases: 1 way to reach step 1, 2 ways to reach step 2.",
    "Use two variables to track the previous two values instead of an entire array."
  ],
  "best-time-to-buy-sell-stock": [
    "Track the minimum price seen so far as you iterate through the array.",
    "For each day, calculate the profit if you sold at the current price minus the minimum price seen so far.",
    "Update the maximum profit whenever the current profit exceeds the previous best."
  ],
  "maximum-subarray": [
    "Use Kadane's algorithm — keep a running sum and reset it to 0 if it goes negative.",
    "Track the maximum sum seen at each step using Math.max.",
    "The key insight: a negative prefix sum only hurts future subarrays, so discard it."
  ],
  "container-with-most-water": [
    "Use two pointers starting at both ends of the array.",
    "The area is determined by the shorter line — move the pointer with the shorter height inward.",
    "Keep track of the maximum area as you move the pointers toward each other."
  ],
  "word-break": [
    "Use dynamic programming where dp[i] indicates whether s[0..i] can be segmented.",
    "For each position i, check if any word in the dictionary matches the substring ending at i and dp[start] is true.",
    "Using a Set for wordDict gives O(1) lookups during the DP."
  ],
};

export const PROBLEM_SOLUTIONS = {
  "two-sum": `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
}`,
  "palindrome-number": `function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
}`,
  "roman-to-integer": `function romanToInt(s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && map[s[i]] < map[s[i + 1]]) {
      total -= map[s[i]];
    } else {
      total += map[s[i]];
    }
  }
  return total;
}`,
  "longest-common-prefix": `function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}`,
  "valid-parentheses": `function isValid(s) {
  const stack = [];
  const map = { ")": "(", "}": "{", "]": "[" };
  for (const c of s) {
    if (c in map) {
      if (stack.pop() !== map[c]) return false;
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}`,
  "merge-two-sorted-lists": `function mergeTwoLists(list1, list2) {
  const dummy = new ListNode();
  let cur = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return dummy.next;
}`,
  "remove-duplicates": `function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let slow = 1;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
}`,
  "search-insert-position": `function searchInsert(nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}`,
  "length-of-last-word": `function lengthOfLastWord(s) {
  let count = 0;
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;
  while (i >= 0 && s[i] !== " ") { count++; i--; }
  return count;
}`,
  "plus-one": `function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}`,
  "add-two-numbers": `function addTwoNumbers(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);
    cur.next = new ListNode(sum % 10);
    cur = cur.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return dummy.next;
}`,
  "longest-substring": `function lengthOfLongestSubstring(s) {
  const map = new Map();
  let maxLen = 0, left = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
    }
    map.set(s[right], right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`,
  "longest-palindromic-substring": `function longestPalindrome(s) {
  let start = 0, maxLen = 0;
  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; }
    if (r - l - 1 > maxLen) { start = l + 1; maxLen = r - l - 1; }
  }
  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    expand(i, i + 1);
  }
  return s.slice(start, start + maxLen);
}`,
  "3sum": `function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++; right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}`,
  "3sum-closest": `function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
      if (sum < target) left++;
      else if (sum > target) right--;
      else return target;
    }
  }
  return closest;
}`,
  "letter-combinations": `function letterCombinations(digits) {
  if (!digits) return [];
  const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  const result = [];
  function backtrack(i, cur) {
    if (i === digits.length) { result.push(cur); return; }
    for (const c of map[digits[i]]) backtrack(i + 1, cur + c);
  }
  backtrack(0, "");
  return result;
}`,
  "remove-nth-node": `function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy, slow = dummy;
  for (let i = 0; i <= n; i++) fast = fast.next;
  while (fast) { fast = fast.next; slow = slow.next; }
  slow.next = slow.next.next;
  return dummy.next;
}`,
  "generate-parentheses": `function generateParenthesis(n) {
  const result = [];
  function backtrack(open, close, cur) {
    if (cur.length === 2 * n) { result.push(cur); return; }
    if (open < n) backtrack(open + 1, close, cur + "(");
    if (close < open) backtrack(open, close + 1, cur + ")");
  }
  backtrack(0, 0, "");
  return result;
}`,
  "next-permutation": `function nextPermutation(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) j--;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let left = i + 1, right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++; right--;
  }
}`,
  "search-rotated-array": `function search(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[left] <= nums[mid]) {
      if (target >= nums[left] && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (target > nums[mid] && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}`,
  "find-first-last": `function searchRange(nums, target) {
  function binarySearch(leftBias) {
    let left = 0, right = nums.length - 1, idx = -1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] > target) right = mid - 1;
      else if (nums[mid] < target) left = mid + 1;
      else { idx = mid; leftBias ? right = mid - 1 : left = mid + 1; }
    }
    return idx;
  }
  return [binarySearch(true), binarySearch(false)];
}`,
  "valid-sudoku": `function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === ".") continue;
      const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (rows[i].has(val) || cols[j].has(val) || boxes[boxIdx].has(val)) return false;
      rows[i].add(val); cols[j].add(val); boxes[boxIdx].add(val);
    }
  }
  return true;
}`,
  "combination-sum": `function combinationSum(candidates, target) {
  const result = [];
  function backtrack(start, cur, remaining) {
    if (remaining === 0) { result.push([...cur]); return; }
    if (remaining < 0) return;
    for (let i = start; i < candidates.length; i++) {
      cur.push(candidates[i]);
      backtrack(i, cur, remaining - candidates[i]);
      cur.pop();
    }
  }
  backtrack(0, [], target);
  return result;
}`,
  "permutations": `function permute(nums) {
  const result = [];
  function backtrack(start) {
    if (start === nums.length) { result.push([...nums]); return; }
    for (let i = start; i < nums.length; i++) {
      [nums[start], nums[i]] = [nums[i], nums[start]];
      backtrack(start + 1);
      [nums[start], nums[i]] = [nums[i], nums[start]];
    }
  }
  backtrack(0);
  return result;
}`,
  "median-of-two-arrays": `function findMedianSortedArrays(nums1, nums2) {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  const m = nums1.length, n = nums2.length;
  let left = 0, right = m;
  while (left <= right) {
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;
    const l1 = i === 0 ? -Infinity : nums1[i - 1];
    const r1 = i === m ? Infinity : nums1[i];
    const l2 = j === 0 ? -Infinity : nums2[j - 1];
    const r2 = j === n ? Infinity : nums2[j];
    if (l1 <= r2 && l2 <= r1) {
      if ((m + n) % 2 === 0) return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      else return Math.max(l1, l2);
    } else if (l1 > r2) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
}`,
  "merge-k-sorted-lists": `function mergeKLists(lists) {
  if (!lists.length) return null;
  while (lists.length > 1) {
    const merged = [];
    for (let i = 0; i < lists.length; i += 2) {
      merged.push(mergeTwoLists(lists[i], lists[i + 1] || null));
    }
    lists = merged;
  }
  return lists[0];
}

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) { cur.next = l1; l1 = l1.next; }
    else { cur.next = l2; l2 = l2.next; }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummy.next;
}`,
  "reverse-nodes-k-group": `function reverseKGroup(head, k) {
  const dummy = new ListNode(0, head);
  let prev = dummy;
  while (true) {
    let tail = prev;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) return dummy.next;
    }
    const nextGroup = tail.next;
    let curr = prev.next, prev2 = nextGroup;
    while (curr !== nextGroup) {
      const next = curr.next;
      curr.next = prev2;
      prev2 = curr;
      curr = next;
    }
    const temp = prev.next;
    prev.next = prev2;
    prev = temp;
  }
}`,
  "trapping-rain-water": `function trap(height) {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0, water = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax ? leftMax = height[left] : water += leftMax - height[left];
      left++;
    } else {
      height[right] >= rightMax ? rightMax = height[right] : water += rightMax - height[right];
      right--;
    }
  }
  return water;
}`,
  "n-queens": `function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => ".".repeat(n));
  const cols = new Set(), diag1 = new Set(), diag2 = new Set();
  function backtrack(r) {
    if (r === n) { result.push([...board]); return; }
    for (let c = 0; c < n; c++) {
      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;
      cols.add(c); diag1.add(r - c); diag2.add(r + c);
      board[r] = board[r].slice(0, c) + "Q" + board[r].slice(c + 1);
      backtrack(r + 1);
      board[r] = board[r].slice(0, c) + "." + board[r].slice(c + 1);
      cols.delete(c); diag1.delete(r - c); diag2.delete(r + c);
    }
  }
  backtrack(0);
  return result;
}`,
  "wildcard-matching": `function isMatch(s, p) {
  const m = s.length, n = p.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j <= n; j++) {
    if (p[j - 1] === "*") dp[0][j] = dp[0][j - 1];
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      } else if (p[j - 1] === "?" || s[i - 1] === p[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      }
    }
  }
  return dp[m][n];
}`,
  "largest-rectangle": `function largestRectangleArea(heights) {
  const stack = [];
  let maxArea = 0;
  for (let i = 0; i <= heights.length; i++) {
    const h = i === heights.length ? 0 : heights[i];
    while (stack.length && h < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
}`,
  "climbing-stairs": `function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}`,
  "best-time-to-buy-sell-stock": `function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;
  for (const price of prices) {
    if (price < minPrice) minPrice = price;
    else maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}`,
  "maximum-subarray": `function maxSubArray(nums) {
  let maxSum = -Infinity;
  let curSum = 0;
  for (const num of nums) {
    curSum = Math.max(num, curSum + num);
    maxSum = Math.max(maxSum, curSum);
  }
  return maxSum;
}`,
  "container-with-most-water": `function maxArea(height) {
  let left = 0, right = height.length - 1;
  let maxWater = 0;
  while (left < right) {
    const h = Math.min(height[left], height[right]);
    maxWater = Math.max(maxWater, h * (right - left));
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWater;
}`,
  "word-break": `function wordBreak(s, wordDict) {
  const set = new Set(wordDict);
  const dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}`,
};
