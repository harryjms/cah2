export default (length: number = 6) => {
  let shortId = "";
  const selectFrom = "abcdefghijklmnopqrstuvwxyz0123456789";
  const upperLimit = selectFrom.length;
  const chars = selectFrom.split("");
  for (let i = 0; i < length; i++) {
    shortId += chars[Math.floor(Math.random() * upperLimit)].toUpperCase();
  }
  return shortId;
};
