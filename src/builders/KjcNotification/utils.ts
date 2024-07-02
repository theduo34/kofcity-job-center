export const formatErrorKey = (errorKey: string): string => {
  const words = errorKey.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(' ');
};