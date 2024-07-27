import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, email, feedback } = data;

    // Save feedback to your database or handle it as needed
    // ...

    return {
      status: 200,
      body: { message: 'Feedback submitted successfully' }
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: { error: 'Failed to submit feedback' }
    };
  }
}