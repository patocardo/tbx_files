exports.mapCSV = async (fileName, fileData) => {
  return {
    file: fileName,
    lines: fileData.map((line) => {
      return {
        text: line[0],
        number: parseInt(line[1]),
        hex: line[2],
      };
    }),
  };
}
