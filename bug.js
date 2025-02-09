```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: attempting to update count after unmount
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function is missing or incorrect
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```