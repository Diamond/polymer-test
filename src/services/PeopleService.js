const PeopleService = {
  index: () => {
    const data = ['Jim', 'Sally', 'Bender'];
    return {
      then(callback) {
        setTimeout(() => callback(data), 5000);
      }
    };
  },
};

export default PeopleService;
