import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Header from '../../components/Header'
import GeneralDetails from '../../components/nft/GeneralDetails'
import ItemActivity from '../../components/nft/ItemActivity'
import NFTImage from '../../components/nft/NFTImage'
import Purchase from '../../components/nft/Purchase'
import { useGetListMarket } from '../../hooks/useGetListMarket'
import { useGetListNFT } from '../../hooks/useGetListNFT'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  const router = useRouter()
  const nfts = useGetListNFT()
  const listings = useGetListMarket()

  const selectedNft = useMemo(() => {
    return nfts.find((nft) => nft.id === router.query.nftId)
  }, [nfts])

  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                listings={listings}
              />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  )
}

export default Nft
