import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useMemo } from 'react'

export const useThirdWebSDK = () => {
  const { provider } = useWeb3()

  return useMemo(() => {
    if (!provider) return

    return new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/m-ORCxBJbrxmqSkmiJ0Wg-zZ0J3xZncQ'
    )
  }, [provider])
}
