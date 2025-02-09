```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId; // Declare intervalId here
    intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Correct cleanup
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```