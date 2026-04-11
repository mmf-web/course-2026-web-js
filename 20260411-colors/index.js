const renderer = new Renderer(document.querySelector('#colors-container'))
renderer.addSchema(new RGB())
renderer.addSchema(new CMY())
renderer.addSchema(new LongNumber())
