import { useMemo } from 'react'
import { ADDRESS_CONTRACT } from '../config/address'
import { useThirdWebSDK } from './useThirdWebSDK'

export const useMarketModule = () => {
  const web3SDK = useThirdWebSDK()

  return useMemo(() => {
    if (!web3SDK) return
    return web3SDK.getMarketplaceModule(ADDRESS_CONTRACT.MARKET)
  }, [web3SDK])
}
