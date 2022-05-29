// Problem 1 solved: ana to vori
function anaTovori(ana) {
    // conditions for type valid number
    if (typeof ana != "number") {
    return "please type valid characters";
    } else if (ana < 0) {
    console.log("please type positive number")
    }
    var vori = ana / 16;
    return vori;
    }
    const anaResult = anaTovori(32);
    console.log(anaResult);
    // problem 2 solved: Buy some food
    function pandaCost(singaraQuantity, samusaQuantity, jilapiQuantity) {
    let singaraPrice = 7;
    let samusaPrice = 10;
    let jilapiPrice = 15;
    // multiply foodPrice and foodQuantity
    const singaraMultiply = singaraPrice * singaraQuantity;
    const samusaMultiply = samusaPrice * samusaQuantity;
    const jilapiMultiply = jilapiPrice * jilapiQuantity;
    // calculate totalFood
    var totalFood = singaraMultiply + samusaMultiply + jilapiMultiply;
    return totalFood;
    }
    const totalFoodQuantity = pandaCost(1, 1, 1);
    console.log(totalFoodQuantity)
    // problem 3: picnicBudget
    function picnicBudget(numberOfPersone) {
    //define catagory and catagory cost price
    const firstCatagory = 5000;
    const secondCatagory = 4000;
    const lastCatagory = 3000;
    //define some other variable for calculating
    let totalCost = 0;
    let remainingPerson = 0;
    //checking: is numberOfPersone a number type or not
    if (typeof numberOfPersone === 'number') {
    //when input is number type
    switch (true) {
    case (numberOfPersone > 200):
    //cost calculation for more then 200 person
    totalCost = 100 * firstCatagory;
    totalCost += 100 * secondCatagory;
    remainingPerson = numberOfPersone - 200;
    totalCost += remainingPerson * lastCatagory;
    return totalCost;
    break;
    case (numberOfPersone > 100):
    //cost calculation for more then 100 person
    totalCost = 100 * firstCatagory;
    remainingPerson = numberOfPersone - 100;
    totalCost += remainingPerson * secondCatagory;
    return totalCost;
    break;
    case (numberOfPersone >= 0):
    //cost calculation for around 100 person
    totalCost = numberOfPersone * firstCatagory;
    return totalCost;
    break;
    default:
    //when no is negative
    return 'please input a positive no';
    }
    } else {
    //when input is not number type.
    return 'please input a number.';
    }
    }
    console.log(picnicBudget('90'));
    console.log(picnicBudget(-10));
    console.log(picnicBudget(0));
    console.log(picnicBudget(50));
    console.log(picnicBudget(100));
    console.log(picnicBudget(101));
    console.log(picnicBudget(199));
    console.log(picnicBudget(200));
    console.log(picnicBudget(201));
    console.log(picnicBudget(300));
    // problem 4 solved: fine odd string from array
    function oddFriend(friendList) {
    for (const name of friendList) {
    // take a single item from the array
    if (typeof (name) === 'string') {
    // when find a string in the array
    if (name.length % 2 == 1) {
    //when find a name with odd no of length.
    return name;
    } else if (name.length % 2 == 0) {
    // when all element value length is even
    var even = 'all name length is even value.';
    }
    } else {
    // when found: not a string type value
    return 'please input a string type array.';
    }
    }
    return even;
    }
    console.log(oddFriend(['ashpak', 'hamed', 'ajayan', 'arif hossain', 100]));
    console.log(oddFriend(['ashpak', 'hamed', 'ajayan', 'arif hossain']));
    console.log(oddFriend(['ashpak', 'hamed', 'ajayan', 'arif hossain']));