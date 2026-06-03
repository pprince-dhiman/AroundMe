import DatauriParser from 'datauri/parser.js';
import path from 'path';

const parser = new DatauriParser();

export const getDataURI = (file) => {
  const extension = path.extname(file.originalname).toString();
  return parser.format(extension, file.buffer);
}