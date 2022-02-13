import { useEffect, useMemo, useState } from 'react'
import { useNFTModule } from './useNFTModule'

export const useGetListNFT = () => {
  const nftModule = useNFTModule()
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()
      setNfts(nfts)
    })()
  }, [nftModule])

  return useMemo(() => nfts, [nfts])
}
