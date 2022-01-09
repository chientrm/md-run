const getUri = require("get-uri");
const toString = require("stream-to-string");

const read = async (uri) => {
  const readable = await getUri(uri);
  const text = await toString(readable);
  return text;
};

module.exports = { read };
