import Image from 'next/image'
import { FEATURES } from '@/constants'

interface FeatureItemProps {
    title: string;
    description: string;
    icon: string;
}

const FeatureItem = ({ title, description, icon }: FeatureItemProps) => {
    return (
        <li className='flex flex-1 flex-col w-full items-start mt-8'>
            <div className='rounded-full p-2 lg:p-7 bg-green-50'>
                <Image
                    src={icon}
                    alt={title}
                    width={28}
                    height={28}
                />
            </div>
            <h2 className='bold-20 mt-5 lg:bold-32 capitalize'>
                {title}
            </h2>
            <p className='regular-16 bg-white/80 text-gray-30 mb-5 
            lg:mt-[30px] lg:bg-none'>
                {description}
            </p>
        </li>
    )
}

const Features = () => {
  return (
    <section className='flexcenter flex-col overflow-hidden bg-feature-bg bg-center 
    bg-no-repeat py-24'>
        <div className='max-container padding-container relative w-full flex justify-end'>
            <div className='flex flex-1 lg:min-h-[900px]'>
                <Image
                    src='/phone.png'
                    alt='phone'
                    width={440}
                    height={1000}
                    className='feature-phone'
                />
            </div>

            <div className='z-20 flex w-full flex-col lg:w-[60%]'>
                <div className='relative'>
                    <Image
                        src='/camp.svg'
                        alt='camp'
                        width={50}
                        height={50}
                    />
                    <h2 className='bold-40 lg:bold-64'>Our Features</h2>
                </div>
                <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20'>
                    {FEATURES.map((feature) => (
                        <FeatureItem 
                            key={feature.title}
                            title={feature.title}
                            icon={feature.icon}
                            description={feature.description} 
                        />
                    ))}
                </ul>
            </div>
        </div>

    </section>
  )
}

export default Features