const getStoredDonatedData = () => {
  const storedDonatedData = localStorage.getItem("donation");
  if (storedDonatedData) {
    return JSON.parse(storedDonatedData);
  }
  return [];
};

const saveDonatedData = (id) => {
  const storedDonatedData = getStoredDonatedData();
  const isExist = storedDonatedData.find((donateId) => donateId === id);
  //   console.log(isExist);
  if (!isExist) {
    storedDonatedData.push(id);
    localStorage.setItem("donation", JSON.stringify(storedDonatedData));
  }
};

export { getStoredDonatedData, saveDonatedData };
