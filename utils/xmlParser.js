import { parseString } from "react-native-xml2js";

export const parseXML = (xml) => {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
