export default v => ({
  view: fresh => (
    v = fresh,
    viewOf(v).call(v.state, v)
  ),

  oncreate: fresh => {
    v = fresh

    v.dom.addEventListener('onmousedown', e => {
      v.state.starting = true
      v.attrs.start && v.attrs.start(e)

      const drag = ['onmousemove', e => {
        v.state.starting = false
        v.state.dragging = true
        v.attrs.drag && v.attrs.drag(e)
      }, true]

      window.addEventListener(...drag)
      window.addEventListener('onmouseup', e => {
        window.removeEventListener(...drag)

        v.state.dragging = false
        v.attrs.end && v.attrs.end(e)
      }, {once:true})
    })
  },
})
