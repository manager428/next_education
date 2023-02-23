/* eslint-disable */
import React, { useEffect } from 'react'

import InnerHTML from 'dangerously-set-html-content'

import { Wrapper } from './styles'

const BookForm: React.FC = () => {
  useEffect(() => {
    // @ts-ignore
    !(function (a, m, o, c, r, ) {
      (a[o + c] = a[o + c] || {
        setMeta(p) {
          this.params = (this.params || []).concat([p])
        },
      }),
        (a[o + r] =
          a[o + r] ||
          function (f) {
            a[o + r].f = (a[o + r].f || []).concat([f])
          }),
        a[o + r]({
          id: '884206',
          hash: 'bad75390b213ac29836c89021325ce2f',
          locale: 'ru',
        }),
        (a[o + m] =
          a[o + m] ||
          function (f, k) {
            a[o + m].f = (a[o + m].f || []).concat([[f, k]])
          })
    })(window, 0, 'amo_forms_', 'params', 'load', )
  }, [])

  return (
    <Wrapper>
      <InnerHTML
        html={`<script id="amoforms_script_884206" async="async" charset="utf-8" src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1641952570"></script>`}
      />
    </Wrapper>
  )
}

export default BookForm
