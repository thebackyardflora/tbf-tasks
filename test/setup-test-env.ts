import {prismaMock} from './prisma-mock';
import {mockReset} from 'vitest-mock-extended';

beforeEach(() => {
  mockReset(prismaMock);
});
