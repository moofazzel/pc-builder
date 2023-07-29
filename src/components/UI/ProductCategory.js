import Link from 'next/link';
import { useEffect, useState } from 'react';


const ProductCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('category.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)
    return (
        <div className="container px-4 py-16 mx-auto lg:py-20"
            style={{ overflow: "hidden" }}
        >
            <div className="mx-auto mb-10 sm:text-center" data-aos="fade-left">
                <h2 className='mb-4 text-2xl font-semibold text-center md:text-3xl'>
                    Products Category
                </h2>
                <p className='text-sm font-semibold text-center md:text-base'>Get Your Desired Product from Products Category!</p>
            </div>
            <div className="grid grid-cols-2 gap-8 mx-auto md:grid-cols-3 lg:grid-cols-5" data-aos="fade-right">

                {
                    categories.map(category => {
                        return (
                            <Link href={`/${category.category}`} key={category.id} className="flex flex-col items-center p-3 duration-200 border-2 rounded-md card-style hover:bg-main hover:text-white border-main">

                                <p className="text-sm font-semibold">
                                    {category.title}
                                </p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductCategory;