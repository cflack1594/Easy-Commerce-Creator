/**
 *
 * @param {Object} formIn - form ele
 * @returns {Object} - creates a single object using the ID tag names and values
 */
export const processFormData = (formIn) => {
  return Array.from(formIn)
    .filter(({ id }) => id)
    .map(({ id, value }) => ({ [id]: value }))
    .reduce((accumulatedData, currentData) => ({
      ...accumulatedData,
      ...currentData,
    }));
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: "2",
});
