"use client";

import NewsHero from "@/components/news/NewsHero";
import NewsList from "@/components/news/NewsList";
import NewsCategories from "@/components/news/NewsCategories";
import Newsletter from "@/components/news/Newsletter";

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsCategories />
      <NewsList />
      <Newsletter />
      {/* Spacer for footer */}
      <div className="h-24 bg-light"></div>
    </>
  );
}