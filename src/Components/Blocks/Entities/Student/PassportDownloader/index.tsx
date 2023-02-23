import React, { useCallback, useState } from 'react'

import { saveAs } from 'file-saver'
import { toPng } from 'html-to-image'
import { toBlob } from 'html-to-image/es'
import jsPDF from 'jspdf'
import JSZip from 'jszip'

import chunk from 'lodash/chunk'
import flatten from 'lodash/flatten'
import map from 'lodash/map'

import Header from 'Components/Blocks/Entities/Student/PassportDownloader/Header'
import Page from 'Components/Blocks/Entities/Student/PassportDownloader/Page'

const MAIN_PAGE_LIMIT = 15
const PAGE_LIMIT = 66

const PassportDownloader = ({
  fullName,
  countriesCount,
  travelsCount,
  trips,
  visitedCodes,
}: {
  fullName: string
  countriesCount: number
  travelsCount: number
  visitedCodes: string[]
  trips: {
    countryCode: string
    country: string
    visits: number
  }[]
}) => {
  const [pageRefs, setPageRefs] = useState<React.RefObject<HTMLDivElement>[]>(
    [],
  )

  const handleDownloadPdf = useCallback(async () => {
    const promises: Promise<any>[] = []
    // eslint-disable-next-line new-cap
    const pdf = new jsPDF('l')
    const pdfWidth = pdf.internal.pageSize.getWidth()

    pageRefs.forEach(ref => {
      if (ref && ref?.current) {
        promises.push(
          toPng(ref.current, {
            quality: 1,
            pixelRatio: 1,
          }),
        )
      }
    })

    await Promise.all(promises).then(data => {
      data.forEach((dataUrl, index) => {
        if (index !== 0) pdf.addPage()

        const imgProps = pdf.getImageProperties(dataUrl)
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
      })
    })

    pdf.save('digital-passport.pdf')
  }, [pageRefs])

  const handleDownloadImages = useCallback(async () => {
    const zip = new JSZip()
    const promises: Promise<any>[] = []

    pageRefs.forEach(ref => {
      if (ref && ref?.current) {
        promises.push(toBlob(ref.current, { cacheBust: true }))
      }
    })

    await Promise.all(promises).then(data => {
      data.forEach((blob, index) => {
        zip.file(`page-${index + 1}.png`, blob, { base64: true })
      })
    })

    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, 'digital-passport.zip')
    })
  }, [pageRefs])

  const handleAddRef = useCallback(
    ref => {
      setPageRefs(prevRef => [...prevRef, ref])
    },
    [setPageRefs],
  )

  const tripsByPages = () => {
    const [mainPageChunk, ...otherChunks] = chunk(trips, MAIN_PAGE_LIMIT)
    const otherPagesChunks = chunk(flatten(otherChunks), PAGE_LIMIT)

    return [mainPageChunk, ...otherPagesChunks]
  }

  const renderPages = () => {
    const pages = tripsByPages()
    const pagesTotal = pages.length

    return map(pages, (page, index) => (
      <Page
        countriesCount={countriesCount}
        fullName={fullName}
        isMain={index === 0}
        key={index}
        page={`Page ${index + 1}/${pagesTotal}`}
        travelsCount={travelsCount}
        trips={page}
        visitedCodes={visitedCodes}
        onSetRef={handleAddRef}
      />
    ))
  }

  return (
    <>
      <Header
        onDownloadImage={handleDownloadImages}
        onDownloadPdf={handleDownloadPdf}
      />
      {renderPages()}
    </>
  )
}

export default PassportDownloader
