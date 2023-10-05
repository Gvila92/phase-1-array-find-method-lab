function superbowlWin(objects) {
    const winObject = objects.find(object => object.result === "W");
    return winObject ? winObject.year : undefined;
  }