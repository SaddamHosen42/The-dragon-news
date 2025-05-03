import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RighAside from "../components/homelayout/RighAside";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
    const newsData=useLoaderData();
    const {id}=useParams();
   // console.log(newsData,id);
    const [news,setNews]=useState([]);
    useEffect(()=>{
        const newsDetails=newsData.find((singleNews)=>singleNews.id==id);
        setNews(newsDetails);
    },[ newsData,id])
    
  return (
    <div>
      <header className="py-4">
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-4 gap-5">
        <section className="col-span-3 space-y-5">
          <h1 className="text-2xl font-bold">Dragon News</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-1">
          <RighAside></RighAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
