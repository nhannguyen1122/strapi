export const findIndex = <T extends { id: string }>(
  data: T[],
  comparedId: string
): number => {
  let result = -1;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === comparedId) {
      result = i;
    }
  }

  return result;
};
