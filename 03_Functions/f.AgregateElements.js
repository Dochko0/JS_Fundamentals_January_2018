function agregateElements(arr) {
    agregate(0, (a, b) => {
        return a + b
    });
    agregate(0, (a, b) => {
        return a + 1 / b
    });
    agregate("", (a, b) => {
        return a + b
    });

    function agregate(initialValue, arrow) {
        for (let i = 0; i < arr.length; i++) {
            initialValue = arrow(initialValue, arr[i])

        }
        console.log(initialValue)
    }
}

//agregateElements([1, 2, 3])