import map from 'lodash/map'

export const isServer = typeof window === 'undefined'

export const entityToOptions = (
  data: string[],
  { withHash = true, uppercase = true },
) =>
  map(data, entity => {
    let label = withHash ? `#${entity.toUpperCase()}` : `${entity}`

    if (uppercase) {
      label = label.toUpperCase()
    }
    return {
      label,
      value: entity,
    }
  })

export const normalizeCountryName = name => {
  if (name === 'Russian Federation') {
    return 'Russia'
  }
  return name
}

export const copyToClipboard = value => {
  const input = document.createElement('input')
  input.setAttribute('value', value ?? '')
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}
