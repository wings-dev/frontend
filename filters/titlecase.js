export default function (value) {
  if (!value) return '';
  value = value.toString();
  return value.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
