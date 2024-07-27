import { PrismaClient } from '@prisma/client';
import { parse } from 'node:path';
import { writeFileSync } from 'node:fs';

const prisma = new PrismaClient();

export async function POST({ request }) {
  try {
    const data = await request.formData();
    const name = data.get('name');
    const type = data.get('type');
    const file = data.get('file');
    
    const { filename } = parse(file.name);
    const filePath = `public/docs/${filename}`;

    writeFileSync(filePath, Buffer.from(await file.arrayBuffer()));

    const document = await prisma.document.create({
      data: {
        name,
        fileType: type,
        fileUrl: `/docs/${filename}`
      }
    });

    return {
      status: 200,
      body: document
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: { error: 'Failed to upload document' }
    };
  }
}