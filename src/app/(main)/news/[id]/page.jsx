import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoIosStar } from 'react-icons/io';

export const generateMetadata = async ({params}) => {
 const { id } =await params;

 const news = await getNewsDetailsById(id);

 return {
  title: `${news.title}`,
  description: news.details,
 }

}

// export const metadata = {
//   title: "Dragon News - Details",
//   description: "Read the latest news and updates on Dragon News",
// };

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;

    const news = await getNewsDetailsById(id);

    return (
        <div className="max-w-4xl mx-auto my-8">
            <div className="card bg-base-100  shadow-sm">
                <div className="card-body">
                    {/* Author information */}
                    <div className="flex justify-between items-center bg-slate-200 p-4 ">
                        <div className="flex items-center gap-3">
                            <Image src={news.author?.img} alt={news.author?.name} height={40} width={40} className="rounded-full" />
                            <div>
                                <h2 className="font-semibold">{news.author?.name}</h2>
                                <p className="text-xs">{news.author?.published_date}</p>
                            </div>

                        </div>
                        <div className="flex justify-between items-center gap-3">
                            <CiBookmark className="text-xl" />
                            <CiShare2 className="text-xl" />

                        </div>
                    </div>
                    <h2 className="card-title">{news.title}</h2>

                    <figure>
                        <Image
                            src={news.image_url}
                            alt={news.title}
                            width={300}
                            height={300}
                            className="w-full "
                        />
                    </figure>
                    <p className="">{news.details}</p>
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center  gap-2">
                            <h2 className="flex items-center gap-1"><IoIosStar className="text-lg text-yellow-500" />{news.rating?.number} </h2>
                            <div className="flex items-center gap-1">
                                <FaEye className="text-lg" />
                                <h2>{news.total_view}</h2>
                            </div>
                        </div>
                        <div>
                            <Link href={`/category/${news.category_id}`}>
                                <button className="btn bg-purple-500 text-white">See other news for this category <BsArrowRight /></button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default NewsDetailsPage;