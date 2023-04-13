export const shareOnFacebook = (url) => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
};

export const shareOnTwitter = (url) => {
  window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
};

export const shareOnWhatsApp = (url) => {
  window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
};
