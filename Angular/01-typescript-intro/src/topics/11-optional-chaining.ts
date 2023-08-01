export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "Emmanuel",
};
const passenger2: Passenger = {
  name: "Martha",
  children: ["Jade"],
};

const returnChildrenNumber = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(passenger.name, howManyChildren);

  return howManyChildren;
};

returnChildrenNumber(passenger2);
returnChildrenNumber(passenger1);

returnChildrenNumber( passenger1);