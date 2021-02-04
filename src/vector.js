makeVector3D = (x = 0, y = 0, z = 0) => {
  let vector = {};
  vector["x"] = vector["0"] = x;
  vector["y"] = vector["1"] = y;
  vector["z"] = vector["2"] = z;

  return vector;
};

module.exports = {
  makeVector3D,
};
