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
    <div className='flex w-[90%] lg:w-[95%] 2xl:w-[90%]  flex-col lg:flex-row lg:justify-evenly justify-center items-center'>
      
      {props.isOffre &&
        <div className='flex justify-evenly w-full items-center'>
            <div className=' grid md:grid-cols-[1.25fr_1.5fr]  lg:grid-cols-[1.5fr_2fr] lg:h-[320px] grid-cols-[1.8fr_2fr] h-[20%]  items-center justify-between gap-4 w-[90%]  md:w-[90%] md:h-[20%] border   border-[#D12621]  rounded-[20px] '>
                <div className='flex justify-start  h-full w-full overflow-hidden '>
                              <div className='relative h-full  top-0 left-0  '>
                                <p className='absolute  flex w-[60px] sm:w-[100px] lg:w-[120px] 2xl:w-[250px] border-y border-black sm:h-[30px] lg:h-[50px] 2xl:h-[50px] sm:text-center text-start  items-center text-white text-[0.7rem] skew-y-[-40deg] h-[20px] bg-[#D12621] '>
                                  <span className='p-1 sm:p-4 lg:p-5  2xl:p-10 lg:text-lg 2xl:text-2xl  sm:text-xs skew-y-[1deg] font-bold '>-20%</span>
                                </p> 
                              </div>
                              <img src={`${props.image}`} 
                                  className='w-full h-full rounded-l-[18px] object-cover lg:h-[320px] rounded-r-none  items-center 2xl:rounded-[15px] ' 
                                  alt="haha" 
                                  width={500} 
                                  height={500}
                                  
                              />
                              
                </div>     
                  
                <div className='flex flex-col max-w-[1500px] h-full  w-full justify-evenly '>
                         <div className='2xl:flex 2xl:flex-col 2xl:justify-between gap-10'>
                            <p className='text-[0.7rem] sm:text-xl lg:text-2xl 2xl:text-3xl  bold py-2'>{props.title}</p>
                            {/* <p className='text-[0.4rem] sm:text-xs lg:text-lg 2xl:text-xl  text-[#888888]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam praesentium tempora quas blanditiis repellat dolorem! Tempore magnam labore iste repellat, saepe iure sit sapiente neque placeat totam voluptas odit! Odio.</p> */}
                          </div>
                          <div className='w-full pt-2 '>
                            <p className='justify-evenly flex sm:w-full font-bold'><span className='text-red-500 text-[0.5rem] sm:text-lg  md:text-xl lg:text-xl 2xl:text-2xl'>{props.price} DZD</span>   <span className=' text-[0.5rem] sm:text-lg md:text-xl lg:text-xl 2xl:text-2xl line-through'> {props.prixavant}DZD</span> </p>
                          </div>
                          <div className='flex py-2  w-[90%] items-center justify-between   '>
                                  <div className='flex flex-col text-[0.4rem] sm:text-[0.7rem] md:text-sm  2xl:text-lg text-gray-500'>
                                        <p>A partir de : {startdate}</p>
                                        <p>Jusqu&apos;a : {enddate}</p>
                                      
                                  </div>
                                  <Link href={`/event/${props.id}`}>
                                              <span className='text-[#DB2719] text-[0.5rem] sm:text-sm lg:text-2xl  2xl:text-3xl underline font-bold'>Voir Plus</span>
                                  </Link> 
                          </div>
                  </div>
          </div>
        </div>}
        <div className='w-[40%]'>
        <div className='flex justify-start  h-full w-full overflow-hidden '>
                              <div className='relative h-full  top-0 left-0  '>
                                <p className='absolute  flex w-[60px] sm:w-[100px] lg:w-[120px] 2xl:w-[250px] border-y border-black sm:h-[30px] lg:h-[50px] 2xl:h-[50px] sm:text-center text-start  items-center text-white text-[0.7rem] skew-y-[-40deg] h-[20px] bg-[#D12621] '>
                                  <span className='p-1 sm:p-4 lg:p-5  2xl:p-10 lg:text-lg 2xl:text-2xl  sm:text-xs skew-y-[1deg] font-bold '>-20%</span>
                                </p> 
                              </div>
                              <img src={`${props.image}`} 
                                  className='w-full h-full rounded-l-[18px] object-cover lg:h-[320px] rounded-r-none  items-center 2xl:rounded-[15px] ' 
                                  alt="haha" 
                                  width={500} 
                                  height={500}
                                  
                              />
                              
                </div>  
        </div>
    </div>
  )
}

export default OffresCard