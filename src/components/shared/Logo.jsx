import { useRouter } from '../../hooks/use-router'

export const Logo = ({ color = 'white', callback = null }) => {
  const router = useRouter()

  return (
    <div className='flex items-center gap-2'>
      <h2
        className='text-2xl font-light cursor-pointer'
        style={{ color }}
        onClick={() => {
          router.push('/')
          if (callback) callback()
        }}
      >
        Ethos Yachting
      </h2>
    </div>
  )
}
