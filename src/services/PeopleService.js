const makeName = () => {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i=0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const PeopleService = {
  index: () => {
    const data = ['Jim', 'Sally', 'Bender'];
    return {
      then(callback) {
        setTimeout(() => callback(data), 0);
      },
    };
  },
  makeName: () => makeName(),
};

export default PeopleService;
