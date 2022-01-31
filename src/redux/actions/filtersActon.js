export const setSortBy = ({ type, order }) => ({
  type: 'SET_BY_SORT',
  payload: { type, order },
});

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});
