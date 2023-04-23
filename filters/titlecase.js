export default function (value) {
  if (!value) return '';
  value = value.toString();

  const turkishLocaleUpperCase = (char) => {
    const turkishUpperMap = {
      'ç': 'Ç',
      'ğ': 'Ğ',
      'ş': 'Ş',
      'ü': 'Ü',
      'ı': 'I',
      'ö': 'Ö',
    };
    return turkishUpperMap[char] || char.toUpperCase();
  };

  return value
    .toLowerCase()
    .replace(/(^|\s)\S/g, function (char) {
      return turkishLocaleUpperCase(char);
    });
}
