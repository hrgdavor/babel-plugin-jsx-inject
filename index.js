
module.exports = function (babel) {
  var t = babel.types

  return {
    visitor: {
        JSXElement: {
        exit (path, state) {
          var name = path.node.openingElement.name.name;
          if(name == 'template' && t.isReturnStatement(path.parentPath)){
            var filename = state.file.opts.filename;
            var idx = filename.lastIndexOf('.js');
            var srcOpts = state.file.opts;

            if(idx != -1){
              var templatename = filename.substring(0,idx)+'.tpl';
              
              var transformOpts = {parserOpts:{sourceFilename: templatename}, code:false};
              ['presets','plugins'].map(function(p){ transformOpts[p] = srcOpts[p]; });

              var tpl = babel.transformFileSync(templatename, transformOpts);

              var body = tpl.ast.program.body;
              body[body.length-1] = t.returnStatement(body[body.length-1].expression);
              path.parentPath.replaceWithMultiple(body);            
            }
          }
        }
      }
    }
  }
}

