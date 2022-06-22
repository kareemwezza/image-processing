import sharp from 'sharp';
import fs from 'fs-extra';
import path from 'path';
import { CustomeError } from '../middlewares/errorHandler';

export default async (imageName: string, width: string, height: string) => {
  const thumbpath = path.join(
    process.cwd(),
    'images',
    'thumbnails',
    `${imageName}_${width}_${height}.jpg`
  );
  const imagePath = path.join(process.cwd(), 'images', `${imageName}.jpg`);
  const exists = await fs.pathExists(imagePath);
  if (exists) {
    const cached = await fs.pathExists(thumbpath);
    if (cached) {
      return thumbpath;
    }
    await sharp(imagePath)
      .resize({ width: parseInt(width), height: parseInt(height) })
      .toFile(thumbpath);
    return thumbpath;
  } else {
    throw new CustomeError('Sorry🙃! No Such Image Name Found In Our Records.');
  }
};
