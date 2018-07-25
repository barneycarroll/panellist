export default v => ({
  view: fresh => {
    v = fresh
  },

  oninit({state}){
    state.window = window.open(...v.attrs.open)

    const target = v.attrs.target || (() =>
      it.document.body
    )

    if (state.window)
      m.mount(
        target(state.window),
        { view: () => v.attrs.view(v) },
      )
  }
})
