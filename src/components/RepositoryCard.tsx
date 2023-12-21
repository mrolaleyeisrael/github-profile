import React from 'react'
import Image from 'next/image'
import icon from '../../public/Chield_alt.svg'
import star from '../../public/Star.svg'
import nesting from '../../public/Nesting.svg'
import { calculateDaysDifference } from '../utils/dayCalculator'
import Link from 'next/link'


const RepositoryCard = ({ title, description, updatedAt, url }: { title: string, description: string, updatedAt: string, url: string }) => {
  return (
    <Link href={url} target='_blank' >
      <div className='  bg-gradient-to-r from-[#111729] to-[#1D1B48] rounded-xl p-4 flex gap-2 flex-col text-[#CDD5E0]  ' >
        <h3 className=' text-sm text-[#CDD5E0]  '>{title}</h3>
        <p className=' text-xs '>{description ?? "Description not available"}</p>
        <div className='mt-2 flex gap-4 items-center'>
          <div className=' flex text-xs items-center gap-1 '>
            <Image src={icon} alt='icon' className=' h-5 w-5' />

            <p>245</p>
          </div>

          <div className=' flex text-xs items-center gap-1 '>
            <Image src={nesting} alt='icon' className=' h-5 w-5' />
            <p>245</p>
          </div>
          <div className=' flex text-xs items-center gap-1 '>
            <Image src={star} alt='icon' className=' h-5 w-5' />
            <p>245</p>
          </div>
          {/* last updated */}
          <p className=' text-[#CDD5E0] text-xs  '>{calculateDaysDifference(updatedAt)} days ago</p>
        </div>
      </div >
    </Link>
  )
}

export default RepositoryCard