"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
  brand: string;
  price: number;
}

interface Category {
  slug: string;
  name: string;
  url: string;
}

export function Projects() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 6;
//ເນື່ອງຈາກຂໍ້ມູນທີ່ໃຊ້ໃນ API Jsonplaceholderc,ສະແດງຮູບພາບຍາກເລີຍປ່ຽນdumm ແທນ ບໍ່ມີຫຼາຍເລີຍເລືອກ 6 ສິນຄ້າ ແລະ 6 ໝວດແທນທີProjects
  const fetchProducts = async (categorySlug: string, page: number) => {
    setIsLoading(true);
    const skip = (page - 1) * limit;
    let url =
      categorySlug === "all"
        ? `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/products/category/${categorySlug}?limit=${limit}&skip=${skip}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      // Add delay to simulate loading
      setTimeout(() => {
        setProducts(data.products || []);
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setProducts([]);
      setIsLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/categories");
      const data: Category[] = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts("all", 1);
  }, []);

  useEffect(() => {
    fetchProducts(selectedCategory, currentPage);
  }, [selectedCategory, currentPage]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore projects with filters, pagination, and live data.
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            onClick={() => handleCategoryChange("all")}
          >
            All
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.slug}
              variant={selectedCategory === cat.slug ? "default" : "outline"}
              onClick={() => handleCategoryChange(cat.slug)}
              className="capitalize"
            >
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Product Grid + Beautiful Loading Overlay */}
        <div className="relative min-h-[400px]">
          {isLoading && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center backdrop-blur-sm bg-white/60 dark:bg-slate-900/60">
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
                <div className="absolute inset-2 rounded-full bg-white dark:bg-slate-900"></div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm font-medium animate-pulse">
                Loading projects…
              </p>
            </div>
          )}

          {!isLoading && (
            <>
              {/* Product Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group dark:bg-slate-800 dark:border-slate-700">
                      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg text-gray-900 dark:text-white">
                            {product.title}
                          </CardTitle>
                          <Badge
                            variant="secondary"
                            className="capitalize dark:bg-slate-700 dark:text-gray-300"
                          >
                            {product.category}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                          {product.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge
                            variant="outline"
                            className="text-xs dark:border-slate-600 dark:text-gray-300"
                          >
                            {product.brand}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-xs dark:border-slate-600 dark:text-gray-300"
                          >
                            ${product.price}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 dark:border-slate-600 dark:text-gray-300 dark:hover:bg-slate-700"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-10 gap-4">
                <Button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  variant="outline"
                >
                  Previous
                </Button>
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Page {currentPage}
                </span>
                <Button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={products.length < limit}
                  variant="outline"
                >
                  Next
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
