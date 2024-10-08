import React from "react";
import PageTemplate from './PageTemplate';
import Subtitle from './Subtitle';

const CurrentProjectsTemplate = ({title, text, pic }) => {
    const aa = (
        <main className = 'mt-4'>
                {/* Header Section */}
            <div className = 'flex flex-col gap-10 md:gap-16'>
                <div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 bg-white flex flex-col items-center gap-10 pt-12">
                        <Subtitle text="Current Projects" />
                        <div className="text-center text-[#181818] text-3xl sm:text-4xl font-semibold">
                            {title}
                        </div>
                        {/* lg:mx-60 currentProject-md:mx-10 mx-10 */}
                        <div className="text-center text-[#5c5c5c] text-md sm:text-xl font-[400] currentProject-md:mx-20 currentProjectText-md:mx-10">
                            {text}
                        </div>
                </div>

                {/* <div className="lg:mx-96 currentProject-md:mx-32 sm:mx-28 mx-8 items-center"> */}
                <div className="currentProject-md:mx-96 navbar-transition:mx-80 currentProjectText-mx:mx-56 sm:mx-40 currentProjectText-ms:mx-32 currentProjectText-mss:mx-24 mx-10 items-center">
                  <img className="w-full rounded-xl" src={pic} alt="Desk Image" />
                </div>

                {/* <div className="currentProject-md:mx-78 currentProjectText-md:mx-78 currentProjectText-mx:mx-42 sm:mx-20 mx-5 mb-10"> */}
                <div className="currentProject-md:mx-78 navbar-transition:mx-64 currentProjectText-mx:mx-52 sm:mx-36 currentProjectText-ms:mx-28 currentProjectText-mss:mx-20 mx-10 mb-20">
                    <div className="currentProject-md:text-3xl currentProjectText-md:text-3xl currentProjectText-mx:text-2xl sm:text-2xl text-xl font-semibold text-center text-[#181818]">
                        Details about this project will be revealed soon. Check back later!
                    </div>
                </div>

            </div>
            
        </main>
            
    );

    return <PageTemplate component={aa} />;
};

export default CurrentProjectsTemplate;
