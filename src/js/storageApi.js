export const createStorage = key => {
  return {
    set(data) {
      localStorage.setItem(JSON.stringify(data));
    },

    get() {
      const res = localStorage.getItem(key);
      return res ? JSON.parse(res) : null;
    },
  };
};

// export const createStorage = key => {
//   return {
//     addCard(card) {
//       const response = localStorage.getItem(key);
//       const list = response ? JSON.parse(response) : [];
//       list.push(card);
//       localStorage.setItem(key, JSON.stringify(list));
//     },

//     removeCard(id) {
//       const response = localStorage.getItem(key);
//       const list = response ? JSON.parse(response) : [];

//       const updatedList = list.filter(({ _id }) => id !== _id);

//       localStorage.setItem(key, JSON.stringify(updatedList));
//     },
//   };
// };

/*

{
    _id: 1,
    burnedCalories: '312',
    time: '3',
    name: "Air bike",
    bodyPart: 'Waist',
    target: 'Abs',
  },
*/
