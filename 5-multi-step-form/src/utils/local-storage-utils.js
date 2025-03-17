export const saveFormDataToLocalStorage = (currentStep, formData) => {
  const formWithStep = { ...formData, currentStep };

  localStorage.setItem("form", JSON.stringify(formWithStep));
};

export const retrieveFormDataFromLocalStorage = () => {
  const savedFormData = localStorage.getItem("form");

  return savedFormData ? JSON.parse(savedFormData) : null;
};

export const removeFormDataFromLocalStorage = () => {
  localStorage.removeItem("form");
};
