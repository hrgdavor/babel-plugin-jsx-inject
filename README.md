# babel-plugin-jsx-inject [![CircleCI](https://img.shields.io/circleci/project/hrgdavor/babel-plugin-jsx-inject.svg?maxAge=2592006)](https://circleci.com/gh/hrgdavor/babel-plugin-jsx-inject)

> Babel plugin to inject JSX from external file.

Can be combined with [babel-plugin-jsx-simple](https://github.com/hrgdavor/babel-plugin-jsx-simple)
and [babel-plugin-jsx-translate](https://github.com/hrgdavor/babel-plugin-jsx-translate)

Used in [mi2js](https://github.com/hrgdavor/mi2js) library.


# Usage

Used with babel by adding plugin to `.babelrc`
```json
{
    plugins: ["jsx-inject"]
}
```


The plugin replaces occurrence of an `return <template/>` statement with JSX from external file.

If you jou have a file `sample.js` with:

```js
//...
    function myFunc(h){
        return <template/>
    }
//...
```

and template file `sample.tpl` in the same folder

```js
<div>
    <h1>Title</h1>
    <p>{state.text}</p>
</div>
```

the `sample.tpl` will be injected in the `sample.js` resulting in something like this

```js
//...
    function myFunc(h){
        return <div>
            <h1>Title</h1>
            <p>{state.text}</p>
        </div>
    }
//...
```

# arrow expression

it is good to know that for purpose of catching a return statement, an arrow expression like:

```js
applyHtml( h=><template/> );
```

is pretty much the same (except of arrow expression scoping) as:

```js
applyHtml( function(h){ return <template/>;} );
```
