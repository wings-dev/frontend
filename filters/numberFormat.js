export default function numberFormat(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return value.toLocaleString('de-DE', { maximumFractionDigits: 0 });
}
