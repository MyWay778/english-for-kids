import {baseURL} from '../index';
import {decode} from 'node-base64-image';

const writeImageLocal = async (imageBase64File: string, fileName: string): Promise<string> => {
  const matches = imageBase64File.match(/^data:.+\/(.+);base64,(.*)$/);
  if (matches) {
    const data = matches[2];
    const name = `${fileName}-image`;
    const fpath = `${baseURL}/resources/${name}.jpeg`; // TODO: CHECK BEFORE DEPLOY!!!
    await decode(data, {fname: `uploads/${name}`, ext: 'jpeg'});
    return fpath;
  }
  return Promise.reject();
}

export default writeImageLocal;