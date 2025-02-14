```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback function should be wrapped with a cleanup function.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```