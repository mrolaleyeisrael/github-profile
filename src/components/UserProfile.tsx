// UserProfile.tsx
import Image from 'next/image';
import RepositoryCard from '@/components/RepositoryCard';

const UserProfile = ({ profileData, isLoadingRepositories, isErrorRepositories, repositories,  }: any) => {
  return (
    <>
      <Image
        src={profileData.avatar_url}
        width={50}
        height={50}
        alt='profile image'
        className='w-24 h-24 rounded-xl -mt-14 absolute bg-[#20293A] p-2'
      />

      <div className='flex flex-col md:flex-row md:gap-10 gap-2 pt-10 justify-center'>
        <div className='rounded-xl bg-[#111729] py-2 px-4 w-fit flex gap-4'>
          <p className='text-[#4A5567] pr-4 border-r border-[#4A5567]'>Followers</p>
          <span className='text-[#CDD5E0]'>{profileData.followers}</span>
        </div>
        <div className='rounded-xl bg-[#111729] py-2 px-4 w-fit flex gap-4'>
          <p className='text-[#4A5567] pr-4 border-r border-[#4A5567]'>Following</p>
          <span className='text-[#CDD5E0]'>{profileData.following}</span>
        </div>
        <div className='rounded-xl bg-[#111729] py-2 px-4 w-fit flex gap-4'>
          <p className='text-[#4A5567] pr-4 border-r border-[#4A5567]'>Location</p>
          <span className='text-[#CDD5E0]'>{profileData.location ?? "Private "}</span>
        </div>
      </div>

      <div className='mt-10 w-fit'>
        <h1 className='text-3xl mb-2'>{profileData.login}</h1>
        <p>{profileData.bio}</p>
      </div>

      {isLoadingRepositories && <p>Loading repositories...</p>}
      {isErrorRepositories && <p>Error loading repositories</p>}
      {repositories && (
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-4 mt-5 overflow-scroll ' >
          {repositories?.slice(0, 4).map((repo: any) => (
            <RepositoryCard key={repo.id} title={repo.name} description={repo.description} updatedAt={repo.updated_at} url={repo.html_url}  />
          ))}
        </div>
      )}

      <div className='text-center mt-10'>
        <p className='text-sm text-[#CDD5E0]'>View all repositories</p>
      </div>
    </>
  );
};

export default UserProfile;
