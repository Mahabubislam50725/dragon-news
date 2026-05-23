import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async({params}) => {

    const {id} = await params;
    console.log(id, "params from news category page");

    const categories = await getCategories();

  const news = await getNewsByCategoryId(id);

    return (
         <div className="grid grid-cols-4 gap-4 container mx-auto my-[60px]">

      <div className=" col-span-1">
        <LeftSidebar categories={categories} activeId={id} />
      </div>

      <div className=" col-span-2">
       <h2 className="text-lg font-bold">News by category</h2>
       <div className="space-y-4 mt-6">
         {
         news.length > 0 ? news.map(n => {
            return <NewsCard key={n._id} news={n} />
          }) 
          : <div className="p-4 text-center text-gray-500">No news found for this category.</div>
        }
       </div>
      </div>

      <div className="col-span-1">
        <RightSidebar />
      </div>

    </div>
    );
};

export default NewsCategoryPage;