function hungry(meals, commands) {
    let mealsEaten = 0
    let actions = {
        Serve: () => {
            if (meals.length > 0)
                console.log(`${meals.pop()} served!`)
        },

        Add: ([meal]) => {
            if (meal !== ' ')
                meals.unshift(meal)
        },

        Shift: ([startIndex, endIndex]) => {
            if (startIndex && endIndex && startIndex >= 0 && endIndex < meals.length && startIndex < endIndex) {
                let temp = meals[startIndex]
                meals[startIndex] = meals[endIndex]
                meals[endIndex] = temp
            }
        },

        Eat: () => {
            if (meals.length > 0) {
                console.log(`${meals.shift()} eaten`)
                mealsEaten++
            }
        },

        Consume: ([startIndex, endIndex]) => {
            if (startIndex && endIndex && startIndex >= 0 && endIndex < meals.length && startIndex < endIndex) {
                let portionCount = endIndex - startIndex + 1
                meals.splice(startIndex, portionCount)
                mealsEaten += portionCount
                console.log("Burp!")
            }
        },
        End: () => {
            if (meals.length > 0) {
                console.log(`Meals left: ${meals.join(', ')}`)
            } else {
                console.log(`The food is gone`)
            }
            console.log(`Meals eaten: ${mealsEaten}`)
        }
    }

    for (let args of commands) {
        let commandParams = args.split(' ')
        let action = commandParams.shift()
        if (actions[action]) {
            actions[action](commandParams)
            if (action === 'End') {
                break
            }
        }
    }
}

hungry(['chicken', 'steak', 'eggs'],
    ['Serve', 'Eat', 'End', 'Consume 0 1'])