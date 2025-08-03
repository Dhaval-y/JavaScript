for (let i=0; i < 10; i++) 
    {
    console.log(`Outer loop iteration: ${i}`);
    for (let j=0; j < 10; j++) {
        console.log(`Inner Loop is ${j} and outer loop is ${i}`);
    }
    }