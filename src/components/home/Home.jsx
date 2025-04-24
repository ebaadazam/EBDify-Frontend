// import { useDispatch, useSelector } from "react-redux";
// import HeroBanner from "./HeroBanner";
// import { useEffect } from "react";
// import { fetchProducts } from "../../store/actions";
// import ProductCard from "../shared/ProductCard";
// import Loader from "../shared/Loader";
// import { FaExclamationTriangle } from "react-icons/fa";
// import Footer from "./Footer";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { products } = useSelector((state) => state.products);
//   const { isLoading, errorMessage } = useSelector((state) => state.errors);
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);
//   return (
//     <div>
//       <div className="lg:px-14 sm:px-8 px-4">
//         <div className="py-6">
//           <HeroBanner />
//         </div>

//         <div className="py-5">
//           <div className="flex flex-col justify-center items-center space-y-2">
//             <h1 className="text-slate-800 text-4xl font-bold"> Products</h1>
//             <span className="text-slate-700">
//               Discover our handpicked selection of top-rated items just for you!
//             </span>
//           </div>

//           {isLoading ? (
//             <Loader />
//           ) : errorMessage ? (
//             <div className="flex justify-center items-center h-[200px]">
//               <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
//               <span className="text-slate-800 text-lg font-medium">
//                 {errorMessage}
//               </span>
//             </div>
//           ) : (
//             <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
//               {products &&
//                 products
//                   ?.slice(0, 9)
//                   .map((item, i) => <ProductCard key={i} {...item} />)}
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Home;


import { useDispatch, useSelector } from "react-redux";
import HeroBanner from "./HeroBanner";
import { useEffect } from "react";
import { fetchProducts } from "../../store/actions";
import ProductCard from "../shared/ProductCard";
import Loader from "../shared/Loader";
import { FaExclamationTriangle, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const { isLoading, errorMessage } = useSelector((state) => state.errors);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSeeMore = () => {
    navigate("/products");
  };

  // Categories data
  const categories = [
    { name: "Smartphones", icon: "📱", count: 42 },
    { name: "Laptops", icon: "💻", count: 28 },
    { name: "Home Appliances", icon: "🎧", count: 35 },
    { name: "Books", icon: "📷", count: 19 },
    { name: "Furniture", icon: "⌚", count: 31 },
    { name: "Sports Equipment", icon: "🎮", count: 27 },
  ];

  return (
    <div>
    <div className="lg:px-14 sm:px-8 px-4">
      <div className="py-6">
        <HeroBanner />
      </div>

      {/* Featured Products Section */}
      <div className="py-5">
        <div className="flex flex-col justify-center items-center space-y-2 mb-8">
          <h1 className="text-slate-800 text-4xl font-bold">Featured Products</h1>
          <span className="text-slate-700">
            Discover our handpicked selection of top-rated items just for you!
          </span>
        </div>

        {isLoading ? (
          <Loader />
        ) : errorMessage ? (
          <div className="flex justify-center items-center h-[200px]">
            <FaExclamationTriangle className="text-slate-800 text-3xl mr-2" />
            <span className="text-slate-800 text-lg font-medium">
              {errorMessage}
            </span>
          </div>
        ) : (
          <>
            <div className="pb-6 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
              {products &&
                products
                  ?.slice(0, 5)
                  .map((item, i) => <ProductCard key={i} {...item} />)}
            </div>
            
            <div className="flex justify-center mt-8 mb-12">
              <button 
                onClick={handleSeeMore}
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                <span className="mr-2 font-medium">See More Products</span>
                <FaArrowRight />
              </button>
            </div>
          </>
        )}
      </div>

      {/* Categories Section */}
      <div className="py-12 bg-gray-50 rounded-xl mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Categories List */}
          <div className="w-full lg:w-1/2 px-6 lg:px-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Categories to browse specific products
            </h2>
            <p className="text-slate-600 mb-8">
              Explore our wide range of product categories to find exactly what you need
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => navigate(`/products?category=${category.name.toLowerCase()}`)}
                  className="flex flex-col items-center justify-center p-4 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 h-32 w-32 border border-gray-200 hover:border-blue-400"
                >
                  <span className="text-3xl mb-2">{category.icon}</span>
                  <span className="font-medium text-sm">{category.name}</span>
                  <span className="text-xs text-gray-500 mt-1">{category.count} items</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Category Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-6">
            <img 
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Product Categories"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;