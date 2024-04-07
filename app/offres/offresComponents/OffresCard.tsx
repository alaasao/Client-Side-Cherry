import React from 'react'
import LargeCard from './LargeCard'
import SmallCard from './SmallCard'
import Link from 'next/link'
type Demoprop={
  title:string,
  image:string,
  start:Date,
  end:Date,
  price:number,
  id:number,
  isOffre:Boolean,
  prixavant:number,
}
const OffresCard = (props :Demoprop) => {
  const startdate = props.start.toLocaleDateString();
  const enddate = props.start.toLocaleDateString();

  const percantge= Math.round(props.price/props.prixavant*100)
  return (
    <div className='flex w-full flex-col justify-center items-center'>
      {props.isOffre &&
        <div className='flex justify-evenly w-full items-center'>
            <div className=' grid md:grid-cols-[1.25fr_1.5fr] 2xl:grid-cols-[1fr_1fr] grid-cols-[1.8fr_2fr] h-[20%] items-center justify-between gap-4 w-[90%]  md:w-[90%] md:h-[20%] border-2 2xl:border-4  border-[#D12621]  rounded-[20px] '>
                <div className='flex justify-start  h-full w-full overflow-hidden '>
                              <div className='relative h-full  top-0 left-0  '>
                                <p className='absolute  flex w-[60px] sm:w-[100px] lg:w-[120px] 2xl:w-[250px] border-y border-black sm:h-[30px] lg:h-[50px] 2xl:h-[100px] sm:text-center text-start  items-center text-white text-[0.7rem] skew-y-[-40deg] h-[20px] bg-[#D12621] '>
                                  <span className='p-1 sm:p-4 lg:p-5  2xl:p-10 lg:text-lg 2xl:text-4xl  sm:text-xs skew-y-[1deg] font-bold '>-20%</span>
                                </p> 
                              </div>
                              <img src={`${props.image}`} 
                                  className='w-full h-full rounded-l-[18px] rounded-r-none  items-center 2xl:rounded-[15px] ' 
                                  alt="haha" 
                                  width={500} 
                                  height={500}
                                  
                              />
                              
                </div>     
                  
                <div className='flex flex-col max-w-[1500px] h-full  w-full justify-evenly '>
                         <div className='2xl:flex 2xl:flex-col 2xl:justify-between gap-10'>
                            <p className='text-sm sm:text-2xl lg:text-4xl 2xl:text-6xl bold py-2'>{props.title}</p>
                            <p className='text-[0.4rem] sm:text-sm lg:text-lg 2xl:text-4xl text-[#888888]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam praesentium tempora quas blanditiis repellat dolorem! Tempore magnam labore iste repellat, saepe iure sit sapiente neque placeat totam voluptas odit! Odio.</p>
                          </div>
                          <div className='w-full pt-2 '>
                            <p className='justify-evenly flex sm:w-full font-bold'><span className='text-red-500 text-xs sm:text-xl  md:text-xl lg:text-2xl 2xl:text-5xl'>{props.price} DZD</span>   <span className=' text-xs sm:text-xl md:text-xl lg:text-2xl 2xl:text-5xl line-through'> {props.prixavant}DZD</span> </p>
                          </div>
                          <div className='flex py-2  w-[90%] items-center justify-between   '>
                                  <div className='flex flex-col text-[0.5rem] sm:text-xs md:text-sm lg:text-xl 2xl:text-2xl text-gray-500'>
                                        <p>A partir de : {startdate}</p>
                                        <p>Jusqu&apos;a : {enddate}</p>
                                      
                                  </div>
                                  <Link href={`/event/${props.id}`}>
                                              <span className='text-[#DB2719] text-xs sm:text-xl lg:text-3xl  2xl:text-5xl underline font-bold'>Voir Plus</span>
                                  </Link> 
                          </div>
                  </div>
          </div>
        </div>}
    </div>
  )
}

export default OffresCard