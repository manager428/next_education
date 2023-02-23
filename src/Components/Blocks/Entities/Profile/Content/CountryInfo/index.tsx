import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import PT from 'prop-types'

import countries from 'get-countries-info'
import GoogleMapReact from 'google-map-react'

import get from 'lodash/get'

import { Element } from 'Components/UI'

import Marker from 'Components/Blocks/Entities/Profile/Content/CountryInfo/MapMarker'
import {
  InfoWrap,
  Map,
  Wrap,
} from 'Components/Blocks/Entities/Profile/Content/CountryInfo/styles'
import {
  BlockTitle,
  ContentTitleText,
  RoundedBlock,
} from 'Components/Blocks/Entities/Profile/styles'

import { GOOGLE_MAP_KEY } from 'Config'

import { useScopedI18n } from 'Services/I18n'

import { normalizeCountryName } from 'Utils/common'

const CountryInfo = ({ country }) => {
  const s = useScopedI18n('profile.content.countryInfo')
  const normalCountryName = normalizeCountryName(country)

  const nFormatter = (num, digits) => {
    const si = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: ' thousands' },
      { value: 1e6, symbol: ' millions' },
      { value: 1e9, symbol: ' billions' },
    ]
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    let i
    for (i = si.length - 1; i > 0; i -= 1) {
      if (num >= si[i].value) {
        break
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol
  }
  const countryInfo = countries({ name: normalCountryName })
  const countryData = countryInfo.length > 0 ? countryInfo[0] : {}
  const region = get(countryData, 'region', '')
  const population = get(countryData, 'population', 0)
  const capital = get(countryData, 'capital', '')
  const wiki = get(countryData, 'wiki', '')
  const latLng = get(countryData, 'latlng', false)
  const iso = get(countryData, 'ISO.alpha2')

  return (
    <Wrap>
      <BlockTitle>
        <ContentTitleText>
          <span>
            {s('about')} {country}
          </span>
          <Element ml="5px">
            <ReactCountryFlag
              countryCode={iso}
              style={{
                width: '18px',
                height: '18px',
              }}
              svg
            />
          </Element>
        </ContentTitleText>
      </BlockTitle>
      <RoundedBlock style={{ marginTop: '12px' }}>
        <InfoWrap>
          <div className="row">
            <div className="label">{s('capital')}:</div>
            {capital}
          </div>
          <div className="row">
            <div className="label">{s('region')}:</div>
            {region}
          </div>
          <div className="row">
            <div className="label">{s('population')}:</div>
            {nFormatter(population, 3)}
          </div>
          {wiki.length > 0 && (
            <div className="row">
              <div className="label">{s('moreInformation')}:</div>
              <a href={wiki} rel="noopener noreferrer" target="_blank">
                {s('openWikipedia')}
              </a>
            </div>
          )}
        </InfoWrap>
      </RoundedBlock>
      {latLng !== false && (
        <Map>
          <div style={{ height: '360px', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: GOOGLE_MAP_KEY,
              }}
              defaultCenter={latLng}
              defaultZoom={5}
            >
              <Marker lat={get(latLng, '[0]', 0)} lng={get(latLng, '[1]', 0)} />
            </GoogleMapReact>
          </div>
        </Map>
      )}
    </Wrap>
  )
}

CountryInfo.propTypes = {
  country: PT.string.isRequired,
}

export default CountryInfo
