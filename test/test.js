
describe('babel-plugin-jsx-mi2', () => {

  it('jsx', () => {
    const vnode = render(h => <div city="City">Name: test</div>)
    
    expect(vnode.tag).toEqual('div')
    expect(vnode.children[0]).toEqual('Name: test')
    expect(vnode.attr.city).toEqual('City')
  })

  it('jsx inject', () => {
    const vnode = render(h => <template/>)
    
    expect(vnode.tag).toEqual('div')
    expect(vnode.children[0]).toEqual('From Template')
    expect(vnode.attr.city).toEqual('City 1')
  })


  function render(callback){
    return callback(createElement);
  }

  function createElement(tag, attr, ...children){
    return {tag, attr, children};
  }

})

