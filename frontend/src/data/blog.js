export const BLOG_POSTS = [
  {
    slug: "ace-your-technical-interview",
    title: "How to Ace Your Technical Interview",
    excerpt: "Learn the proven strategies and techniques that will help you stand out in your next technical interview.",
    date: "May 15, 2026",
    author: "TalentForge Team",
    readTime: "5 min read",
    category: "Interview Tips",
    image: "/hero.png",
    content: `
## Know Your Fundamentals

Before diving into complex algorithms, make sure you have a solid grasp of the basics. Most technical interviews focus on core computer science concepts that every developer should know.

### Data Structures You Must Master
- **Arrays & Strings**: The building blocks of almost every problem
- **Hash Tables**: Essential for optimization
- **Linked Lists**: Know your pointers
- **Trees & Graphs**: Binary trees, BSTs, and graph traversals
- **Stacks & Queues**: Understanding LIFO and FIFO

### Algorithm Patterns
Study these common patterns:
1. Two Pointers
2. Sliding Window
3. Binary Search
4. Depth-First Search (DFS)
5. Breadth-First Search (BFS)
6. Dynamic Programming
7. Backtracking

## Problem-Solving Framework

When approaching any coding problem, follow this structured approach:

1. **Clarify the problem** — Ask questions about edge cases and constraints
2. **Think out loud** — Explain your thought process to the interviewer
3. **Start with a brute force** — Get a working solution first
4. **Optimize** — Discuss time and space complexity improvements
5. **Write clean code** — Use meaningful variable names and handle edge cases
6. **Test your solution** — Walk through examples and edge cases

## Practice Makes Perfect

Use TalentForge's problem library to practice daily. Start with easy problems and gradually work your way up to harder ones. Aim to solve at least 2-3 problems per day leading up to your interview.

## Mock Interviews

Nothing beats real practice. Conduct mock interviews with friends or use our collaborative platform to simulate the real interview experience. Practice coding on a whiteboard or shared editor — this is what most interviews will feel like.

## Final Tips

- Get plenty of rest before your interview
- Prepare questions to ask your interviewer
- Be confident and communicative
- Remember: it's okay to ask for hints
`,
  },
  {
    slug: "top-10-leetcode-patterns",
    title: "Top 10 LeetCode Patterns You Must Know",
    excerpt: "Master these essential coding patterns to solve 80% of interview problems with confidence.",
    date: "May 10, 2026",
    author: "TalentForge Team",
    readTime: "8 min read",
    category: "Study Guide",
    image: "/hero.png",
    content: `
## Why Patterns Matter

Most coding interview problems are variations of a finite set of patterns. Once you recognize these patterns, you can solve unfamiliar problems by applying known techniques.

### 1. Two Pointers

Used for searching pairs in a sorted array.

\`\`\`javascript
function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}
\`\`\`

### 2. Sliding Window

Efficiently processes subarrays or substrings.

\`\`\`javascript
function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[i - k + 1];
    }
  }
  return maxSum;
}
\`\`\`

### 3. Binary Search

Finds elements in sorted arrays in O(log n) time.

\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
\`\`\`

### 4. Depth-First Search (DFS)

Explores tree/graph paths by going deep first.

\`\`\`javascript
function dfs(root) {
  if (!root) return;
  console.log(root.val);
  dfs(root.left);
  dfs(root.right);
}
\`\`\`

### 5. Breadth-First Search (BFS)

Explores tree/graph level by level.

\`\`\`javascript
function bfs(root) {
  const queue = [root];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
\`\`\`

### 6. Dynamic Programming

Breaks problems into overlapping subproblems.

### 7. Backtracking

Explores all possibilities and backtracks when stuck.

### 8. Fast & Slow Pointers

Detects cycles in linked lists.

### 9. Merge Intervals

Handles overlapping intervals.

### 10. Topological Sort

Orders nodes in a directed acyclic graph.

## How to Practice

Pick one pattern per week and solve 5-10 problems using that pattern. This focused approach builds muscle memory faster than random problem-solving.
`,
  },
  {
    slug: "system-design-interviews-guide",
    title: "System Design Interviews: A Complete Guide",
    excerpt: "Everything you need to know about system design interviews, from basic concepts to advanced topics.",
    date: "May 5, 2026",
    author: "TalentForge Team",
    readTime: "12 min read",
    category: "System Design",
    image: "/hero.png",
    content: `
## What is System Design?

System design interviews evaluate your ability to architect complex systems. Unlike coding interviews, there's no single correct answer — interviewers want to see your thought process and trade-off analysis.

## The Framework

Follow these steps when approaching a system design question:

### 1. Requirements Clarification
- **Functional requirements**: What should the system do?
- **Non-functional requirements**: Scalability, reliability, latency, consistency

### 2. Capacity Estimation
- Traffic estimates (DAU, QPS)
- Storage estimates
- Bandwidth estimates

### 3. High-Level Design
- System architecture diagram
- Core components and their interactions

### 4. Deep Dive
- Database schema design
- API design
- Caching strategy
- Load balancing

### 5. Trade-offs and Bottlenecks
- Identify single points of failure
- Discuss consistency vs availability
- Propose monitoring and alerting

## Common System Design Questions

### Design a URL Shortener (like bit.ly)

**Key considerations:**
- Hash generation (base62 encoding)
- Database choice (key-value store)
- Redirection (301 vs 302)
- Analytics tracking

### Design a Chat System

**Key considerations:**
- WebSocket connections
- Message persistence
- Online presence
- Push notifications

### Design a News Feed

**Key considerations:**
- Fan-out on write vs read
- Feed ranking algorithm
- Content delivery network (CDN)
- Caching popular content

### Design a Video Streaming Platform

**Key considerations:**
- Video transcoding pipeline
- Adaptive bitrate streaming
- CDN distribution
- Thumbnail generation

## Database Choices

| Database Type | Use Case | Examples |
|---------------|----------|----------|
| Relational | Structured data, ACID | PostgreSQL, MySQL |
| Document | Flexible schema, JSON | MongoDB, CouchDB |
| Key-Value | Caching, sessions | Redis, DynamoDB |
| Wide-Column | Time-series, analytics | Cassandra, HBase |
| Graph | Relationships | Neo4j, Amazon Neptune |

## Practice Resources

Use TalentForge's collaborative platform to whiteboard system designs with peers. Draw architectures, discuss trade-offs, and get feedback in real-time.
`,
  },
  {
    slug: "javascript-vs-python-interviews",
    title: "JavaScript vs Python for Coding Interviews",
    excerpt: "Which language should you choose for your coding interviews? We break down the pros and cons.",
    date: "April 28, 2026",
    author: "TalentForge Team",
    readTime: "6 min read",
    category: "Programming",
    image: "/hero.png",
    content: `
## The Great Debate

One of the first decisions you'll make when preparing for coding interviews is which language to use. JavaScript and Python are two of the most popular choices. Let's compare them.

## JavaScript Pros

- **Built-in JSON support** — Great for web API problems
- **Ubiquitous** — Runs everywhere (browser, server, mobile)
- **Functional programming** — First-class functions, closures
- **Large standard library** — Math, Date, RegExp, Map, Set
- **async/await** — Elegant asynchronous code

## JavaScript Cons

- **No built-in heap/priority queue** — Need to implement from scratch
- **No built-in BST/TreeMap** — Limited tree data structure support
- **Type coercion quirks** — Can lead to subtle bugs
- **Single-threaded** — Can't leverage multi-core for computation

## Python Pros

- **Readable and concise** — Clean syntax, easy to write quickly
- **Rich standard library** — heapq, bisect, collections, itertools
- **Built-in heap** — \`heapq\` for priority queues
- **Extensive data structures** — deque, Counter, defaultdict
- **Great for ML/data** — If interviews involve data processing

## Python Cons

- **Slow for large computations** — Interpreted, not JIT-compiled
- **GIL limitations** — Not truly multi-threaded
- **Indentation errors** — Can be tricky in timed settings
- **Weaker OOP support** — Compared to Java/C++

## Language Comparison Table

| Feature | JavaScript | Python |
|---------|-----------|--------|
| Arrays/Lists | Dynamic, sparse | Dynamic, contiguous |
| Hash Map | Map / Object | dict |
| Set | Set | set |
| Queue | Array or class | collections.deque |
| Heap | Manual | heapq |
| Stack | Array (push/pop) | list (append/pop) |
| String manipulation | Good | Excellent |
| Speed | Fast (JIT) | Moderate |
| Popularity in interviews | Very High | Very High |

## Our Recommendation

**Choose Python if**: You value readability and want built-in data structures like heaps and deques without implementing them.

**Choose JavaScript if**: You're a web developer and want to use the same language you use daily, or prefer functional programming patterns.

**Either way**: The language matters less than your problem-solving skills. Pick one and master it.
`,
  },
  {
    slug: "dynamic-programming-simplified",
    title: "Dynamic Programming Made Simple",
    excerpt: "Demystifying dynamic programming with practical examples and step-by-step problem-solving approaches.",
    date: "April 20, 2026",
    author: "TalentForge Team",
    readTime: "10 min read",
    category: "Algorithms",
    image: "/hero.png",
    content: `
## What is Dynamic Programming?

Dynamic Programming (DP) is a technique for solving complex problems by breaking them into simpler subproblems. It's like solving a big puzzle by first solving smaller pieces and reusing those solutions.

## When to Use DP

Look for these characteristics:
1. **Optimal substructure** — Optimal solution can be built from optimal solutions of subproblems
2. **Overlapping subproblems** — Same subproblems are solved multiple times

## Top-Down vs Bottom-Up

### Top-Down (Memoization)
Start with the original problem and recursively break it down, caching results.

\`\`\`javascript
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n] !== undefined) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
\`\`\`

### Bottom-Up (Tabulation)
Start from the base cases and build up to the solution.

\`\`\`javascript
function fib(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
\`\`\`

## Classic DP Problems

### 1. Climbing Stairs
How many ways to climb n stairs taking 1 or 2 steps?

\`\`\`javascript
function climbStairs(n) {
  if (n <= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i <= n; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}
\`\`\`

### 2. Coin Change
Minimum number of coins to make a given amount.

\`\`\`javascript
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
\`\`\`

### 3. Longest Common Subsequence

\`\`\`javascript
function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];
}
\`\`\`

## The DP Checklist

1. Define the state (what does dp[i] represent?)
2. Find the recurrence relation
3. Set up base cases
4. Determine the iteration order
5. Optimize space if possible

## Practice on TalentForge

Try these DP problems in our problem library:
- Climbing Stairs
- Coin Change
- Longest Common Subsequence
- Combination Sum
- House Robber
`,
  },
  {
    slug: "building-confidence-for-interviews",
    title: "Building Confidence for Technical Interviews",
    excerpt: "Practical tips to overcome interview anxiety and present your best self during technical interviews.",
    date: "April 15, 2026",
    author: "TalentForge Team",
    readTime: "4 min read",
    category: "Career Advice",
    image: "/hero.png",
    content: `
## Interview Anxiety is Normal

Even senior engineers get nervous before interviews. The key is not to eliminate anxiety — it's to manage it effectively.

## Preparation Strategy

### 1. Structured Practice
Don't just solve random problems. Follow a structured plan:
- Week 1-2: Review data structures
- Week 3-4: Practice medium problems
- Week 5-6: Focus on weak areas
- Week 7-8: Mock interviews

### 2. Simulate the Real Environment
- Practice with a timer
- Use a plain text editor (no IDE autocomplete)
- Talk through your solutions out loud
- Record yourself and review

### 3. Build a Study Group
- Pair program with friends on TalentForge
- Explain concepts to others (teaching reinforces learning)
- Get feedback on your communication style

## During the Interview

### The First 5 Minutes
- Take a deep breath before starting
- Listen carefully to the problem
- Ask clarifying questions
- Confirm your understanding with an example

### While Coding
- Explain your approach before writing code
- Write clean, readable code
- Handle edge cases explicitly
- Keep communicating throughout

### When You Get Stuck
- It's okay to say "I need a moment to think"
- Talk through your thought process
- Consider different approaches
- Ask for a hint if you're completely stuck

## After the Interview

- Reflect on what went well
- Note areas for improvement
- Don't dwell on mistakes — learn from them
- Keep practicing consistently

## Mindset Shifts

\`\`\`
Instead of: "I need to pass this interview"
Think: "I'm here to have a technical conversation"

Instead of: "I don't know the answer"
Think: "Let me figure this out step by step"

Instead of: "They're judging me"
Think: "They want to see how I think"
\`\`\`

## Remember

Technical interviews are a two-way street. You're also evaluating whether the company is the right fit for you. Confidence comes from preparation, and preparation comes from consistent practice.

Start your journey today with TalentForge — practice problems, collaborate with peers, and build the confidence you need to ace your interviews.
`,
  },
  {
    slug: "mastering-data-structures",
    title: "Mastering Data Structures: A Complete Guide",
    excerpt: "From arrays to graphs — a comprehensive guide to understanding and implementing essential data structures for coding interviews.",
    date: "June 1, 2026",
    author: "TalentForge Team",
    readTime: "10 min read",
    category: "Study Guide",
    image: "/hero.png",
    content: `
## Why Data Structures Matter

Data structures are the foundation of efficient algorithms. Choosing the right data structure can mean the difference between a solution that runs in milliseconds versus one that times out.

## Arrays

The simplest and most fundamental data structure. Arrays store elements in contiguous memory locations, providing O(1) access by index.

\`\`\`javascript
// Common array operations
const arr = [1, 2, 3, 4, 5];
arr.push(6);          // O(1) add to end
arr.pop();            // O(1) remove from end
arr.unshift(0);       // O(n) add to start
arr.shift();          // O(n) remove from start
\`\`\`

### When to use Arrays
- Fast random access by index
- When you know the size in advance
- Iterating through elements sequentially

## Hash Tables (Objects/Maps)

Hash tables provide O(1) average-time lookups, inserts, and deletes. In JavaScript, both \`Object\` and \`Map\` implement hash tables.

\`\`\`javascript
const map = new Map();
map.set("key", "value");   // O(1)
map.get("key");            // O(1)
map.has("key");            // O(1)
map.delete("key");         // O(1)
\`\`\`

### When to use Hash Tables
- Checking for duplicates
- Counting frequencies
- Storing relationships between values
- Caching / memoization

## Linked Lists

A linear collection where each element points to the next. Singly linked lists have O(n) access but O(1) insertion at known positions.

\`\`\`javascript
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
\`\`\`

### When to use Linked Lists
- Frequent insertions/deletions at arbitrary positions
- Implementing stacks and queues
- When memory fragmentation is a concern

## Stacks and Queues

- **Stack**: LIFO — Last In, First Out (think: undo/redo)
- **Queue**: FIFO — First In, First Out (think: task scheduling)

\`\`\`javascript
// Stack using array
const stack = [];
stack.push(1);   // push
stack.pop();     // pop

// Queue using array
const queue = [];
queue.push(1);   // enqueue
queue.shift();   // dequeue (O(n) — use linked list for O(1))
\`\`\`

## Trees

Trees are hierarchical data structures. Binary trees, binary search trees, and heaps are the most common in interviews.

### Binary Search Tree
\`\`\`javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// In-order traversal gives sorted order
function inorder(root) {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}
\`\`\`

### When to use Trees
- Hierarchical data (file systems, HTML DOM)
- Sorted data with fast search (BST: O(log n) average)
- Priority queues (heaps)

## Graphs

Graphs consist of vertices and edges. They model real-world relationships like social networks, maps, and dependencies.

\`\`\`javascript
class Graph {
  constructor() {
    this.adj = new Map();
  }
  addVertex(v) { this.adj.set(v, []); }
  addEdge(v1, v2) { this.adj.get(v1).push(v2); this.adj.get(v2).push(v1); }
}

// DFS
function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  for (const neighbor of graph.adj.get(start)) {
    if (!visited.has(neighbor)) dfs(graph, neighbor, visited);
  }
}
\`\`\`

## Choosing the Right Data Structure

| Operation | Array | Hash Table | Linked List | BST |
|-----------|-------|------------|-------------|-----|
| Access    | O(1)  | O(1)*      | O(n)        | O(log n) |
| Search    | O(n)  | O(1)*      | O(n)        | O(log n) |
| Insert    | O(n)  | O(1)*      | O(1)†       | O(log n) |
| Delete    | O(n)  | O(1)*      | O(1)†       | O(log n) |

\\* Average case \\† Given a pointer to the position

## Practice Tips

1. Implement each data structure from scratch at least once
2. Know the time/space complexity of every operation
3. Draw diagrams to visualize how data flows through structures
4. Solve at least 5 problems per data structure on TalentForge
`,
  },
  {
    slug: "cracking-behavioral-interviews",
    title: "Cracking the Behavioral Interview",
    excerpt: "Learn how to tell compelling stories about your experience using the STAR method and leave a lasting impression.",
    date: "May 28, 2026",
    author: "TalentForge Team",
    readTime: "7 min read",
    category: "Career Advice",
    image: "/hero.png",
    content: `
## Why Behavioral Interviews Matter

Technical skills get you to the interview, but behavioral skills get you the offer. Companies want to hire people who are not only technically competent but also collaborative, coachable, and culturally aligned.

## The STAR Method

The most effective way to answer behavioral questions is the STAR method:

- **S**ituation — Set the context
- **T**ask — Describe the challenge
- **A**ction — Explain what you did
- **R**esult — Share the outcome

### Example: "Tell me about a time you faced a challenge"

\`\`\`
Situation: Our team was building a real-time dashboard, but the page 
was taking 8 seconds to load due to unoptimized database queries.

Task: I needed to reduce the load time to under 2 seconds without 
rewriting the entire backend.

Action: I profiled the queries using EXPLAIN ANALYZE, identified 
three N+1 query patterns, and added eager loading with JOINs. 
I also implemented Redis caching for frequently accessed data.

Result: Page load time dropped to 800ms. The solution was 
adopted across two other teams, and we received positive 
feedback from our beta users.
\`\`\`

## Common Behavioral Questions

### Leadership & Collaboration
- "Tell me about a time you led a project"
- "How do you handle disagreements with teammates?"
- "Describe a situation where you had to influence someone"

### Problem-Solving
- "Tell me about a difficult bug you fixed"
- "Describe a time you had to make a decision with incomplete information"
- "Walk me through how you approach a new technical challenge"

### Failure & Growth
- "Tell me about a time you failed"
- "What would you do differently on a past project?"
- "Describe a situation where you received constructive criticism"

### Conflict Resolution
- "How do you handle a teammate who isn't pulling their weight?"
- "Tell me about a time you disagreed with a manager's decision"
- "Describe a conflict on your team and how it was resolved"

## How to Prepare

1. **Write down 7-10 stories** from your experience covering different scenarios
2. **Practice the STAR format** for each story — keep them under 2 minutes
3. **Quantify results** whenever possible — use numbers, percentages, and timeframes
4. **Record yourself** answering questions and review your delivery
5. **Prepare questions** to ask the interviewer about team culture and expectations

## What Interviewers Look For

- **Authenticity** — They can tell when you're making things up
- **Growth mindset** — Show how you learned from mistakes
- **Collaboration** — Demonstrate that you work well with others
- **Communication** — Clear, concise, structured responses
- **Self-awareness** — Acknowledge weaknesses and how you address them

## Final Advice

Remember that behavioral interviews are a conversation, not an interrogation. Be genuine, be specific, and focus on your individual contributions even when discussing team efforts. The best answers make the interviewer feel like they've already worked with you.
`,
  },
  {
    slug: "guide-to-dynamic-programming",
    title: "Dynamic Programming: From Zero to Hero",
    excerpt: "Demystify dynamic programming with a step-by-step framework. Learn to recognize DP problems and build optimal solutions with confidence.",
    date: "June 5, 2026",
    author: "TalentForge Team",
    readTime: "12 min read",
    category: "Algorithms",
    image: "/hero.png",
    content: `
## What is Dynamic Programming?

Dynamic Programming (DP) is a technique for solving problems by breaking them into overlapping subproblems and storing results to avoid redundant computations. If you can solve a problem by combining solutions to smaller instances of the same problem, DP might be the answer.

## The DP Framework

Follow these steps to solve any DP problem:

### Step 1: Identify the State
Define what each state represents. A state is a set of parameters that uniquely describes a subproblem.

For example, in the Fibonacci sequence:
\`dp[i] = the i-th Fibonacci number\`

### Step 2: Define the Recurrence Relation
Express how a state relates to smaller states.

\`dp[i] = dp[i-1] + dp[i-2]\`

### Step 3: Identify Base Cases
The simplest subproblems that can be solved directly.

\`dp[0] = 0, dp[1] = 1\`

### Step 4: Determine the Computation Order
Bottom-up (iterative) or top-down (memoization with recursion).

### Step 5: Optimize Space if Possible
Often you only need the last few states, not the entire table.

## When to Use DP

Look for these characteristics:
1. **Optimal substructure** — optimal solution contains optimal solutions to subproblems
2. **Overlapping subproblems** — same subproblems are solved multiple times
3. A **choice** needs to be made at each step (take/not take, include/exclude)

### Common DP Patterns

#### 1. Fibonacci-style (1D DP)
\`\`\`javascript
function fib(n) {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
  return dp[n];
}

// Space-optimized
function fibOptimized(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}
\`\`\`

Example problems: Climbing Stairs, House Robber

#### 2. Knapsack-style (2D DP)
\`\`\`javascript
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i-1] <= w) {
        dp[i][w] = Math.max(dp[i-1][w], dp[i-1][w-weights[i-1]] + values[i-1]);
      } else {
        dp[i][w] = dp[i-1][w];
      }
    }
  }
  return dp[n][capacity];
}
\`\`\`

Example problems: Partition Equal Subset Sum, Coin Change

#### 3. Longest Common Subsequence (LCS)
\`\`\`javascript
function longestCommonSubsequence(text1, text2) {
  const m = text1.length, n = text2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i-1] === text2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  return dp[m][n];
}
\`\`\`

Example problems: Edit Distance, Longest Palindromic Subsequence

## Top-Down vs Bottom-Up

### Top-Down (Memoization)
\`\`\`javascript
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
  return memo[n];
}
\`\`\`

**Pros:** Intuitive, only computes needed states
**Cons:** Recursion overhead, risk of stack overflow

### Bottom-Up (Tabulation)
\`\`\`javascript
function fibTab(n) {
  if (n <= 1) return n;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];
  return dp[n];
}
\`\`\`

**Pros:** No recursion overhead, easier to optimize space
**Cons:** Computes all states even if not needed

## Practice Progression

Start with these problems on TalentForge, in order:

1. **Climbing Stairs** — Simple 1D DP, Fibonacci pattern
2. **House Robber** — Slightly more complex 1D DP
3. **Maximum Subarray** — Kadane's algorithm (a DP variant)
4. **Coin Change** — Classic unbounded knapsack
5. **Word Break** — String DP with hash set
6. **Longest Increasing Subsequence** — Classic 1D DP
7. **Edit Distance** — Full 2D DP, excellent practice

## Key Takeaways

1. Always start with brute force, then identify overlapping subproblems
2. Draw the recursion tree to visualize the problem
3. Write the recursive solution first, then add memoization
4. Convert to bottom-up when you're comfortable
5. Look for opportunities to reduce space complexity
6. Practice recognizing patterns — most DP problems fit a known template
`,
  },
];

export const CATEGORIES = [...new Set(BLOG_POSTS.map((p) => p.category))];
