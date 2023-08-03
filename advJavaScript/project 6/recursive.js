function recursive(i) {
    console.log(i);
    if (i < 10) {
        return recursive(i + 1);
    }
    return;
}
recursive(0);