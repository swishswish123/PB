// src/utils/imagePath.js
export const imgPath = (file) => {
  // remove leading slashes if any, then prepend base
  const cleanFile = file.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}images/${cleanFile}`;
};
