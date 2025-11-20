import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';
interface IProps{
  params:{
    code:string
  }
}
export default async function RedirectPage({ params }: IProps) {

  const shortCode=await params;
// return;
 const url = await prisma.shortURLS.findUnique({
    where: { shortCode: shortCode.code },
  });
  console.log("URL:",url?.longUrl);

  if (!url) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-red-600">404 - Link Not Found</h1>
          <p className="mt-2 text-gray-600">This short link does not exist.</p>
        </div>
      </div>
    );
  }

  // Redirect to long URL
  redirect(url?.longUrl);
}