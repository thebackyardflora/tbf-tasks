import 'source-map-support/register';
import { ScheduledHandler } from 'aws-lambda';
import { prisma } from '../db';

export const handler: ScheduledHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  const userCount = await prisma.user.count();

  console.log({ userCount });

  return;
};