import Image from 'next/image';
import mlopsImage from '../public/mlops.svg';

export default function HomePage() {
    return (
        <>
            <h1 className="flex items-center justify-center text-[52px] font-[700] leading-[120%] lg:text-[70px] lg:font-[700] lg:leading-[120%]">
            MLOps Lifecycle
            </h1>
            <div className="flex flex-col items-center mt-8">
                <Image
                    src={mlopsImage}
                    alt="MLOps Lifecycle"
                    width={500}
                    height={300}
                />
                <p className="mt-4 text-center">
                    MLOps is the practice of integrating machine learning into the software development lifecycle. It involves managing and automating the deployment, monitoring, and governance of machine learning models in production. This enables organizations to effectively manage and scale their machine learning workflows.
                </p>
            </div>
        </>
    )
}