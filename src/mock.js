const response = [
  {
    id: 1,
    title: "Clean the kitchen",
    description:
      "Mop the floor, wipe the countertop and don't forget to take out the trash! Mop the floor, wipe the countertop and don't forget to take out the trash!  Mop the floor, wipe the countertop and don't forget to take out the trash!  Mop the floor, wipe the countertop and don't forget to take out the trash! Mop the floor, wipe the countertop and don't forget to take out the trash! Mop the floor, wipe the countertop and don't forget to take out the trash!  Mop the floor, wipe the countertop and don't forget to take out the trash!  Mop the floor, wipe the countertop and don't forget to take out the trash!Mop the floor, wipe the countertop and don't forget to take out the trash! Mop the floor, wipe the countertop and don't forget to take out the trash!  Mop the floor, wipe the countertop and don't forget to take out the trash!  Mop the floor, wipe the countertop and don't forget to take out the trash!",
  },
  {
    id: 2,
    title: "Call Mom",
    description:
      "It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday! It's her birthday!",
  },
  {
    id: 3,
    title: "Water flowers",
    description:
      "They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die. They need water, or they will die.",
  },
];

export const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), 2000);
  });
};
