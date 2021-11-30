const functions = {
  onBodyClick: (e) => {
    e.stopPropagation()
    window.parent.postMessage(
      { action: 'selectElement', data: 'background' },
      '*'
    )
  },

  onTextClick: (e) => {
    const checkForChange = () => {
      if (document.activeElement !== e.target) return
      const content = document.getElementById('templateParagraph').textContent
      window.parent.postMessage(
        { data: content, action: 'changeParagraph' },
        '*'
      )
      setTimeout(checkForChange, 1500)
    }
    checkForChange()
    e.stopPropagation()
    window.parent.postMessage({ data: 'text', action: 'selectElement' }, '*')
  },

  onHeaderClick: (e) => {
    const checkForChange = () => {
      if (document.activeElement !== e.target) return
      const content = document.getElementById('templateHeader').textContent
      window.parent.postMessage({ data: content, action: 'changeHeader' }, '*')
      setTimeout(checkForChange, 1500)
    }
    checkForChange()
    e.stopPropagation()
    window.parent.postMessage({ data: 'header', action: 'selectElement' }, '*')
  },

  onPictureClick: (e) => {
    e.stopPropagation()
    window.parent.postMessage({ data: 'picture', action: 'selectElement' }, '*')
  },

  onButtonClick: (e) => {
    e.stopPropagation()
    window.parent.postMessage({ data: 'button', action: 'selectElement' }, '*')
  },

  onSocialMediaClick: (e) => {
    e.stopPropagation()
    window.parent.postMessage(
      { data: 'socialMedia', action: 'selectElement' },
      '*'
    )
  },
}

export default functions
