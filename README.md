# React useEffect Cleanup Issue

This repository demonstrates a common error in React's `useEffect` hook: improper cleanup of an interval. The `setInterval` function continues running even after the component unmounts, potentially causing memory leaks and unexpected behavior.

## Problem
The provided `MyComponent` uses `useEffect` with `setInterval` to update a counter. However, the cleanup function within the `useEffect` hook is either missing or incorrect. This means that the interval keeps running even after the component is unmounted.  The app may continue to update the count indefinitely and consume extra resources.

## Solution
The solution involves ensuring the interval is properly cleared in the cleanup function. This prevents the interval from running after the component is unmounted.