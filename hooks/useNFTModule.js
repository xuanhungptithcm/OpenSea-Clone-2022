import { useMemo } from 'react'
import { ADDRESS_CONTRACT } from '../config/address'
import { useThirdWebSDK } from './useThirdWebSDK'

export const useNFTModule = () => {
  const web3SDK = useThirdWebSDK()

  return useMemo(() => {
    if (!web3SDK) return
    return web3SDK.getNFTModule(ADDRESS_CONTRACT.NFT)
  }, [web3SDK])
}
