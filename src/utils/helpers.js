// Utility functions for the portfolio

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

export const generateEmailLink = (email, subject, body) => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
