module.exports = {
  presets: [
    //biblioteca que dentifica qual ambiente a aplicação esta sendo executada, e diz para o babel o queprecisa ser convertido
    '@babel/preset-env',

    //Para que o babel entenda o codigo react
    ['@babel/preset-react',{
      //configuração para não ser necessário importar o react quando for usar a sintaxe jsx
      runtime:'automatic',
    }]
  ]
}