'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Image from 'next/image'
// import { debounce } from 'lodash';
import debounce from 'lodash/debounce'
import searcIcon from '../../public/Search.svg'
import icon from '../../public/Chield_alt.svg'
import RepositoryCard from '@/components/RepositoryCard'
import { useQuery, useIsFetching } from '@tanstack/react-query'
import { useState, ChangeEvent } from 'react'
import SearchBar from '@/components/SearchBar'
import UserProfile from '@/components/UserProfile'

export default function Home() {
  const [username, setUsername] = useState('github')


  const { data: profileData, isLoading, isError, isSuccess } = useQuery<any>({
    queryKey: ["profile", username],
    queryFn: () => fetch(`https://api.github.com/users/${username}`).then((res) => res.json()),
    enabled: !!username, // Fetch on page load
  });

  const { data: repositories, isLoading: isLoadingRepositories, isError: isErrorRepositories } = useQuery<any>({
    queryKey: ["repositories", username],
    queryFn: () => fetch(`https://api.github.com/users/${username}/repos`).then((res) => res.json()),
    enabled: !!username, // Fetch on page load
  });

  return (
    <main className=' w-screen h-screen relative md:max-w-[1400px] mx-auto overflow-scroll  '  >
      <div className=' md:h-[30vh] h-[20vh]  w-full md:object-contain pt-4 px-4 ' style={{
        backgroundImage: "url('/hero-image-github-profile.png')", backgroundSize: "cover", backgroundPosition:"center",
        backgroundRepeat: "no-repeat"
      }} >
        <SearchBar onSearch={(value:string) => setUsername(value)} />

      </div>

      <section className=' md:px-[152px] bg-[#20293A] md:h-[70vh] h-[80vh] relative pt-3 px-4  z-10 ' >

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading data</p>}
        {profileData && (
          <UserProfile profileData={profileData} isLoadingRepositories={isLoadingRepositories} isErrorRepositories={isErrorRepositories} repositories={repositories} />
        )}

      </section>
    </main>
  )
}
