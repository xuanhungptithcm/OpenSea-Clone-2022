import { useEffect, useMemo, useState } from 'react'
import { useMarketModule } from './useMarketModule'

export const useGetListMarket = () => {
  const marketPlaceModule = useMarketModule()
  const [listings, setListings] = useState([])

  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])

  return useMemo(() => listings, [listings])
}
