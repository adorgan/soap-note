const makeCommaList = require("../utils/makeCommaList");
const makeFim = (
  eating,
  grooming,
  UBDressing,
  LBDressing,
  toileting,
  toiletTf,
  tubTf
) => {
  let fimStr = [];

  if (eating !== "") {
    fimStr.push(`eating: ${eating}`);
  }
  if (grooming !== "") {
    fimStr.push(`grooming: ${grooming}`);
  }
  if (UBDressing !== "") {
    fimStr.push(`upper body dressing: ${UBDressing}`);
  }
  if (LBDressing !== "") {
    fimStr.push(`lower body dressing: ${LBDressing}`);
  }
  if (toileting !== "") {
    fimStr.push(`toileting: ${toileting}`);
  }
  if (toiletTf !== "") {
    fimStr.push(`toilet transfers: ${toiletTf}`);
  }
  if (tubTf !== "") {
    fimStr.push(`tub transfers: ${tubTf}`);
  }
  if (fimStr.length !== 0) {
    return `FIM: ${makeCommaList(fimStr)}`;
  }

  return "";
};

module.exports = makeFim;
