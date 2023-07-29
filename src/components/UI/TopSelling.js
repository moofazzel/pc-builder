import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import StarRating from './StarRatings';

const TopSelling = () => {
    const [topSelling, setTopSellingLoading] = useState([])

    useEffect(() => {
        fetch('topSelling.json')
            .then(res => res.json())
            .then(data => setTopSellingLoading(data))
    }, [])

    console.log(topSelling)

    // if (topSellingLoading) {
    //     return <>Loading..</>
    // }
    return (
        <div className='container py-16 mx-auto overflow-hidden'>
            <div className='flex items-end justify-between px-10 mt-2' data-aos="fade-left">
                <h2 className='text-2xl font-semibold text-left md:text-3xl'>
                    Top Selling Products
                </h2>
            </div>
            <div>
                <div className='grid grid-cols-1 gap-12 mx-8 mt-8 md:grid-cols-2 md:mx-12' data-aos="fade-right">
                    {
                        topSelling.map(product => {
                            return <div className="items-center p-2 bg-white rounded-lg shadow-md md:p-6 lg:flex"
                                key={product._id}>
                                <img className="lg:mr-6 w-[70%] md:w-4/5 lg:w-[40%] mx-auto hover:scale-110 duration-300 cursor-pointer"
                                    src={product.images[0].i} alt="ProductImage" />
                                <div>
                                    <h2 className="mb-2 text-sm font-medium md:text-lg">{product.title}</h2>
                                    <p className="mb-4 text-gray-600">
                                        <StarRating rating={product.rating} />
                                    </p>
                                    <div className="flex items-center justify-center md:justify-start">
                                        <h3 className="mr-2 text-xs font-medium md:text-lg">TK.{product.price}</h3>
                                        <Link href={`/${product.category}/${product._id}`}
                                            className="px-4 py-2 text-sm text-black duration-300 border-2 rounded-lg hover:text-white border-r-main hover:bg-main hover:border-none md:text-lg lg:text-sm xl:text-lg"
                                        >View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default TopSelling;