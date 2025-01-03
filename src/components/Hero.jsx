import React from 'react'

const Hero = ({ title = 'My Title', subtitle = 'My subtitle' }) => {
    return (
        <section className="bg-primaryBg py-10">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="text-center">
                    <h1
                        className="text-4xl font-extrabold text-onPrimaryBg sm:text-5xl md:text-6xl"
                    >
                        {title}
                    </h1>
                    <p className="my-4 text-xl text-onPrimaryBg">
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero
