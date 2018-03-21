function guid() {
  function s4() {
    const max_int = 65536;
    return Math.floor((1 + Math.random()) * max_int)
    .toString(16)
    .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
