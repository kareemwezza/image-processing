import app from '../index';
import supertest from 'supertest';

import resize from '../utils/resize';
import { CustomeError } from '../middlewares/errorHandler';

const request = supertest(app);

describe('This suit is for testing our api to process images 😗', () => {
  it('Test Entry endpoint status', async () => {
    const respone = await request.get('/');
    expect(respone.status).toBe(200);
  });

  it('Test our Resizing Image function', async () => {
    expect(await resize('fjord', '500', '500')).toBeTruthy();
  });

  it('Test our Resizing Image function to throw an error', async () => {
    try {
      await resize('as', '500', '500');
    } catch (error) {
      expect(error).toBeInstanceOf(CustomeError);
    }
  });

  it('Test our API Image when fails', async () => {
    const respone = await request.get(
      '/images/resize?name=unknownImage&height=800&width=500'
    );
    expect(respone.status).toBe(501);
  });
});
