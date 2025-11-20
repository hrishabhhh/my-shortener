import UrlForm from '../components/UrlForm';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Link Shortener
        </h1>
        <p className="text-center text-gray-600 mb-8">Shorten your long URLs</p>
        
        <UrlForm />
      </div>
    </div>
  );
}