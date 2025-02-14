# React useEffect setInterval Memory Leak

This repository demonstrates a common error in React applications involving the `useEffect` hook and `setInterval`.  Forgetting to include a cleanup function in `useEffect` when using `setInterval` leads to memory leaks.  The counter will continue to increment even after the component is unmounted.

## Bug
The `bug.js` file shows the faulty implementation. The `setInterval` is started but never cleared, resulting in a memory leak.

## Solution
The `bugSolution.js` file provides the corrected version.  A cleanup function is added to clear the interval using `clearInterval` when the component unmounts or when the dependency array changes.