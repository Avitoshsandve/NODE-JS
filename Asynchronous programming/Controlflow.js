function Avito() {
    let travel = '';
    let i = 20;
    for (i; i > 0; i -= 1) {
      travel += `${i} people in the bus, one gets up and goes down, ${
        i - 1
      } people in the bus\n`;
      if (i === 1) {
        travel += "Hey the bus is empty";
      }
    }
  
    return travel;
  }
  
  function person(travel) {
    if (!travel) throw new Error("Bus is '' empty, pick passengers!");
    console.log(travel);
  }
  
  const journey= Avito();
  person(journey)
  
  