function getValuesName(object: Object) {
  return Object.values(object).filter((key) => isNaN(parseInt(key)));
}

export { getValuesName };
