import React from 'react'
import { Container, Header } from 'decentraland-ui'
import { getAssetName } from '../../../modules/asset/utils'
import { PageHeader } from '../../PageHeader'
import { AssetImage } from '../../AssetImage'
import { Row } from '../../Layout/Row'
import { Column } from '../../Layout/Column'
import { Title } from '../Title'
import { WearableRarity } from '../WearableRarity'
import { WearableHighlights } from '../WearableHighlights'
import { Owner } from '../Owner'
import { Description } from '../Description'
import { OrderDetails } from '../OrderDetails'
import { Actions } from '../Actions'
import { Bids } from '../Bids'
import { TransactionHistory } from '../TransactionHistory'
import { Props } from './WearableDetail.types'
import './WearableDetail.css'
import { AssetType } from '../../../modules/asset/types'

const WearableDetail = (props: Props) => {
  const { nft } = props
  const wearable = nft.data.wearable!

  return (
    <div className="WearableDetail">
      <PageHeader>
        <AssetImage asset={nft} />
      </PageHeader>
      <Container>
        <Title
          left={
            <Header size="large">
              <div className="text">
                {getAssetName(nft)}
                <WearableRarity type={AssetType.NFT} wearable={wearable} />
              </div>
            </Header>
          }
          right={<Owner asset={nft} />}
        />
        <Description text={wearable.description} />
        <Row>
          <Column align="left" grow={true}>
            <OrderDetails nft={nft} />
          </Column>
          <Column align="right">
            <Actions nft={nft} />
          </Column>
        </Row>
        <WearableHighlights type={AssetType.ITEM} wearable={wearable} />
        <Bids nft={nft} />
        <TransactionHistory nft={nft} />
      </Container>
    </div>
  )
}

export default React.memo(WearableDetail)