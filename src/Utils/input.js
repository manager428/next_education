export const placeCaretAtEnd = ref => {
  ref.current.focus()
  if (
    typeof window.getSelection !== 'undefined' &&
    typeof document.createRange !== 'undefined'
  ) {
    const range = document.createRange()

    range.selectNodeContents(ref.current)
    range.collapse(false)

    const sel = window.getSelection()

    if (sel) {
      sel.removeAllRanges()
      sel.addRange(range)
    }
  } else if (typeof document.body.createTextRange !== 'undefined') {
    const textRange = document.body.createTextRange()

    textRange.moveToElementText(ref.current)
    textRange.collapse(false)
    textRange.select()
  }
}

export const removeSpanFromElement = (event, ref, message = '') => {
  if (window.getSelection && event.which === 8) {
    // backspace
    // fix backspace bug in FF
    // https://bugzilla.mozilla.org/show_bug.cgi?id=685445

    const selection = window.getSelection()

    if (!selection.isCollapsed || !selection.rangeCount) {
      return
    }

    const curRange = selection.getRangeAt(selection.rangeCount - 1)

    if (
      curRange.commonAncestorContainer.nodeType === 3 &&
      curRange.startOffset > 0
    ) {
      // we are in child selection. The characters of the text node is being deleted
      return
    }

    const range = document.createRange()

    if (selection.anchorNode !== event.target) {
      // selection is in character mode. expand it to the whole editable field
      range.selectNodeContents(event.target)
      range.setEndBefore(selection.anchorNode)
    } else if (selection.anchorOffset > 0) {
      range.setEnd(event.target, selection.anchorOffset)
    } else {
      // reached the beginning of editable field
      return
    }
    range.setStart(event.target, range.endOffset - 1)

    const previousNode = range.cloneContents().lastChild

    if (previousNode && previousNode.contentEditable === 'false') {
      // this is some rich content, e.g. smile. We should help the user to delete it

      range.deleteContents()
      event.preventDefault()

      // eslint-disable-next-line no-param-reassign
      ref.current.innerHTML = message
    }
  }
}
