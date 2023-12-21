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
    <main className=' w-screen h-screen relative max-w-[1400px] mx-auto '  >
      <div className=' h-[30vh] w-full object-contain pt-4 ' style={{
        backgroundImage: "url('/hero-image-github-profile.png')", backgroundSize: "contain",
        backgroundRepeat: "no-repeat"
      }} >
        <SearchBar onSearch={(value:string) => setUsername(value)} />

      </div>

      <section className=' px-[152px] bg-[#20293A] h-[70vh] relative pt-3 ' >

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading data</p>}
        {profileData && (
          <UserProfile profileData={profileData} isLoadingRepositories={isLoadingRepositories} isErrorRepositories={isErrorRepositories} repositories={repositories} />
        )}

      </section>
    </main>
  )
}
