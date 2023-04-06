exports.mapCSV = async (fileName, fileData) => {
  const lines = fileData.split('\n').map((line) => line.split(','))
  return {
    file: fileName,
    lines: lines.slice(1).map((line) => {
      return {
        text: line[1],
        number: parseInt(line[2]),
        hex: line[3]
      }
    })
  }
}
