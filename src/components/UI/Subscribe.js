
const Subscribe = () => {
    return (
        <section
            className="container py-16 mx-auto mb-12 text-center rounded-lg bg-info bg-[#f37175] text-white"
            data-aos="fade-up"
        >
            <h4 className="mb-3 text-xl font-bold leading-9 md:text-2xl">
                LET'S STAY IN TOUCH
                <br />
                FOR BEST DEALS
            </h4>
            <p className="mb-4 text-sm font-semibold md:text-base">Get latest update and offers from Jizziby</p>
            <div className="mx-auto form-control">
                <label className="justify-center input-group">
                    <input type="text" placeholder="demo@gmail.com" className="p-2 px-4 border border-white rounded-l-md" />
                    <button type='submit' className='btn border border-white btn-primary text-white  py-2 hover:text-black duration-300 w-1/4 md:w-[12%] text-sm md:text-base font-bold rounded-r-md '>Subscribe</button>
                </label>
            </div>
        </section>
    );
};

export default Subscribe;