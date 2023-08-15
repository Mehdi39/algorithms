function createCounterTS(n) {
    return () => n++
}

createCounterTS(2)