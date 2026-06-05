export const javascriptRoadmap = {
  id: "javascript",
  title: "JavaScript",
  description:
    "Master JavaScript — the world's most versatile programming language. From fundamentals to advanced concepts, this roadmap covers everything you need to become a proficient JavaScript developer.",
  difficulty: "Beginner to Expert",
  estimatedTime: "12-16 weeks",
  icon: (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 1 1-9-9" />
      <path d="M12 3a9 9 0 0 1 9 9" />
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="M12 3c1.5 1.5 2.5 4 2.5 9s-1 7.5-2.5 9" />
      <path d="M12 3c-1.5 1.5-2.5 4-2.5 9s1 7.5 2.5 9" />
    </svg>
  ),
  color: "from-amber-400 to-yellow-500",
  sections: [
    {
      id: "fundamentals",
      title: "Fundamentals",
      description: "Core building blocks of the JavaScript language",
      nodes: [
        {
          id: "variables",
          title: "Variables & Declarations",
          description:
            "Learn how to store and manage data using var, let, and const. Understand block scoping, hoisting, and when to use each declaration type.",
          difficulty: "Beginner",
          time: "1-2 hours",
          whyMatters:
            "Variables are the foundation of every program. Understanding declaration differences prevents subtle bugs and improves code readability.",
          prerequisites: ["Basic computer literacy"],
          objectives: [
            "Declare variables using let, const, and var",
            "Understand block vs function scoping",
            "Explain hoisting behavior",
            "Choose the right declaration for any scenario",
          ],
          resources: [
            {
              type: "video",
              label: "Watch Video",
              icon: "▶",
              url: "https://youtube.com",
            },
            {
              type: "docs",
              label: "Read Docs",
              icon: "📖",
              url: "https://developer.mozilla.org",
            },
            {
              type: "article",
              label: "Read Article",
              icon: "📝",
              url: "https://freecodecamp.org",
            },
            {
              type: "practice",
              label: "Practice Problems",
              icon: "💻",
              url: "https://leetcode.com",
            },
          ],
        },
        {
          id: "data-types",
          title: "Data Types",
          description:
            "Explore JavaScript's dynamic type system including primitives (string, number, boolean, null, undefined, symbol, bigint) and type coercion.",
          difficulty: "Beginner",
          time: "2-3 hours",
          whyMatters:
            "Type coercion bugs are among the most common issues in JavaScript. Mastery of types eliminates entire categories of runtime errors.",
          prerequisites: ["Variables & Declarations"],
          objectives: [
            "Identify all 7 primitive types",
            "Understand type coercion rules",
            "Use typeof and instanceof operators",
            "Convert between types explicitly",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "operators",
          title: "Operators & Expressions",
          description:
            "Master arithmetic, comparison, logical, and ternary operators. Understand operator precedence and short-circuit evaluation.",
          difficulty: "Beginner",
          time: "1-2 hours",
          whyMatters:
            "Operators are how programs make decisions. Short-circuit evaluation alone is a critical pattern used in every React codebase.",
          prerequisites: ["Variables & Declarations", "Data Types"],
          objectives: [
            "Use arithmetic and assignment operators",
            "Write comparison expressions with type awareness",
            "Leverage logical operators for conditional patterns",
            "Understand operator precedence",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "functions",
          title: "Functions",
          description:
            "Learn function declarations, expressions, arrow functions, parameters, default values, rest/spread, and higher-order functions.",
          difficulty: "Beginner",
          time: "3-4 hours",
          whyMatters:
            "Functions are the primary unit of composition in JavaScript. Mastery of functions unlocks functional programming patterns.",
          prerequisites: ["Operators & Expressions"],
          objectives: [
            "Write function declarations and expressions",
            "Use arrow functions with proper this binding",
            "Implement default parameters and rest params",
            "Create and use higher-order functions",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "scope",
          title: "Scope & Closures",
          description:
            "Understand global, function, and block scope. Master closures — one of JavaScript's most powerful and misunderstood features.",
          difficulty: "Intermediate",
          time: "3-4 hours",
          whyMatters:
            "Closures are used everywhere — from event handlers to React hooks. They enable data privacy and functional patterns.",
          prerequisites: ["Functions"],
          objectives: [
            "Explain lexical scoping rules",
            "Create and identify closures",
            "Use closures for data encapsulation",
            "Avoid common closure pitfalls in loops",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
      ],
    },
    {
      id: "intermediate",
      title: "Intermediate",
      description: "Essential data structures and browser APIs",
      nodes: [
        {
          id: "arrays",
          title: "Arrays & Iteration",
          description:
            "Master array methods — map, filter, reduce, find, some, every — and understand when to use each for clean, declarative code.",
          difficulty: "Intermediate",
          time: "3-4 hours",
          whyMatters:
            "Array methods replace imperative loops with declarative code. reduce alone can implement any array transformation.",
          prerequisites: ["Functions", "Scope & Closures"],
          objectives: [
            "Transform data with map, filter, reduce",
            "Search arrays with find, findIndex, some, every",
            "Chain array methods fluently",
            "Understand immutability vs mutation",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "objects",
          title: "Objects & Prototypes",
          description:
            "Deep dive into objects, property descriptors, prototypes, and prototypal inheritance — the foundation of JavaScript's OOP model.",
          difficulty: "Intermediate",
          time: "3-4 hours",
          whyMatters:
            "Everything in JavaScript is an object. Understanding prototypes is essential for debugging, performance, and inheritance patterns.",
          prerequisites: ["Data Types", "Functions"],
          objectives: [
            "Create and manipulate objects with literals and constructors",
            "Understand the prototype chain",
            "Implement prototypal inheritance",
            "Use Object static methods effectively",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "dom",
          title: "DOM Manipulation",
          description:
            "Learn to interact with the Document Object Model — selecting elements, traversing the DOM tree, and handling user interactions.",
          difficulty: "Intermediate",
          time: "3-4 hours",
          whyMatters:
            "The DOM is the bridge between JavaScript and the browser. Every frontend framework ultimately works with the DOM.",
          prerequisites: ["Functions", "Objects & Prototypes"],
          objectives: [
            "Select DOM elements with querySelector and getElement methods",
            "Create, append, and remove DOM nodes",
            "Traverse parent, child, and sibling elements",
            "Manipulate element attributes and styles",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "events",
          title: "Events & Event Handling",
          description:
            "Master the event system — bubbling, capturing, delegation, and custom events. Build interactive, responsive user interfaces.",
          difficulty: "Intermediate",
          time: "2-3 hours",
          whyMatters:
            "Event delegation is a critical performance pattern. Understanding event phases prevents subtle interaction bugs.",
          prerequisites: ["DOM Manipulation"],
          objectives: [
            "Attach and remove event listeners",
            "Understand event bubbling and capturing phases",
            "Implement event delegation patterns",
            "Create and dispatch custom events",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "es6",
          title: "ES6+ Features",
          description:
            "Modern JavaScript syntax — destructuring, template literals, modules, classes, promises, and the spread/rest operator.",
          difficulty: "Intermediate",
          time: "4-5 hours",
          whyMatters:
            "Modern JavaScript syntax makes code more readable and less error-prone. ES6+ is the baseline for all modern frameworks.",
          prerequisites: ["Functions", "Arrays & Iteration"],
          objectives: [
            "Use destructuring for arrays and objects",
            "Write template literals with embedded expressions",
            "Import and export ES modules",
            "Use classes with inheritance and static methods",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
      ],
    },
    {
      id: "advanced",
      title: "Advanced",
      description: "Deep JavaScript internals and asynchronous programming",
      nodes: [
        {
          id: "closures-deep",
          title: "Closures in Depth",
          description:
            "Revisit closures with a focus on practical patterns — module pattern, memoization, currying, and function factories.",
          difficulty: "Advanced",
          time: "3-4 hours",
          whyMatters:
            "Closures power every major JavaScript library and framework. They're essential for writing reusable, composable code.",
          prerequisites: ["Scope & Closures", "Functions"],
          objectives: [
            "Implement the module pattern with closures",
            "Create memoized functions for performance",
            "Write curried functions for partial application",
            "Build function factories for code reuse",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "prototypes",
          title: "Prototypes & Inheritance",
          description:
            "Deep dive into the prototype chain, class syntax internals, and composition over inheritance patterns.",
          difficulty: "Advanced",
          time: "3-4 hours",
          whyMatters:
            "Understanding prototypes demystifies how JavaScript works under the hood. Essential for debugging and writing performant code.",
          prerequisites: ["Objects & Prototypes"],
          objectives: [
            "Trace the prototype chain manually",
            "Implement classical vs prototypal inheritance",
            "Use Object.create for delegation",
            "Apply composition patterns over inheritance",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "event-loop",
          title: "Event Loop & Concurrency",
          description:
            "Understand JavaScript's single-threaded concurrency model — call stack, task queue, microtasks, and the event loop cycle.",
          difficulty: "Advanced",
          time: "3-4 hours",
          whyMatters:
            "The event loop determines how all asynchronous code executes. Misunderstanding it leads to race conditions and performance issues.",
          prerequisites: ["Functions", "ES6+ Features"],
          objectives: [
            "Explain the event loop cycle step by step",
            "Differentiate macrotasks from microtasks",
            "Predict async code execution order",
            "Avoid common concurrency pitfalls",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "async",
          title: "Async/Await & Promises",
          description:
            "Master asynchronous JavaScript — Promise chaining, error handling, async/await syntax, Promise combinators, and cancellation patterns.",
          difficulty: "Advanced",
          time: "4-5 hours",
          whyMatters:
            "Async programming is the backbone of modern web development. Every API call, file read, and timer operation is asynchronous.",
          prerequisites: ["Event Loop & Concurrency"],
          objectives: [
            "Create and chain Promises correctly",
            "Handle errors with try/catch and .catch()",
            "Use async/await for readable async code",
            "Implement Promise.all, race, allSettled, any",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "modules",
          title: "Modules & Bundlers",
          description:
            "Understand ES modules, CommonJS, module resolution, and how bundlers like Webpack and Vite optimize your code.",
          difficulty: "Advanced",
          time: "2-3 hours",
          whyMatters:
            "Module systems determine how code is organized and shipped. Understanding them is essential for configuring build tools.",
          prerequisites: ["ES6+ Features"],
          objectives: [
            "Export and import using ES module syntax",
            "Understand default vs named exports",
            "Configure dynamic imports for code splitting",
            "Explain how bundlers resolve and optimize modules",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
      ],
    },
    {
      id: "expert",
      title: "Expert",
      description: "Production-grade JavaScript patterns and performance",
      nodes: [
        {
          id: "design-patterns",
          title: "Design Patterns",
          description:
            "Learn creational, structural, and behavioral design patterns — Singleton, Observer, Factory, Module, Decorator, and more.",
          difficulty: "Expert",
          time: "4-5 hours",
          whyMatters:
            "Design patterns provide proven solutions to recurring problems. They form the vocabulary of experienced developers.",
          prerequisites: ["Closures in Depth", "Objects & Prototypes"],
          objectives: [
            "Implement Singleton and Module patterns",
            "Use Observer pattern for event systems",
            "Apply Factory and Strategy patterns",
            "Recognize patterns in popular libraries",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "performance",
          title: "Performance Optimization",
          description:
            "Master profiling, memory management, rendering optimization, bundle analysis, and performance monitoring tools.",
          difficulty: "Expert",
          time: "4-5 hours",
          whyMatters:
            "Performance directly impacts user experience and business metrics. Optimized code runs faster, uses less memory, and scales better.",
          prerequisites: ["Event Loop & Concurrency", "Design Patterns"],
          objectives: [
            "Profile and analyze JavaScript performance",
            "Identify and fix memory leaks",
            "Optimize rendering and layout performance",
            "Reduce bundle size with code splitting and tree shaking",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
        {
          id: "architecture",
          title: "Architecture & Best Practices",
          description:
            "Explore code organization, error handling patterns, testing strategies, and building maintainable large-scale JavaScript applications.",
          difficulty: "Expert",
          time: "3-4 hours",
          whyMatters:
            "Good architecture separates junior from senior developers. Well-architected code is easy to test, debug, and extend.",
          prerequisites: ["Design Patterns", "Modules & Bundlers"],
          objectives: [
            "Structure applications for maintainability",
            "Implement robust error handling strategies",
            "Write unit and integration tests",
            "Document APIs and code patterns effectively",
          ],
          resources: [
            { type: "video", label: "Watch Video", icon: "▶", url: "https://youtube.com" },
            { type: "docs", label: "Read Docs", icon: "📖", url: "https://developer.mozilla.org" },
            { type: "article", label: "Read Article", icon: "📝", url: "https://freecodecamp.org" },
            { type: "practice", label: "Practice Problems", icon: "💻", url: "https://leetcode.com" },
          ],
        },
      ],
    },
  ],
  resources: [
    {
      title: "MDN JavaScript Guide",
      description: "The definitive JavaScript reference maintained by Mozilla.",
      url: "https://developer.mozilla.org",
      type: "docs",
    },
    {
      title: "JavaScript.info",
      description: "Modern JavaScript tutorial from basics to advanced topics.",
      url: "https://javascript.info",
      type: "article",
    },
    {
      title: "FreeCodeCamp JavaScript",
      description: "Interactive JavaScript curriculum with certification.",
      url: "https://freecodecamp.org",
      type: "practice",
    },
    {
      title: "You Don't Know JS (YDKJS)",
      description: "Deep-dive book series into JavaScript mechanics by Kyle Simpson.",
      url: "https://github.com/getify/You-Dont-Know-JS",
      type: "article",
    },
  ],
};
