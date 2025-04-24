import { Link } from "react-router-dom";
import ProductCard from "./shared/ProductCard";
import { FaLeaf, FaAward, FaHeadset, FaShippingFast } from 'react-icons/fa';
import Footer from "./home/Footer";

const products = [
    {
        image: "https://hamariweb.com/mobiles/LargeImages/5781_01.jpg",
        productName: "iPhone 13 Pro Max",
        description: "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features.",
        specialPrice: 720,
        price: 780,
    },
    {
        image: "https://cdn.mos.cms.futurecdn.net/Pu2kYW2xyjccDoHtnq22za-970-80.jpg.webp",
        productName: "Samsung Galaxy S21",
        description: "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design.",
        specialPrice: 699,
        price: 799,
    },
    {
        image: "https://www.zdnet.com/a/img/resize/41fc184bcf2fb37489953dc5944733a130e4cf64/2021/10/25/9005c597-eb8c-4e48-b184-e4e9fe163f16/google-pixel-6-06.jpg?auto=webp&width=1280",
        productName: "Google Pixel 6",
        description: "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display for Android enthusiasts.",
        price: 599,
        specialPrice: 400,
    }
];

const About = () => {
    return (
      <div>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Hero Section */}
            <section className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    About Our Company
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    We're revolutionizing the way you shop for tech with premium products, exceptional service, and unbeatable prices.
                </p>
            </section>

            {/* About Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-12 mb-20">
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-3xl font-bold text-blue-400">Our Story</h2>
                    <p className="text-lg text-gray-300">
                        Founded in 2025, we started with a simple mission: to make cutting-edge technology accessible to everyone. 
                        What began as a small online store has grown into a trusted destination for tech enthusiasts worldwide.
                    </p>
                    <p className="text-lg text-gray-300">
                        We carefully curate our collection to bring you only the best devices that combine performance, design, and value.
                    </p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500">
                            <h3 className="text-2xl font-bold">10,000+</h3>
                            <p className="text-gray-400">Happy Customers</p>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500">
                            <h3 className="text-2xl font-bold">100+</h3>
                            <p className="text-gray-400">Premium Products</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                    <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                        alt="Our Team"
                        className="w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute -bottom-6 -left-6 bg-blue-600 p-4 rounded-lg shadow-lg hidden md:block">
                        <FaAward className="text-3xl" />
                    </div>
                </div>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300">
                    <FaLeaf className="text-4xl text-green-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
                    <p className="text-gray-400">Sustainable packaging and responsible sourcing</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300">
                    <FaAward className="text-4xl text-yellow-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
                    <p className="text-gray-400">Only the best products from trusted brands</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300">
                    <FaHeadset className="text-4xl text-blue-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                    <p className="text-gray-400">Dedicated customer service team</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300">
                    <FaShippingFast className="text-4xl text-purple-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                    <p className="text-gray-400">Delivery within 2-3 business days</p>
                </div>
            </div>

            {/* Featured Products */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Our some of the most selling featured products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <ProductCard 
                            key={index}
                            image={product.image}
                            productName={product.productName}
                            description={product.description}
                            specialPrice={product.specialPrice}
                            price={product.price}
                            about
                        />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Best?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">Join thousands of satisfied customers who trust us for their tech needs.</p>
                <Link to={"/products"}>
                <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300">
                    Shop Now
                </button>
                </Link>
            </section>
        </div>
        <Footer/>
        </div>
    );
}

export default About;