import crypto from 'crypto';

const generateAuthToken = (): string => crypto.randomBytes(30).toString('hex');

export default generateAuthToken;