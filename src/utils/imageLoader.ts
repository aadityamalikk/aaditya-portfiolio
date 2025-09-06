// Image loading utility with multiple fallback strategies
export const loadImage = (src: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const getProfileImageSrc = async (): Promise<string> => {
  const imagePaths = [
    '/aaditya-profile.jpg',
    './aaditya-profile.jpg',
    'aaditya-profile.jpg',
    `${process.env.PUBLIC_URL}/aaditya-profile.jpg`,
  ];

  for (const path of imagePaths) {
    try {
      await loadImage(path);
      console.log(`✅ Profile image loaded successfully from: ${path}`);
      return path;
    } catch (error) {
      console.warn(`❌ Failed to load image from: ${path}`);
    }
  }

  throw new Error('All image paths failed');
};

export const createPlaceholderAvatar = (initials: string = 'AM'): string => {
  const canvas = document.createElement('canvas');
  canvas.width = 350;
  canvas.height = 350;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 350, 350);
    gradient.addColorStop(0, '#00d4aa');
    gradient.addColorStop(1, '#6366f1');
    
    // Draw background
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 350, 350);
    
    // Draw initials
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 120px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(initials, 175, 175);
  }
  
  return canvas.toDataURL();
};