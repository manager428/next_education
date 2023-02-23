import React, { memo, useEffect, useState } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps'
import ReactTooltip from 'react-tooltip'

import { Flex } from 'Components/UI'

import { theme } from 'Theme'

import { ZoomButton } from './styles'

const geoUrl = '/static/map/world-110m.json'

type Props = {
  coloredCountries: string[]
  scale?: number
  width?: number
  height?: number
  isZoomable?: boolean
  setTooltipContent?: (value: any) => void
}

const Map = ({
  isZoomable = true,
  scale = 145,
  width = 800,
  height = 600,
  setTooltipContent,
  coloredCountries,
}: Props) => {
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 })

  useEffect(() => {
    ReactTooltip.rebuild()
  }, [])

  function handleZoomIn() {
    if (position.zoom >= 4) return
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 2 }))
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 2 }))
  }

  function handleMoveEnd(pos) {
    setPosition(pos)
  }

  function renderDefault() {
    return (
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              geography={geo}
              key={geo.rsmKey}
              style={{
                default: {
                  fill: coloredCountries.includes(geo.properties.ISO_A2)
                    ? theme.colors.green
                    : theme.colors.blueMid,
                  outline: 'none',
                },
                hover: {
                  fill: theme.colors.green,
                  outline: 'none',
                },
                pressed: {
                  fill: theme.colors.green,
                  outline: 'none',
                },
              }}
              tabIndex={-1}
              onMouseEnter={() => {
                const { ISO_A2 } = geo.properties
                if (setTooltipContent) setTooltipContent(ISO_A2)
              }}
              onMouseLeave={() => {
                if (setTooltipContent) setTooltipContent('')
              }}
            />
          ))
        }
      </Geographies>
    )
  }

  function renderZoomable() {
    return (
      <ZoomableGroup
        center={position.coordinates}
        maxZoom={isZoomable ? 8 : 1}
        minZoom={isZoomable ? 1 : 1}
        zoom={position.zoom}
        onMoveEnd={handleMoveEnd}
      >
        {renderDefault()}
      </ZoomableGroup>
    )
  }

  return (
    <Flex flexWrap="wrap" width={1}>
      {isZoomable && (
        <Flex justifyContent="flex-end" mb="5px" width={1}>
          <ZoomButton mr="14px" onClick={handleZoomIn}>
            +
          </ZoomButton>
          <ZoomButton onClick={handleZoomOut}>-</ZoomButton>
        </Flex>
      )}

      <ComposableMap
        data-tip=""
        height={height}
        projectionConfig={{ scale }}
        style={{ width: '100%', height: '100%' }}
        width={width}
      >
        {isZoomable ? renderZoomable() : renderDefault()}
      </ComposableMap>
    </Flex>
  )
}

export default memo(Map)
